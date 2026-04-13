"use client";

import { cn, formatNumber } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  change?: string;
  positive?: boolean;
}

export default function StatCard({ title, value, icon: Icon, change, positive }: StatCardProps) {
  return (
    <div className="stat-card animate-slide-up">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">{title}</span>
        <Icon className="w-5 h-5 text-brand-400" />
      </div>
      <p className="text-2xl font-bold">{typeof value === "number" ? formatNumber(value) : value}</p>
      {change && (
        <span className={cn("text-xs", positive ? "text-green-400" : "text-red-400")}>
          {change}
        </span>
      )}
    </div>
  );
}
