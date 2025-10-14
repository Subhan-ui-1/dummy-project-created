"use client";

import { useState } from "react";
import AssessmentTabs from "./Tabs";

type AnswerOption = {
  id: string;
  label: string;
};

const environmentalOptions: AnswerOption[] = [
  {
    id: "e1",
    label: "Yes, we track Scope 1, 2, and 3 emissions comprehensively",
  },
  { id: "e2", label: "Yes, we track Scope 1 and 2 emissions only" },
  { id: "e3", label: "We track some emissions but not systematically" },
  { id: "e4", label: "No, we don't currently track emissions" },
  { id: "e5", label: "Not applicable to our business" },
];

export default function ESGAssessmentPage() {
  const [activeTab, setActiveTab] = useState<"E" | "S" | "G">("E");
  const [selected, setSelected] = useState<string>("e2");

  const progress = 45; // placeholder progress

  return (
    <section className="space-y-6">
      {/* Tabs */}
      <AssessmentTabs />

      {/* Progress header */}
      <div
        className="rounded-xl border shadow-sm bg-white"
        style={{ borderColor: "var(--fifth)" }}
      >
        <div
          className="px-5 py-4 border-b flex items-center justify-between"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div>
            <div
              className="text-xs uppercase tracking-wide"
              style={{ color: "var(--fourth)" }}
            >
              Module
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: "var(--secondary)" }}
            >
              ESG Assessment & Framework
            </div>
          </div>
          <div className="text-sm" style={{ color: "var(--fourth)" }}>
            Progress: {progress}% (27/60)
          </div>
        </div>
        <div className="p-5">
          <div
            className="h-2.5 w-full rounded-full mb-4"
            style={{ backgroundColor: "rgba(147,147,158,0.25)" }}
          >
            <div
              className="h-2.5 rounded-full transition-all"
              style={{
                width: `${progress}%`,
                backgroundColor: "var(--primary)",
              }}
            />
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {(["E", "S", "G"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-colors ${
                    activeTab === key
                      ? "bg-[color:var(--primary)] text-[color:var(--secondary)] border-transparent"
                      : "bg-white text-[color:var(--secondary)] hover:bg-[color:var(--primary)]/10"
                  }`}
                  style={{ borderColor: "var(--fifth)" }}
                >
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(147,147,158,0.25)",
                      color: "var(--secondary)",
                    }}
                  >
                    {key}
                  </span>
                  {key === "E" && <span>Environmental (14/20)</span>}
                  {key === "S" && <span>Social (8/20)</span>}
                  {key === "G" && <span>Governance (5/20)</span>}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href="/members/dashboard/esg-assessment/checklist"
                className="h-9 px-3 rounded-lg flex items-center justify-center text-xs shadow-sm hover:opacity-90"
                style={{ backgroundColor: "var(--primary)", color: "#161326" }}
              >
                View Checklist
              </a>
              <a
                href="/members/dashboard/esg-assessment/results"
                className="h-9 px-3 rounded-lg flex items-center justify-center text-xs border hover:bg-[color:var(--primary)]/10"
                style={{ borderColor: "var(--primary)", color: "var(--secondary)" }}
              >
                View Results
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        {/* Left question card */}
        <div
          className="rounded-xl border bg-white shadow-sm"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="px-5 py-4 border-b text-xs"
            style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
          >
            ENVIRONMENTAL SECTION - Question 14 of 20
          </div>
          <div className="p-6">
            <div
              className="text-[15px] font-medium"
              style={{ color: "var(--secondary)" }}
            >
              Does your company measure and track carbon emissions?
            </div>
            <div className="mt-5 space-y-2">
              {environmentalOptions.map((opt) => (
                <label
                  key={opt.id}
                  className="group flex items-center gap-3 text-sm cursor-pointer rounded-lg border p-3 transition-colors hover:bg-[color:var(--primary)]/6"
                  style={{
                    color: "var(--secondary)",
                    borderColor: "var(--fifth)",
                  }}
                >
                  <input
                    type="radio"
                    className="peer h-4 w-4 accent-[color:var(--primary)]"
                    name="env-q1"
                    checked={selected === opt.id}
                    onChange={() => setSelected(opt.id)}
                  />
                  <span className="peer-checked:font-medium">{opt.label}</span>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <div className="text-xs mb-2" style={{ color: "var(--fourth)" }}>
                Upload Supporting Evidence (Optional):
              </div>
              <button
                className="h-28 w-full rounded-lg border border-dashed text-xs flex items-center justify-center transition-colors hover:bg-[color:var(--primary)]/6"
                style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
              >
                Drag & drop files or click to browse
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/6"
                style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
              >
                ← Previous
              </button>
              <div className="flex gap-3">
                <button
                  className="h-10 px-4 rounded-lg text-sm shadow-sm hover:opacity-90"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#161326",
                  }}
                >
                  Save & Exit
                </button>
                <button
                  className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/10"
                  style={{
                    borderColor: "var(--primary)",
                    color: "var(--secondary)",
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right info panel */}
        <aside
          className="rounded-xl border bg-white shadow-sm lg:sticky lg:top-6 h-fit"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="px-5 py-4 border-b"
            style={{ borderColor: "var(--fifth)" }}
          >
            <div
              className="text-sm font-medium"
              style={{ color: "var(--secondary)" }}
            >
              Why This Matters
            </div>
          </div>
          <div
            className="p-5 space-y-6 text-sm"
            style={{ color: "var(--secondary)" }}
          >
            <div>
              <div className="mb-1 text-xs" style={{ color: "var(--fourth)" }}>
                Carbon tracking is crucial for:
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Net Zero planning</li>
                <li>ESG reporting</li>
                <li>Access to sustainable finance</li>
                <li>Cost reduction</li>
                <li>Climate resilience</li>
              </ul>
            </div>
            <div>
              <div className="mb-1 text-sm font-medium">Best Practices</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use ISO 14064 framework</li>
                <li>Track annually</li>
                <li>Set reduction targets</li>
                <li>Verify externally</li>
              </ul>
            </div>
            <div>
              <div className="mb-1 text-sm font-medium">Resources</div>
              <button
                className="h-9 px-3 rounded-lg text-xs shadow-sm hover:opacity-90"
                style={{ backgroundColor: "var(--primary)", color: "#161326" }}
              >
                Download Template
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
