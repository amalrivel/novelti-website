"use client";

import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/libs/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Get fresh ID token
        const idToken = await user.getIdToken(true);

        // Send token to backend
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: idToken }),
        });

        if (response.ok) {
          // Check admin status
          const verifyResponse = await fetch("/api/auth/verify");
          const data = await verifyResponse.json();

          if (data.isAdmin) {
            router.push("/dashboard");
          } else {
            toast({
              variant: "default",
              title: "Selamat Datang",
              description: `Senang bertemu dengan Anda, ${data.user.displayName}! Terima kasih telah mengunjungi website ini.`,
            });
            router.push("/");
          }
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, toast]);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);

      await setPersistence(auth, browserLocalPersistence);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const idToken = await result.user.getIdToken();

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: idToken }),
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Error",
          description:
            "Login gagal. Silakan coba lagi atau hubungi administrator.",
        });

        router.push("/");
      }

      router.refresh();
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Terjadi kesalahan",
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
