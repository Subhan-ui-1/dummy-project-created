import { ReactNode } from "react";
import SidebarNav from "./SidebarNav";

const navItems = [
  { href: "/dashboard/overview", label: "Overview" },
  { href: "/dashboard/user-management", label: "User Management" },
  { href: "/dashboard/content-management", label: "Content Managemnt" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/system-settings", label: "System Settings" },
  { href: "/dashboard/recognition-review", label: "Recognition Review" },
  { href: "/dashboard/reports", label: "Reports" },
  { href: "/dashboard/audit-logs", label: "Autdit Logs" },
  { href: "/dashboard/admin/esg-framework", label: "ESG Framework" },
  { href: "/dashboard/admin/content", label: "Content Management (Admin)" },
  { href: "/dashboard/admin/green-finance-checklist", label: "Green Finance Checklist" },
  { href: "/dashboard/admin/esg-data-validation", label: "ESG Data Validation" },
  { href: "/dashboard/admin/benchmarking-report", label: "Benchmarking Report" },
  { href: "/dashboard/admin/advisors", label: "Advisor Management" },
  { href: "/dashboard/admin/awareness/reporting-formats", label: "Awareness: Reporting Formats" },
  { href: "/dashboard/admin/awareness/toolkits", label: "Awareness: Toolkits" },
  { href: "/dashboard/admin/awareness/templates", label: "Awareness: Templates" },
  { href: "/dashboard/admin/awareness/workshops", label: "Awareness: Workshops" },
  { href: "/dashboard/monitoring-analytics", label: "Monitoring & Analytics" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <aside className="bg-secondary text-white">
        <div className="h-16 flex items-center px-6 border-b border-[color:var(--fifth)]/30">
          <span className="text-lg font-semibold" style={{ color: "var(--primary)" }}>
            Dashboard
          </span>
        </div>
        <SidebarNav items={navItems} />
      </aside>
      <main className="bg-white">
        <header className="h-16 border-b border-[color:var(--fifth)]/30 flex items-center justify-between px-6">
          <h1 className="text-base font-medium" style={{ color: "var(--fourth)" }}>
            Chamber Demo
          </h1>
          <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <select
              className="h-8 px-3 rounded-md text-sm"
              defaultValue="en"
              style={{
                border: "1px solid",
                borderColor: "var(--fifth)",
                backgroundColor: "#FFFFFF",
                color: "var(--secondary)",
              }}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          </div>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}


