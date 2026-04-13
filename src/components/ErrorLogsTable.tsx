"use client";

interface LogEntry {
  id: string;
  timestamp: string;
  level: "error" | "warn" | "info";
  message: string;
  source: string;
}

const levelColors = {
  error: "text-red-400 bg-red-400/10",
  warn: "text-yellow-400 bg-yellow-400/10",
  info: "text-blue-400 bg-blue-400/10",
};

// Mock data for demo
const mockLogs: LogEntry[] = [
  { id: "1", timestamp: "2026-04-13 16:30:00", level: "error", message: "Failed to connect to gateway", source: "discord.js" },
  { id: "2", timestamp: "2026-04-13 16:25:00", level: "warn", message: "Rate limit hit on /api/channels", source: "REST" },
  { id: "3", timestamp: "2026-04-13 16:20:00", level: "info", message: "Bot reconnected successfully", source: "ws" },
  { id: "4", timestamp: "2026-04-13 16:15:00", level: "error", message: "Command handler threw unhandled exception", source: "commands" },
  { id: "5", timestamp: "2026-04-13 16:10:00", level: "info", message: "License data auto-saved (699 entries)", source: "db" },
];

export default function ErrorLogsTable() {
  return (
    <div className="card overflow-hidden p-0">
      <div className="px-6 py-4 border-b border-surface-border">
        <h3 className="font-semibold">Recent Logs</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-gray-500">
              <th className="px-6 py-3">Time</th>
              <th className="px-6 py-3">Level</th>
              <th className="px-6 py-3">Source</th>
              <th className="px-6 py-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {mockLogs.map((log) => (
              <tr key={log.id} className="border-b border-surface-border/50 hover:bg-surface-hover/50 transition-colors">
                <td className="px-6 py-3 text-gray-400 whitespace-nowrap">{log.timestamp}</td>
                <td className="px-6 py-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${levelColors[log.level]}`}>
                    {log.level.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-400">{log.source}</td>
                <td className="px-6 py-3">{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
