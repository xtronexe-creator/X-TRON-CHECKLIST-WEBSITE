import { getSession, hasAdminPermission } from "@/lib/auth";
import { redirect } from "next/navigation";
import ServerCard from "@/components/ServerCard";

export default async function ServersPage() {
  const session = await getSession();
  if (!session) redirect("/");

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">My Servers</h1>
      <div className="grid gap-4">
        {session.guilds.map((g) => (
          <ServerCard
            key={g.id}
            id={g.id}
            name={g.name}
            icon={g.icon}
            isAdmin={hasAdminPermission(g.permissions)}
          />
        ))}
      </div>
    </div>
  );
}
