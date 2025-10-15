'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = { href: string; label: string };

export default function SidebarNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="p-3 space-y-1">
      {items.map((item) => {
        const isExternal = /^https?:\/\//.test(item.href);
        const isActive = !isExternal && pathname === item.href;
        const classes = `block rounded-md px-3 py-2 text-sm transition-colors ${
          isActive
            ? "text-[color:var(--secondary)] bg-[color:var(--primary)]"
            : "text-white hover:bg-[color:var(--primary)]/20"
        }`;
        return isExternal ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {item.label}
          </a>
        ) : (
          <Link key={item.href} href={item.href} className={classes}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}


