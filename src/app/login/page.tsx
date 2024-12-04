"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState, useMemo } from "react";
import { Loader2 } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  const ALLOWED_ADMIN_EMAILS: string[] = useMemo(
    () =>
      process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",").map((email) =>
        email.trim()
      ) || [],
    []
  );

  const searchParams = new URLSearchParams(window.location.search);
  const authError = searchParams.get("authError");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (authError) {
          toast({
            variant: "destructive",
            title: "Akses Ditolak",
            description: decodeURIComponent(authError),
          });
          router.push("/");
        }
        else if (user) {
          if (user.email && ALLOWED_ADMIN_EMAILS.includes(user.email)) {
            router.push("/dashboard");
          } else {
            toast({
              variant: "default",
              title: "Selamat Datang",
              description: `Senang bertemu dengan Anda, ${user.displayName}! Terima kasih telah mengunjungi website ini.`,
            });
            router.push("/");
          }
        }
      } catch (error) {
        console.error("Auth error:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Terjadi kesalahan saat login",
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router, ALLOWED_ADMIN_EMAILS, toast, authError]);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const idToken = await result.user.getIdToken();

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: idToken }),
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error ? error.message : "An error occurred",
      });
      
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-4 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <Button
          onClick={signInWithGoogle}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <FaGoogle className="h-5 w-5" />
              Masuk dengan Google
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
