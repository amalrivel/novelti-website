import * as React from "react";
import { cn } from "@/lib/utils";
import { lusitana } from "@/lib/fonts";

export default function Blog() {
  return (
    <main>
      <section className="h-screen w-screen flex justify-center items-center">
        <h1 className={cn("h1", lusitana.className)}>Halaman Blog</h1>
      </section>
    </main>
  );
}
