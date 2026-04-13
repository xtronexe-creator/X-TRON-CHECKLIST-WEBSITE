"use client";

import { useState } from "react";
import Toggle from "@/components/Toggle";
import { Shield, Save } from "lucide-react";
import { toast } from "sonner";

interface Feature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

const initialFeatures: Feature[] = [
  { id: "automod", name: "Auto Moderation", description: "Automatically moderate messages for spam and profanity", enabled: true },
  { id: "welcome", name: "Welcome Messages", description: "Send automated welcome messages to new members", enabled: true },
  { id: "music", name: "Music Player", description: "Play music in voice channels", enabled: false },
  { id: "leveling", name: "Leveling System", description: "XP and level tracking for server members", enabled: true },
  { id: "tickets", name: "Ticket System", description: "Support ticket management", enabled: false },
  { id: "audit", name: "Audit Logs", description: "Track all server changes and actions", enabled: true },
];

export default function FeaturesPage() {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);

  const toggleFeature = (id: string) => {
    setFeatures((prev) => prev.map((f) => (f.id === id ? { ...f, enabled: !f.enabled } : f)));
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-2xl font-bold flex items-center gap-2"><Shield className="w-6 h-6 text-brand-400" /> Feature Toggles</h1>
      <div className="space-y-4">
        {features.map((f) => (
          <div key={f.id} className="card flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{f.name}</h3>
              <p className="text-sm text-gray-400">{f.description}</p>
            </div>
            <Toggle checked={f.enabled} onChange={() => toggleFeature(f.id)} />
          </div>
        ))}
      </div>
      <button onClick={() => toast.success("Features saved!")} className="btn-primary flex items-center gap-2">
        <Save className="w-4 h-4" /> Save Changes
      </button>
    </div>
  );
}
