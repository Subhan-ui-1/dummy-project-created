"use client";

import { useRouter } from "next/navigation";

export default function KnowledgeHubPage() {
  const router = useRouter();
  return (
    <section className="space-y-6">
      <div
        className="text-lg font-semibold"
        style={{ color: "var(--secondary)" }}
      >
        Knowledge Hub & Training System
      </div>
      <div className="grid gap-6">
        <div
          className="rounded-xl border bg-white shadow-sm p-5"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div className="grid sm:grid-cols-4 gap-3 text-center">
            {[
              { label: "Hours Learned", value: "18.5" },
              { label: "Current Streak", value: "7 days" },
              { label: "Quiz Score", value: "87%" },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded border p-3"
                style={{ borderColor: "var(--fifth)",
                  backgroundColor: "var(--primary)",
                  
                 }}
              >
                <div className="text-xs" style={{ color: "var(--fourth)" }}>
                  {k.label}
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--secondary)" }}
                >
                  {k.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-xl border bg-white shadow-sm p-5 space-y-3"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Available Training Courses
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "ESG Fundamentals",
              "Carbon Accounting",
              "Diversity & Inclusion",
              "Circular Economy",
              "ESG Reporting (GRI)",
              "Green Finance Basics",
            ].map((c) => (
              <div
                key={c}
                className="rounded border p-3 flex items-center justify-between"
                style={{
                  borderColor: "var(--primary)",
                  color: "white",
                  backgroundColor: "var(--secondary)",
                }}
              >
                <div>{c}</div>
                <button
                  className="h-9 px-3 rounded-lg border text-xs"
                  style={{
                    borderColor: "var(--primary)",
                    color: "var(--secondary)",
                    backgroundColor: "var(--primary)",
                  }}
                  onClick={() =>
                    router.push("/members/dashboard/course-content")
                  }
                >
                  Start Course
                </button>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-xl border bg-white shadow-sm p-5"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-medium mb-2"
            style={{ color: "var(--secondary)" }}
          >
            Training Resources & Templates
          </div>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            {[
              "ESG Assessment Template.xlsx",
              "Diversity Policy Template.docx",
              "Green Finance Checklist.pdf",
              "Carbon Reporting Guide.pdf",
              "Video: How to Complete ESG Assessment",
              "Emiratization Best Practices.pdf",
            ].map((r) => (
              <div
                key={r}
                className="rounded border p-3 flex items-center justify-between"
                style={{
                  borderColor: "var(--primary)",
                  color: "white",
                  backgroundColor: "var(--secondary)",
                }}
              >
                <span>{r}</span>
                <button
                  className="h-8 px-3 rounded-lg border text-xs"
                  style={{
                    borderColor: "var(--primary)",
                    color: "var(--secondary)",
                    backgroundColor: "var(--primary)",
                  }}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
