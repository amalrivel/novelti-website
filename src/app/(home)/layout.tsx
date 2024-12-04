import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/blog", label: "Blog" },
    { href: "/publikasi", label: "Publikasi" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-accent">
        <div className="container py-4">
          <nav className="flex items-center gap-4 justify-between">
            <span className="font-bold text-xl text-primary whitespace-nowrap">
              NOVELTI MUIS
            </span>

            <ul className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Button variant="link" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <ModeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden" variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="mb-4">
                    <SheetTitle>NOVELTI MUIS</SheetTitle>
                  </SheetHeader>
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Button
                          className="pl-0 w-full justify-start"
                          variant="link"
                          asChild
                        >
                          <Link href={link.href}>{link.label}</Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col py-8">{children}</main>
      <Toaster />
      <footer className="mt-auto">
        <div className="container py-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NOVELTI MUIS. All rights
              reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Designed by{" "}
              <Link
                href="https://github.com/amalrivel"
                className="font-medium underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mia
              </Link>{" "}
              and developed by{" "}
              <Link
                href="https://github.com/amalrivel/novelti-website"
                className="font-medium underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ikhlasul Amal Rivel
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
