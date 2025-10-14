'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = { href: string; label: string };

export default function SidebarNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="p-3 space-y-1">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
              isActive
                ? "text-[color:var(--secondary)] bg-[color:var(--primary)]"
                : "text-white hover:bg-[color:var(--primary)]/20"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}


