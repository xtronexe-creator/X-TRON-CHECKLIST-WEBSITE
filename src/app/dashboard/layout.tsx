import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/");

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar role={session.role} user={{ username: session.username, avatar: session.avatar }} />
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
