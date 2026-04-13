"use client";

import { useState } from "react";
import Toggle from "@/components/Toggle";
import { useParams } from "next/navigation";
import { Hash, Shield, MessageSquare, Terminal, Save } from "lucide-react";
import { toast } from "sonner";

export default function ServerConfigPage() {
  const { id } = useParams();
  const [autoMod, setAutoMod] = useState(true);
  const [welcomeMsg, setWelcomeMsg] = useState(true);
  const [logChannel, setLogChannel] = useState("");
  const [prefix, setPrefix] = useState("!");

  const handleSave = () => {
    toast.success("Configuration saved successfully!");
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">Server Configuration</h1>
        <p className="text-gray-400 text-sm mt-1">Server ID: {id}</p>
      </div>

      {/* General */}
      <div className="card space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5 text-brand-400" />
          <h2 className="text-lg font-semibold">General</h2>
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Command Prefix</label>
          <input value={prefix} onChange={(e) => setPrefix(e.target.value)} className="input-field w-full max-w-xs" />
        </div>
      </div>

      {/* Moderation */}
      <div className="card space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-brand-400" />
          <h2 className="text-lg font-semibold">Moderation</h2>
        </div>
        <Toggle checked={autoMod} onChange={setAutoMod} label="Auto-moderation (spam, links, profanity)" />
      </div>

      {/* Welcome */}
      <div className="card space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="w-5 h-5 text-brand-400" />
          <h2 className="text-lg font-semibold">Welcome Messages</h2>
        </div>
        <Toggle checked={welcomeMsg} onChange={setWelcomeMsg} label="Send welcome message on join" />
      </div>

      {/* Logging */}
      <div className="card space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Hash className="w-5 h-5 text-brand-400" />
          <h2 className="text-lg font-semibold">Log Channel</h2>
        </div>
        <input value={logChannel} onChange={(e) => setLogChannel(e.target.value)} placeholder="Enter channel ID" className="input-field w-full max-w-xs" />
      </div>

      <button onClick={handleSave} className="btn-primary flex items-center gap-2">
        <Save className="w-4 h-4" /> Save Configuration
      </button>
    </div>
  );
}
