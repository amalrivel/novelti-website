"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lusitana } from "@/lib/fonts";
import {
  Sheet,
  SheetContent,
  SheetClose,
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import ScrollButton from "@/components/scroll-button";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background">
        <div className="container mx-auto py-2 flex justify-between items-center gap-4 ">
          <ul className="hidden justify-start items-center sm:flex">
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx(
                  "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                  {
                    "text-primary": pathname === "/",
                  }
                )}
                asChild
              >
                <Link href="/" >
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                    Beranda
                  </span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx(
                  "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                  {
                    "text-primary": pathname === "/tentang",
                  }
                )}
                asChild
              >
                <Link href="/tentang">
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                    Tentang Saya
                  </span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx(
                  "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                  {
                    "text-primary": pathname === "/publikasi",
                  }
                )}
                asChild
              >
                <Link href="/publikasi">
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                    Publikasi
                  </span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx(
                  "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                  {
                    "text-primary": pathname === "/media",
                  }
                )}
                asChild
              >
                <Link href="/media">
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                    Media
                  </span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx(
                  "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                  {
                    "text-primary": pathname === "/blog",
                  }
                )}
                asChild
              >
                <Link href="/blog">
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                    Blog
                  </span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                className={clsx(
                  "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                  {
                    "text-primary": pathname === "/kontak",
                  }
                )}
                asChild
              >
                <Link href="/kontak">
                  <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                    Kontak
                  </span>
                </Link>
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
                    <SheetClose asChild>
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
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Button variant="ghost" asChild>
                        <Link
                          href="/tentang"
                          className={clsx("w-full h-full", {
                            "text-primary hover:text-primary active:text-primary":
                              pathname === "/tentang",
                          })}
                        >
                          Tentang Saya
                        </Link>
                      </Button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Button variant="ghost" asChild>
                        <Link
                          href="/publikasi"
                          className={clsx("w-full h-full", {
                            "text-primary hover:text-primary active:text-primary":
                              pathname === "/publikasi",
                          })}
                        >
                          Publikasi
                        </Link>
                      </Button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Button variant="ghost" asChild>
                        <Link
                          href="/media"
                          className={clsx("w-full h-full", {
                            "text-primary hover:text-primary active:text-primary":
                              pathname === "/media",
                          })}
                        >
                          Media
                        </Link>
                      </Button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Button variant="ghost" asChild>
                        <Link
                          href="/blog"
                          className={clsx("w-full h-full", {
                            "text-primary hover:text-primary active:text-primary":
                              pathname === "/blog",
                          })}
                        >
                          Blog
                        </Link>
                      </Button>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Button variant="ghost" asChild>
                        <Link
                          href="/kontak"
                          className={clsx("w-full h-full", {
                            "text-primary hover:text-primary active:text-primary":
                              pathname === "/kontak",
                          })}
                        >
                          Kontak
                        </Link>
                      </Button>
                    </SheetClose>
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
      <ScrollButton/>
      <footer className="container mx-auto py-4 mt-12 w-full">
        <Separator />
        <ul className="flex justify-center gap-2 items-center flex-wrap pt-2">
          <li>
            <Button
              variant="link"
              size="sm"
              className={clsx(
                "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                {
                  "text-primary": pathname === "/",
                }
              )}
              asChild
            >
              <Link href="/">
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                  Beranda
                </span>
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              size="sm"
              className={clsx(
                "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                {
                  "text-primary": pathname === "/tentang",
                }
              )}
              asChild
            >
              <Link href="/tentang">
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                  Tentang Saya
                </span>
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              size="sm"
              className={clsx(
                "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                {
                  "text-primary": pathname === "/publikasi",
                }
              )}
              asChild
            >
              <Link href="/publikasi">
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                  Publikasi
                </span>
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              size="sm"
              className={clsx(
                "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                {
                  "text-primary": pathname === "/media",
                }
              )}
              asChild
            >
              <Link href="/media">
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                  Media
                </span>
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              size="sm"
              className={clsx(
                "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                {
                  "text-primary": pathname === "/blog",
                }
              )}
              asChild
            >
              <Link href="/blog">
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                  Blog
                </span>
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              size="sm"
              className={clsx(
                "text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu",
                {
                  "text-primary": pathname === "/kontak",
                }
              )}
              asChild
            >
              <Link href="/kontak">
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                  Kontak
                </span>
              </Link>
            </Button>
          </li>
        </ul>
        <div className="flex justify-center items-center pt-6 ">
          <Button variant="link" size="sm" className="text-accent-foreground hover:text-primary hover:no-underline group transition-all transform-gpu" asChild>
            <Link href="https://github.com/amalrivel/novelti-website" target="_blank">
              <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group transition-all transform-gpu duration-500">
                Designed and built by amalrivel
              </span>
            </Link>
          </Button>
        </div>
      </footer>
    </>
  );
}
