"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface MiniChartProps {
  data: { name: string; value: number }[];
  color?: string;
  height?: number;
}

export default function MiniChart({ data, color = "#8b5cf6", height = 120 }: MiniChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide />
        <Tooltip
          contentStyle={{ background: "#1a1025", border: "1px solid #2d1f45", borderRadius: "8px", color: "#e5e7eb" }}
        />
        <Area type="monotone" dataKey="value" stroke={color} fill={`url(#gradient-${color})`} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
