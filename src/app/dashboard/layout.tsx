"use client";

import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "Home",
  },
  {
    title: "Halaman",
    url: "/dashboard/pages",
    icon: "FileText",
    children: [
      { title: "Beranda", url: "/dashboard/pages/home" },
      { title: "Tentang", url: "/dashboard/pages/about" },
    ],
  },
  {
    title: "Postingan",
    url: "/dashboard/blog",
    icon: "Edit",
    children: [
      { title: "Semua Postingan", url: "/dashboard/blog/posts" },
      { title: "Kategori", url: "/dashboard/blog/categories" },
      { title: "Komentar", url: "/dashboard/blog/comments" },
    ],
  },
  {
    title: "Publikasi",
    url: "/dashboard/publications",
    icon: "BookOpen",
    children: [
      { title: "Semua Publikasi", url: "/dashboard/publications/all" },
      { title: "Kategori", url: "/dashboard/publications/categories" },
      { title: "Komentar", url: "/dashboard/publications/comments" },
    ],
  },
  {
    title: "Pesan",
    url: "/dashboard/messages",
    icon: "MessageSquare",
  },
  {
    title: "Analitik",
    url: "/dashboard/analytics",
    icon: "BarChart",
  },
  {
    title: "Setingan",
    url: "/dashboard/settings",
    icon: "Settings",
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const findTitleByUrl = (url: string, items: typeof sidebarItems): string => {
    const direct = items.find((item) => item.url === url);
    if (direct) return direct.title;

    for (const item of items) {
      if (item.children) {
        const child = item.children.find((child) => child.url === url);
        if (child) return child.title;
      }
    }

    return url.split("/").pop() || "";
  };

  return (
    <SidebarProvider>
      <AppSidebar items={sidebarItems} />
      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {pathname
                .split("/")
                .reduce<React.ReactNode[]>((acc, path, index, paths) => {
                  if (path) {
                    const url = `/${paths.slice(1, index + 1).join("/")}`;
                    const title = findTitleByUrl(url, sidebarItems);
                    const isLast = index === paths.length - 1;

                    if (isLast) {
                      acc.push(
                        <BreadcrumbItem key={url}>
                          <BreadcrumbPage>{title}</BreadcrumbPage>
                        </BreadcrumbItem>
                      );
                    } else {
                      acc.push(
                        <BreadcrumbItem key={url} className="hidden md:block">
                          <BreadcrumbLink asChild>
                            <Link href={url}>{title}</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                      );
                      acc.push(
                        <BreadcrumbSeparator
                          key={`${url}-separator`}
                          className="hidden md:block"
                        />
                      );
                    }
                  }
                  return acc;
                }, [])}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex-1 flex flex-col gap-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
