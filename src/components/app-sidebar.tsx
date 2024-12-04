"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Edit,
  BookOpen,
  MessageSquare,
  BarChart,
  Settings,
} from "lucide-react";
import { createElement } from "react";

interface SidebarChildren {
  title: string;
  url: string;
}

interface SidebarItem {
  title: string;
  url: string;
  icon: string;
  children?: SidebarChildren[];
}

interface AppSidebarProps {
  items: SidebarItem[];
}

const iconMap: { [key: string]: React.ComponentType } = {
  Home,
  FileText,
  Edit,
  BookOpen,
  MessageSquare,
  BarChart,
  Settings,
};

export function AppSidebar({ items }: AppSidebarProps) {
  const pathname = usePathname();

  const isActiveRoute = (itemUrl: string) => {
    return (
      pathname === itemUrl ||
      (!(itemUrl === "/dashboard") && pathname.startsWith(itemUrl))
    );
  };

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-4">
        <span className="font-bold text-xl text-primary whitespace-nowrap">
          NOVELTI MUIS
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link href={item.url}>
                      {createElement(iconMap[item.icon])}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.children && (
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActiveRoute(child.url)}
                          >
                            <Link href={child.url}>
                              <span>{child.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
