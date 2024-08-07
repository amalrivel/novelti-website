import * as React from 'react';
import { cn } from '@/lib/utils';
import { lusitana } from '@/lib/fonts';

export default function Publikasi() {
  return (
    <main>
      <section className="flex h-screen w-screen items-center justify-center">
        <h1 className={cn('h1', lusitana.className)}>Halaman Publikasi</h1>
      </section>
    </main>
  );
}
