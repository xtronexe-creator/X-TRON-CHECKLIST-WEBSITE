"use client";

import { useState } from "react";
import Toggle from "@/components/Toggle";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [dmAlerts, setDmAlerts] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in max-w-2xl">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="card space-y-6">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <Toggle checked={notifications} onChange={setNotifications} label="Dashboard notifications" />
        <Toggle checked={dmAlerts} onChange={setDmAlerts} label="DM alerts for bot errors" />
      </div>

      <div className="card space-y-4">
        <h2 className="text-lg font-semibold">Account</h2>
        <p className="text-sm text-gray-400">Your account is linked via Discord OAuth2. Manage your profile on Discord.</p>
        <button
          onClick={async () => {
            await fetch("/api/auth/logout", { method: "POST" });
            window.location.href = "/";
          }}
          className="bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
