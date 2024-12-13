"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState, useCallback } from "react";
import { UserRoundX } from "lucide-react";

const formWebsiteSchema = z.object({
  title: z.string().min(2, {
    message: "Judul harus lebih dari 2 karakter.",
  }),
  description: z.string().min(10, {
    message: "Deskripsi harus lebih dari 10 karakter.",
  }),
});

const formAdminSchema = z.object({
  email: z.string().min(2, {
    message: "Judul harus lebih dari 2 karakter.",
  }),
});

export default function Settings() {
  const { toast } = useToast();
  const [admin, setAdmin] = useState<{ users: string[] } | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const showErrorToast = useCallback(
    (message: string) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    },
    [toast]
  );

  const formWebsite = useForm<z.infer<typeof formWebsiteSchema>>({
    resolver: zodResolver(formWebsiteSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const formAdmin = useForm<z.infer<typeof formAdminSchema>>({
    resolver: zodResolver(formAdminSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    async function loadSettings() {
      try {
        const response = await fetch("/api/settings/website");
        if (!response.ok) throw new Error();
        const data = await response.json();

        formWebsite.reset(data);
      } catch {
        showErrorToast("Gagal memuat pengaturan website");
      }
    }

    loadSettings();
  }, [formWebsite, showErrorToast]);

  useEffect(() => {
    async function fetchAdmins() {
      try {
        const response = await fetch("/api/settings/admin");
        if (!response.ok) throw new Error();
        const data = await response.json();

        setAdmin(data);
      } catch {
        showErrorToast("Gagal memuat daftar admin");
      }
    }
    fetchAdmins();
  }, [showErrorToast]);

  async function onSubmitWebsite(values: z.infer<typeof formWebsiteSchema>) {
    try {
      const response = await fetch("/api/settings/website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error();

      toast({
        title: "Berhasil",
        description: "Pengaturan website berhasil disimpan",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Gagal menyimpan pengaturan",
      });
    }
  }

  async function onSubmitAdmin(values: z.infer<typeof formAdminSchema>) {
    try {
      const response = await fetch("/api/settings/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error();

      setAdmin((prev) => {
        if (!prev) return { users: [values.email] };
        if (prev.users.includes(values.email)) return prev;
        return { users: [...prev.users, values.email] };
      });

      toast({
        title: "Berhasil",
        description: "Admin baru berhasil ditambahkan",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Gagal menambahkan admin",
      });
    }
  }

  const handleDeleteAdmin = async (email: string) => {
    try {
      setDeleting(email);

      const response = await fetch("/api/settings/admin", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error();

      // Update local state after successful deletion
      setAdmin((prev) =>
        prev ? { users: prev.users.filter((e) => e !== email) } : null
      );

      toast({
        title: "Berhasil",
        description: "Admin berhasil dihapus",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Gagal menghapus admin",
      });
    } finally {
      setDeleting(null);
    }
  };

  return (
    <>
      <div className="container pt-4">
        <h1 className="text-2xl font-bold">Pengaturan</h1>
      </div>
      <div className="container flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Pengaturan Website</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...formWebsite}>
              <form
                onSubmit={formWebsite.handleSubmit(onSubmitWebsite)}
                className="space-y-8"
              >
                <FormField
                  control={formWebsite.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Judul</FormLabel>
                      <FormControl>
                        <Input placeholder="Novelti Muis" {...field} />
                      </FormControl>
                      <FormDescription>
                        Ini merupakan nama dari website anda.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formWebsite.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deskripsi</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Website Portofolio Novelti Muis"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Ini merupakan deskripsi dari website anda.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Terapkan</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pengaturan Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Daftar Akun Admin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row gap-2 flex-wrap">
                  {admin ? (
                    admin?.users.map((user, index) => (
                      <Button
                        key={index}
                        disabled={deleting === user}
                        onClick={() => handleDeleteAdmin(user)}
                        variant="outline"
                      >
                        <UserRoundX />
                        {user}
                      </Button>
                    ))
                  ) : (
                    <div>Belum ada admin</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <p className="pb-4">Tambah akun</p>
            <Form {...formAdmin}>
              <form
                onSubmit={formAdmin.handleSubmit(onSubmitAdmin)}
                className="space-y-8"
              >
                <FormField
                  control={formAdmin.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="novelti@example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        Ini merupakan email dari admin yang bisa mengakses
                        website anda.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Tambahkan</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
