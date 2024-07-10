import * as React from 'react';
import { cn } from '@/lib/utils';
import { lusitana } from '@/lib/fonts';

export default function Kontak() {
  return (
    <main>
      <section className="flex h-screen w-screen items-center justify-center">
        <h1 className={cn('h1', lusitana.className)}>Halaman Kontak</h1>
      </section>
    </main>
  );
}
