"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lusitana } from "@/lib/fonts";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";


export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center gap-4 ">
          <ul className="hidden justify-start items-center sm:flex">
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx("text-accent-foreground hover:text-primary", {
                  "text-primary": pathname === "/",
                })}
                asChild
              >
                <Link href="/">Beranda</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx("text-accent-foreground hover:text-primary", {
                  "text-primary": pathname === "/tentang",
                })}
                asChild
              >
                <Link href="/tentang">Tentang Saya</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx("text-accent-foreground hover:text-primary", {
                  "text-primary": pathname === "/publikasi",
                })}
                asChild
              >
                <Link href="/publikasi">Publikasi</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx("text-accent-foreground hover:text-primary", {
                  "text-primary": pathname === "/media",
                })}
                asChild
              >
                <Link href="/media">Media</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx("text-accent-foreground hover:text-primary", {
                  "text-primary": pathname === "/blog",
                })}
                asChild
              >
                <Link href="/blog">Blog</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx("text-accent-foreground hover:text-primary", {
                  "text-primary": pathname === "/kontak",
                })}
                asChild
              >
                <Link href="/kontak">Kontak</Link>
              </Button>
            </li>
          </ul>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative sm:hidden"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className={lusitana.className}>NOVELTI</SheetTitle>
                <ul className="flex flex-col justify-start">
                  <li>
                    <Button variant="ghost" asChild>
                      <Link
                        href="/"
                        className={clsx("w-full h-full", {
                          "text-primary hover:text-primary active:text-primary":
                            pathname === "/",
                        })}
                      >
                        Beranda
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" asChild>
                      <Link href="/tentang" className={clsx("w-full h-full", {
                          "text-primary hover:text-primary active:text-primary":
                            pathname === "/tentang",
                        })}>
                        Tentang Saya
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" asChild>
                      <Link href="/publikasi" className={clsx("w-full h-full", {
                          "text-primary hover:text-primary active:text-primary":
                            pathname === "/publikasi",
                        })}>
                        Publikasi
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" asChild>
                      <Link href="/media" className={clsx("w-full h-full", {
                          "text-primary hover:text-primary active:text-primary":
                            pathname === "/media",
                        })}>
                        Media
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" asChild>
                      <Link href="/blog" className={clsx("w-full h-full", {
                          "text-primary hover:text-primary active:text-primary":
                            pathname === "/blog",
                        })}>
                        Blog
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" asChild>
                      <Link href="/kontak" className={clsx("w-full h-full", {
                          "text-primary hover:text-primary active:text-primary":
                            pathname === "/kontak",
                        })}>
                        Kontak
                      </Link>
                    </Button>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Terang
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Gelap
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                Sistem
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      {children}
    </>
  );
}
