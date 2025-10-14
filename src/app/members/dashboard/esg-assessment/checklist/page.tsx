"use client";

import { useState } from "react";

type Item = { id: string; label: string };
type Section = { key: "E" | "S" | "G"; title: string; items: Item[] };

const sections: Section[] = [
  {
    key: "E",
    title: "Environmental",
    items: [
      { id: "e1", label: "Track Scope 1, 2, 3 emissions annually" },
      { id: "e2", label: "Set science-based emissions reduction targets" },
      { id: "e3", label: "Measure energy use and reduction %" },
      { id: "e4", label: "Measure water use and reduction %" },
      { id: "e5", label: "Manage hazardous/toxic waste" },
      { id: "e6", label: "Sustainably sourced products % reported" },
      { id: "e7", label: "Link pay to climate performance" },
    ],
  },
  {
    key: "S",
    title: "Social",
    items: [
      { id: "s1", label: "Representation at all org levels tracked" },
      { id: "s2", label: "Gender pay gap assessed and actioned" },
      { id: "s3", label: "Upskilling investment per employee reported" },
      { id: "s4", label: "Employee satisfaction measured regularly" },
      { id: "s5", label: "Employee wellness initiatives catalogued" },
    ],
  },
  {
    key: "G",
    title: "Governance",
    items: [
      { id: "g1", label: "Female directors count disclosed" },
      { id: "g2", label: "Minority directors count disclosed" },
      { id: "g3", label: "Board oversight of climate issues" },
      { id: "g4", label: "Executive compensation aligned to sustainability" },
    ],
  },
];

import AssessmentTabs from "../Tabs";

export default function ESGChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }));
  const setSection = (section: Section, value: boolean) => {
    const updates: Record<string, boolean> = {};
    section.items.forEach((i) => (updates[i.id] = value));
    setChecked((c) => ({ ...c, ...updates }));
  };

  const total = sections.reduce((sum, s) => sum + s.items.length, 0);
  const completed = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completed / total) * 100);

  return (
    <section className="space-y-6">
      <AssessmentTabs />
      <div
        className="rounded-xl border bg-white shadow-sm p-5 flex items-center justify-between"
        style={{ borderColor: "var(--fifth)" }}
      >
        <div>
          <div
            className="text-xs uppercase tracking-wide"
            style={{ color: "var(--fourth)" }}
          >
            Checklist
          </div>
          <div
            className="text-sm font-medium"
            style={{ color: "var(--secondary)" }}
          >
            ESG Assessment & Framework
          </div>
        </div>
        <div className="min-w-[260px]">
          <div className="text-xs mb-1" style={{ color: "var(--fourth)" }}>
            {completed}/{total} Complete ({progress}%)
          </div>
          <div
            className="h-2.5 w-full rounded-full"
            style={{ backgroundColor: "rgba(147,147,158,0.25)" }}
          >
            <div
              className="h-2.5 rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: "var(--primary)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {sections.map((section) => {
          const done = section.items.filter((i) => checked[i.id]).length;
          return (
            <div
              key={section.key}
              className="rounded-xl border bg-white shadow-sm"
              style={{ borderColor: "var(--fifth)" }}
            >
              <div
                className="px-5 py-4 border-b flex items-center justify-between"
                style={{ borderColor: "var(--fifth)" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(147,147,158,0.25)",
                      color: "var(--secondary)",
                    }}
                  >
                    {section.key}
                  </span>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--secondary)" }}
                  >
                    {section.title}
                  </div>
                </div>
                <div className="text-xs" style={{ color: "var(--fourth)" }}>
                  {done}/{section.items.length}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between mb-1">
                  <button
                    className="text-xs rounded-lg border px-2 py-1 hover:bg-[color:var(--primary)]/6"
                    style={{
                      borderColor: "var(--fifth)",
                      color: "var(--fourth)",
                    }}
                    onClick={() => setSection(section, true)}
                  >
                    Select all
                  </button>
                  <button
                    className="text-xs rounded-lg border px-2 py-1 hover:bg-[color:var(--primary)]/6"
                    style={{
                      borderColor: "var(--fifth)",
                      color: "var(--fourth)",
                    }}
                    onClick={() => setSection(section, false)}
                  >
                    Clear
                  </button>
                </div>
                {section.items.map((item) => (
                  <label
                    key={item.id}
                    className="group flex items-start gap-3 text-sm cursor-pointer rounded-lg border p-3 transition-colors hover:bg-[color:var(--primary)]/6"
                    style={{
                      color: "var(--secondary)",
                      borderColor: "var(--fifth)",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 accent-[color:var(--primary)]"
                      checked={!!checked[item.id]}
                      onChange={() => toggle(item.id)}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-end gap-3">
        <button
          className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/10"
          style={{ borderColor: "var(--primary)", color: "var(--secondary)" }}
        >
          Export CSV
        </button>
        <button
          className="h-10 px-4 rounded-lg text-sm shadow-sm hover:opacity-90"
          style={{ backgroundColor: "var(--primary)", color: "#161326" }}
        >
          Mark Complete
        </button>
      </div>
    </section>
  );
}
