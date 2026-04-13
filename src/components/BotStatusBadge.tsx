"use client";

import { cn } from "@/lib/utils";

interface BotStatusBadgeProps {
  status: "online" | "offline" | "error";
}

const statusConfig = {
  online: { label: "Online", color: "bg-green-400", text: "text-green-400" },
  offline: { label: "Offline", color: "bg-gray-500", text: "text-gray-500" },
  error: { label: "Error", color: "bg-red-400", text: "text-red-400" },
};

export default function BotStatusBadge({ status }: BotStatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <div className="flex items-center gap-2">
      <span className={cn("w-2.5 h-2.5 rounded-full", config.color, status === "online" && "animate-pulse-soft")} />
      <span className={cn("text-sm font-medium", config.text)}>{config.label}</span>
    </div>
  );
}
