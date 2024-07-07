"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { lusitana } from "@/lib/fonts";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
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
import { Separator } from "@/components/ui/separator";
import ScrollButton from "@/components/scroll-button";

const links = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Saya", href: "/tentang" },
  { name: "Blog", href: "/blog" },
  { name: "Publikasi", href: "/publikasi" },
  { name: "Media", href: "/media" },
  { name: "Kontak", href: "/kontak" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background">
        <nav className="container mx-auto py-2 flex justify-end sm:justify-between items-center gap-4 ">
          <ul className="hidden justify-start items-center sm:flex">
            {links.map((item) => (
              <li key={item.name}>
                <Button
                  variant="link"
                  size="sm"
                  className={cn(
                    "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                    pathname === item.href ? "text-primary" : ""
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                      {item.name}
                    </span>
                  </Link>
                </Button>
              </li>
            ))}
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
            <SheetContent className="flex flex-col">
              <SheetHeader>
                <SheetTitle className={lusitana.className}>NOVELTI</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col justify-start">
                  {links.map((item) => (
                    <li key={item.name}>
                      <SheetClose asChild>
                        <Button variant="ghost" asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "w-full h-full",
                              pathname === item.href ? "text-primary" : ""
                            )}
                          >
                            {item.name}
                          </Link>
                        </Button>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full">
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
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="sm:inline-flex hidden"
              >
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
        </nav>
      </header>
      {children}
      <footer className="container mx-auto pt-4 pb-1 mt-12 w-full">
        <Separator />
        <ul className="flex justify-center gap-2 items-center flex-wrap pt-2">
          {links.map((item) => (
            <li key={item.name}>
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                  pathname === item.href ? "text-primary" : ""
                )}
                asChild
              >
                <Link href={item.href}>
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                    {item.name}
                  </span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center pt-6">
          <Button
            variant="link"
            size="sm"
            className="text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu"
            asChild
          >
            <Link
              href="https://github.com/amalrivel/novelti-website"
              target="_blank"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                Designed and built by amalrivel
              </span>
            </Link>
          </Button>
        </div>
      </footer>
      <ScrollButton />
    </>
  );
}
