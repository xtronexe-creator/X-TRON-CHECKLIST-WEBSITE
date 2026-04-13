"use client";

import MiniChart from "@/components/MiniChart";
import { BarChart3 } from "lucide-react";

const weeklyData = [
  { name: "Mon", value: 420 }, { name: "Tue", value: 580 },
  { name: "Wed", value: 350 }, { name: "Thu", value: 740 },
  { name: "Fri", value: 600 }, { name: "Sat", value: 810 },
  { name: "Sun", value: 680 },
];

const topCommands = [
  { name: "!play", count: 3420 },
  { name: "!help", count: 2100 },
  { name: "!ban", count: 890 },
  { name: "!mute", count: 654 },
  { name: "!stats", count: 432 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2"><BarChart3 className="w-6 h-6 text-brand-400" /> Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-4">Commands Per Day</h3>
          <MiniChart data={weeklyData} height={250} />
        </div>
        <div className="card">
          <h3 className="font-semibold mb-4">Top Commands</h3>
          <div className="space-y-3">
            {topCommands.map((cmd) => (
              <div key={cmd.name} className="flex items-center justify-between">
                <span className="font-mono text-brand-300">{cmd.name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-surface-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-brand rounded-full" style={{ width: `${(cmd.count / topCommands[0].count) * 100}%` }} />
                  </div>
                  <span className="text-sm text-gray-400 w-12 text-right">{cmd.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
