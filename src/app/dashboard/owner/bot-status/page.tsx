"use client";

import { Activity, Server, Cpu, HardDrive, Wifi, Clock } from "lucide-react";
import BotStatusBadge from "@/components/BotStatusBadge";
import MiniChart from "@/components/MiniChart";

const cpuData = [
  { name: "1m", value: 0.5 }, { name: "2m", value: 0.3 },
  { name: "3m", value: 0.8 }, { name: "4m", value: 0.2 },
  { name: "5m", value: 0.1 }, { name: "6m", value: 0.4 },
];

const memData = [
  { name: "1m", value: 185 }, { name: "2m", value: 187 },
  { name: "3m", value: 186 }, { name: "4m", value: 188 },
  { name: "5m", value: 187 }, { name: "6m", value: 188 },
];

export default function BotStatusPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2"><Activity className="w-6 h-6 text-brand-400" /> Bot Status</h1>

      <div className="card flex items-center gap-4">
        <BotStatusBadge status="online" />
        <span className="text-gray-400">|</span>
        <span className="text-sm text-gray-400">Hosted on <span className="text-brand-300 font-medium">Vortexa Cloud</span></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Address</span>
            <Server className="w-4 h-4 text-brand-400" />
          </div>
          <p className="text-lg font-bold font-mono">45.131.65.107:25829</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Uptime</span>
            <Clock className="w-4 h-4 text-brand-400" />
          </div>
          <p className="text-lg font-bold">13h 37m 31s</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">CPU Load</span>
            <Cpu className="w-4 h-4 text-brand-400" />
          </div>
          <p className="text-lg font-bold">0.01% <span className="text-sm text-gray-500">/ 50%</span></p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Memory</span>
            <HardDrive className="w-4 h-4 text-brand-400" />
          </div>
          <p className="text-lg font-bold">187.72 MiB <span className="text-sm text-gray-500">/ 512 MiB</span></p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Disk</span>
            <HardDrive className="w-4 h-4 text-brand-400" />
          </div>
          <p className="text-lg font-bold">345.64 MiB <span className="text-sm text-gray-500">/ 4 GiB</span></p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Network</span>
            <Wifi className="w-4 h-4 text-brand-400" />
          </div>
          <p className="text-sm font-bold">↓ 64.53 MiB <span className="text-gray-500">↑ 8.68 MiB</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-4">CPU Load</h3>
          <MiniChart data={cpuData} color="#22c55e" height={200} />
        </div>
        <div className="card">
          <h3 className="font-semibold mb-4">Memory Usage (MiB)</h3>
          <MiniChart data={memData} color="#a855f7" height={200} />
        </div>
      </div>
    </div>
  );
}
