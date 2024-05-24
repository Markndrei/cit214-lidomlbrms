"use client";
import { cn } from "@/lib/utils";
import {
  SearchCheck,
  SlidersHorizontal,
  SquareLibrary,
  UsersRound,
  Shield,
  DicesIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const navItems = [
  { name: "Search", href: "/dashboard", icon: SearchCheck, requiresAuth: true },
  {
    name: "Affiliated Library",
    href: "/dashboard/affiliated",
    icon: SquareLibrary,
    requiresAuth: true,
  },
  {
    name: "About",
    href: "/dashboard/about",
    icon: UsersRound,
    requiresAuth: true,
  },
  {
    name: "Generate Recommendation",
    href: "/dashboard/recommendations",
    icon: DicesIcon,
    requiresAuth: true,
  },
  {
    name: "Admin Functions",
    href: "https://lidom-lidom-lidom-lidom.vercel.app",
    icon: Shield,
    requiresAuth: true,
  },
];

const DashboardNav = () => {
  const pathname = usePathname();
  // const { user, isAuthenticated, isLoading, getPermissions } =
  //   useKindeBrowserClient();
  // const { permissions } = getPermissions();

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index, requiresAuth) => (
        <Link key={index} href={item.href}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent" : "bg-transparent"
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
// function useKindeBrowserClient(): {
//   user: any;
//   isAuthenticated: any;
//   isLoading: any;
//   getPermissions: any;
// } {
//   throw new Error("Function not implemented.");
// }
