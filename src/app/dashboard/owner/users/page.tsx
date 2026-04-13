"use client";

import { Users, Search } from "lucide-react";
import { useState } from "react";

const mockUsers = [
  { id: "1060444223666671667", username: "Owner", email: "gamingnaum420@gmail.com", guilds: 5, role: "OWNER" },
  { id: "2", username: "JohnDoe", email: "john@example.com", guilds: 3, role: "USER" },
  { id: "3", username: "JaneSmith", email: "jane@example.com", guilds: 7, role: "USER" },
  { id: "4", username: "BotUser99", email: "bot99@example.com", guilds: 1, role: "USER" },
];

export default function OwnerUsersPage() {
  const [search, setSearch] = useState("");
  const filtered = mockUsers.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2"><Users className="w-6 h-6 text-brand-400" /> All Users</h1>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users..." className="input-field pl-10 w-64" />
        </div>
      </div>
      <div className="card overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-gray-500">
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Guilds</th>
              <th className="px-6 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-surface-border/50 hover:bg-surface-hover/50 transition-colors">
                <td className="px-6 py-3 font-medium">{u.username}</td>
                <td className="px-6 py-3 text-gray-400">{u.email}</td>
                <td className="px-6 py-3">{u.guilds}</td>
                <td className="px-6 py-3">
                  <span className={u.role === "OWNER" ? "text-brand-400 font-medium" : "text-gray-400"}>{u.role}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
