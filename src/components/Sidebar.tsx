"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot, LayoutDashboard, Server, Settings, Shield, Users,
  BarChart3, Bell, Terminal, LogOut, ChevronLeft, ChevronRight, Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarProps {
  role: "OWNER" | "USER";
  user: { username: string; avatar: string };
}

const userLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/servers", label: "My Servers", icon: Server },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const ownerLinks = [
  { href: "/dashboard/owner", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/owner/users", label: "All Users", icon: Users },
  { href: "/dashboard/owner/servers", label: "All Servers", icon: Server },
  { href: "/dashboard/owner/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/owner/logs", label: "Error Logs", icon: Terminal },
  { href: "/dashboard/owner/features", label: "Features", icon: Shield },
  { href: "/dashboard/owner/announcements", label: "Announcements", icon: Bell },
  { href: "/dashboard/owner/bot-status", label: "Bot Status", icon: Activity },
];

export default function Sidebar({ role, user }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const links = role === "OWNER" ? ownerLinks : userLinks;

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  };

  return (
    <aside className={cn(
      "h-screen sticky top-0 bg-surface-card border-r border-surface-border flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="h-16 flex items-center gap-2 px-4 border-b border-surface-border">
        <Bot className="w-8 h-8 text-brand-400 shrink-0" />
        {!collapsed && <span className="text-lg font-bold bg-gradient-brand bg-clip-text text-transparent">Xtron</span>}
      </div>

      {/* Toggle */}
      <button onClick={() => setCollapsed(!collapsed)} className="absolute -right-3 top-20 w-6 h-6 bg-surface-card border border-surface-border rounded-full flex items-center justify-center text-gray-400 hover:text-white z-10">
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {role === "OWNER" && (
          <div className={cn("px-3 py-2 text-xs font-semibold text-brand-400 uppercase tracking-wider", collapsed && "text-center")}>
            {collapsed ? "★" : "Owner Panel"}
          </div>
        )}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "sidebar-link",
              pathname === link.href && "sidebar-link-active"
            )}
            title={collapsed ? link.label : undefined}
          >
            <link.icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-surface-border">
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt="" className="w-8 h-8 rounded-full shrink-0" />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.username}</p>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          )}
          {!collapsed && (
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-400 transition-colors" title="Logout">
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
