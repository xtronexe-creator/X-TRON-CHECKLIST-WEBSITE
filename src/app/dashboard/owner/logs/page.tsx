import ErrorLogsTable from "@/components/ErrorLogsTable";
import { Terminal } from "lucide-react";

export default function LogsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2"><Terminal className="w-6 h-6 text-brand-400" /> Error Logs</h1>
      <ErrorLogsTable />
    </div>
  );
}
