import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Users, Server, BarChart3, Activity, Bot } from "lucide-react";
import StatCard from "@/components/StatCard";
import BotStatusBadge from "@/components/BotStatusBadge";
import MiniChart from "@/components/MiniChart";
import ErrorLogsTable from "@/components/ErrorLogsTable";

const chartData = [
  { name: "Mon", value: 120 }, { name: "Tue", value: 180 },
  { name: "Wed", value: 150 }, { name: "Thu", value: 240 },
  { name: "Fri", value: 200 }, { name: "Sat", value: 310 },
  { name: "Sun", value: 280 },
];

export default async function OwnerDashboard() {
  const session = await getSession();
  if (!session || session.role !== "OWNER") redirect("/");

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Owner Dashboard</h1>
          <p className="text-gray-400 mt-1">Full system overview</p>
        </div>
        <div className="card !p-3 flex items-center gap-3">
          <Bot className="w-5 h-5 text-brand-400" />
          <BotStatusBadge status="online" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value={1543} icon={Users} change="+8.2%" positive />
        <StatCard title="Connected Servers" value={342} icon={Server} change="+3.1%" positive />
        <StatCard title="Commands Today" value={8723} icon={BarChart3} change="+15%" positive />
        <StatCard title="Uptime" value="99.9%" icon={Activity} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-4">Commands Usage (7 days)</h3>
          <MiniChart data={chartData} height={200} />
        </div>
        <div className="card">
          <h3 className="font-semibold mb-4">Active Users (7 days)</h3>
          <MiniChart data={chartData.map(d => ({ ...d, value: Math.round(d.value * 0.6) }))} color="#a855f7" height={200} />
        </div>
      </div>

      <ErrorLogsTable />
    </div>
  );
}
