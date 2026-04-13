import Link from "next/link";
import { Bot, Shield, Zap, BarChart3, Users, Settings } from "lucide-react";

const DISCORD_LOGIN_URL =
  "https://discord.com/oauth2/authorize?client_id=1453060847789277287&response_type=code&redirect_uri=https%3A%2F%2Fxtron-checklist.netlify.app%2Fapi%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds+guilds.members.read+guilds.channels.read+messages.read+guilds.join+connections+email";

const features = [
  { icon: Shield, title: "Advanced Moderation", desc: "Auto-mod, warnings, bans, and audit logs" },
  { icon: Zap, title: "Custom Commands", desc: "Create powerful custom commands with ease" },
  { icon: BarChart3, title: "Analytics", desc: "Track server activity and engagement" },
  { icon: Users, title: "Role Management", desc: "Automated role assignment and management" },
  { icon: Settings, title: "Easy Config", desc: "Intuitive dashboard for all settings" },
  { icon: Bot, title: "24/7 Uptime", desc: "Hosted on Vortexa Cloud for reliability" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-brand-400" />
            <span className="text-xl font-bold bg-gradient-brand bg-clip-text text-transparent">Xtron Bot</span>
          </div>
          <a href={DISCORD_LOGIN_URL} className="btn-primary text-sm">Login with Discord</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-700/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-soft" />
            <span className="text-sm text-brand-300">Bot Online — Powered by Vortexa Cloud</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-brand bg-clip-text text-transparent">Manage Your Bot</span>
            <br />
            <span className="text-gray-100">Like a Pro</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            The most powerful Discord bot dashboard. Configure, monitor, and control your bot with an intuitive interface.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href={DISCORD_LOGIN_URL} className="btn-primary text-lg px-8 py-3">Get Started</a>
            <a href="#features" className="btn-secondary text-lg px-8 py-3">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <f.icon className="w-10 h-10 text-brand-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <span>© 2026 Xtron Bot. All rights reserved.</span>
          <span>Hosted on Vortexa Cloud</span>
        </div>
      </footer>
    </div>
  );
}
