"use client";

import { useState } from "react";
import { Bell, Send } from "lucide-react";
import { toast } from "sonner";

export default function AnnouncementsPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!title || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Announcement sent to all users!");
    setTitle("");
    setMessage("");
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <h1 className="text-2xl font-bold flex items-center gap-2"><Bell className="w-6 h-6 text-brand-400" /> Announcements</h1>

      <div className="card space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Announcement title..." className="input-field w-full" />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your announcement..."
            rows={5}
            className="input-field w-full resize-none"
          />
        </div>
        <button onClick={handleSend} className="btn-primary flex items-center gap-2">
          <Send className="w-4 h-4" /> Send Announcement
        </button>
      </div>
    </div>
  );
}
