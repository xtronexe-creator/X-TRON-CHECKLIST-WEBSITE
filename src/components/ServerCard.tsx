"use client";

import { Shield, Settings } from "lucide-react";
import Link from "next/link";

interface ServerCardProps {
  id: string;
  name: string;
  icon: string | null;
  memberCount?: number;
  isAdmin: boolean;
}

export default function ServerCard({ id, name, icon, memberCount, isAdmin }: ServerCardProps) {
  const iconUrl = icon
    ? `https://cdn.discordapp.com/icons/${id}/${icon}.png?size=128`
    : null;

  return (
    <div className="card flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center overflow-hidden shrink-0">
        {iconUrl ? (
          <img src={iconUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-lg font-bold text-brand-400">{name.charAt(0)}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold truncate">{name}</h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {isAdmin && (
            <span className="flex items-center gap-1 text-brand-400">
              <Shield className="w-3 h-3" /> Admin
            </span>
          )}
          {memberCount && <span>{memberCount} members</span>}
        </div>
      </div>
      {isAdmin && (
        <Link href={`/dashboard/server/${id}`} className="btn-secondary text-sm px-4 py-2 flex items-center gap-1">
          <Settings className="w-4 h-4" /> Configure
        </Link>
      )}
    </div>
  );
}
