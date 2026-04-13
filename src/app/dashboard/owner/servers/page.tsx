"use client";

import { Server, Search } from "lucide-react";
import { useState } from "react";

const mockServers = [
  { id: "1", name: "Xtron Community", members: 5432, botActive: true },
  { id: "2", name: "Gaming Hub", members: 1234, botActive: true },
  { id: "3", name: "Dev Server", members: 89, botActive: false },
  { id: "4", name: "Music Lovers", members: 2100, botActive: true },
];

export default function OwnerServersPage() {
  const [search, setSearch] = useState("");
  const filtered = mockServers.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2"><Server className="w-6 h-6 text-brand-400" /> All Servers</h1>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search servers..." className="input-field pl-10 w-64" />
        </div>
      </div>
      <div className="card overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-gray-500">
              <th className="px-6 py-3">Server</th>
              <th className="px-6 py-3">Members</th>
              <th className="px-6 py-3">Bot Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-surface-border/50 hover:bg-surface-hover/50 transition-colors">
                <td className="px-6 py-3 font-medium">{s.name}</td>
                <td className="px-6 py-3">{s.members.toLocaleString()}</td>
                <td className="px-6 py-3">
                  <span className={`flex items-center gap-1.5 text-sm ${s.botActive ? "text-green-400" : "text-gray-500"}`}>
                    <span className={`w-2 h-2 rounded-full ${s.botActive ? "bg-green-400" : "bg-gray-500"}`} />
                    {s.botActive ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
