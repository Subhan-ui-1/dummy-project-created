"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/members/dashboard/esg-assessment/checklist", label: "ESG Framework Checklist" },
  { href: "/members/dashboard/esg-assessment", label: "ESG Assessment" },
  { href: "/members/dashboard/esg-assessment/results", label: "Results" },
];

export default function AssessmentTabs() {
  const pathname = usePathname();
  return (
    <div className="rounded-xl border bg-white shadow-sm p-2" style={{ borderColor: 'var(--fifth)' }}>
      <nav className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${active ? 'bg-[color:var(--primary)] text-[color:var(--secondary)] border-transparent' : 'bg-white text-[color:var(--secondary)] hover:bg-[color:var(--primary)]/10'}`}
              style={{ borderColor: 'var(--fifth)' }}
            >
              {t.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}


