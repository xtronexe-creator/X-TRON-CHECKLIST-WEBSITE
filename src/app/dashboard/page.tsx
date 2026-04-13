import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Server, Shield, BarChart3, Bell } from "lucide-react";
import StatCard from "@/components/StatCard";
import ServerCard from "@/components/ServerCard";
import { hasAdminPermission } from "@/lib/auth";

export default async function UserDashboard() {
  const session = await getSession();
  if (!session) redirect("/");
  if (session.role === "OWNER") redirect("/dashboard/owner");

  const adminGuilds = session.guilds.filter((g) => hasAdminPermission(g.permissions));

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Welcome, {session.username} 👋</h1>
        <p className="text-gray-400 mt-1">Manage your Discord servers</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Servers" value={session.guilds.length} icon={Server} />
        <StatCard title="Admin Servers" value={adminGuilds.length} icon={Shield} />
        <StatCard title="Commands Used" value={1247} icon={BarChart3} change="+12% this week" positive />
        <StatCard title="Notifications" value={3} icon={Bell} />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Your Admin Servers</h2>
        <div className="grid gap-4">
          {adminGuilds.length > 0 ? (
            adminGuilds.map((g) => (
              <ServerCard key={g.id} id={g.id} name={g.name} icon={g.icon} isAdmin />
            ))
          ) : (
            <div className="card text-center py-12 text-gray-500">
              <p>You don&apos;t have admin permissions on any servers.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
