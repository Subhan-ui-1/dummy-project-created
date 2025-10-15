import { ReactNode } from "react";
import SidebarNav from "../../dashboard/SidebarNav";

const navItems = [
  { href: "/members/dashboard/overview", label: "Dashboard" },
  // { href: "/members/dashboard/user-management", label: "User Management" },
  // { href: "/members/dashboard/content-management", label: "Content Managemnt" },
  { href: "/members/dashboard/analytics", label: "AI Analytics" },
  {
    href: "/members/dashboard/esg-assessment",
    label: "ESG Assessment & Framework",
  },
  // { href: "/members/dashboard/system-settings", label: "System Settings" },
  // {
  //   href: "/members/dashboard/recognition-review",
  //   label: "Recognition Review",
  // },
  // { href: "/members/dashboard/reports", label: "Reports" },
  // { href: "/members/dashboard/audit-logs", label: "Autdit Logs" },
  // { href: "/members/dashboard/esg-assessment/results", label: "ESG Results" },
  {
    href: "/members/dashboard/certificate-badge",
    label: "Digital Certificate & ESG Badge",
  },
  // { href: "/members/dashboard/course-content", label: "Course Content" },
  {
    href: "/members/dashboard/green-finance",
    label: "Green Finance Connector",
  },
  // { href: "/members/dashboard/advisor-network", label: "Advisor Network" },
  { href: "/members/dashboard/benchmarking", label: "Benchmarking Report" },
  { href: "/members/dashboard/knowledge-hub", label: "Knowledge Hub" },
  {
    href: "/members/dashboard/recognition-certification",
    label: "Recognition & Certification",
  },
  {
    href: "/members/dashboard/monitoring-analytics",
    label: "Monitoring & Analytics",
  },
  {
    href: "/members/dashboard/awareness/reporting-formats",
    label: "Awareness",
  },
  // {
  //   href: "/members/dashboard/awareness/toolkits",
  //   label: "Awareness: Toolkits",
  // },
  // {
  //   href: "/members/dashboard/awareness/templates",
  //   label: "Awareness: Templates",
  // },
  // {
  //   href: "/members/dashboard/awareness/workshops",
  //   label: "Awareness: Workshops",
  // },
  {
    href: "/members/dashboard/reporting/esg-adoption",
    label: "Reports",
  },
  {
    href: "https://staging-branch-khazraai-frontend-production.up.railway.app/dashboard",
    // href: "/members/dashboard/double-materiality",
    label: "Double Materiality",
  },
  // {
  //   href: "/members/dashboard/reporting/cop-benchmarking",
  //   label: "Reporting: COP Benchmarking",
  // },
];

export default function MembersDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <aside className="bg-secondary text-white">
        <div className="h-16 flex items-center px-6 border-b border-[color:var(--fifth)]/30">
          {/* <span
            className="text-lg font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Members
          </span> */}
        </div>
        <SidebarNav items={navItems} />
      </aside>
      <main className="bg-white">
        <header className="h-16 border-b border-[color:var(--fifth)]/30 flex items-center justify-between px-6">
          <h1
            className="text-base font-medium"
            style={{ color: "var(--fourth)" }}
          >
            Members Dashboard
          </h1>
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
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
