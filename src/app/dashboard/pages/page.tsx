import { checkAdminAuth } from "@/utils/auth-client";

export default async function Pages() {
  await checkAdminAuth();

  return (
    <>
       <div className="container pt-4">
        <h1 className="text-2xl font-bold">Kelola Halaman</h1>
        <p className="text-muted-foreground">Edit konten halaman website</p>
      </div>
      
    </>
  );
}
