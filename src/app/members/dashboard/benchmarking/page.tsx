import ReportingTabs from "../reporting/Tabs";

export default function BenchmarkingReportPage() {
  const rows = [
    { region: "Abu Dhabi (ADCCI)", overall: 62, e: 68, s: 65, g: 60 },
    { region: "Singapore", overall: 78, e: 82, s: 76, g: 75 },
    { region: "Denmark", overall: 85, e: 88, s: 84, g: 83 },
    { region: "Japan", overall: 72, e: 75, s: 70, g: 71 },
  ];

  return (
    <section className="space-y-6">
      <ReportingTabs />
      <div className="flex items-center justify-between">
        <div
          className="text-lg font-semibold"
          style={{ color: "var(--secondary)" }}
        >
          International Benchmarking Report
        </div>
        <span
          className="rounded px-2 py-1 text-xs"
          style={{ backgroundColor: "#EEF2FF", color: "var(--secondary)" }}
        >
          Q3 2025
        </span>
      </div>
      <div
        className="rounded-xl border bg-white shadow-sm p-5"
        style={{ borderColor: "var(--fifth)" }}
      >
        <div className="flex items-center justify-between">
          <div
            className="text-sm font-bold"
            style={{ color: "var(--secondary)" }}
          >
            ESG Implementation Comparison
          </div>
          <div className="text-[10px]" style={{ color: "var(--fourth)" }}>
            Bars show score out of 100
          </div>
        </div>
        <div
          className="mt-4 grid gap-3 text-sm"
          style={{ color: "var(--secondary)" }}
        >
          {rows.map((row) => (
            <div
              key={row.region}
              className="grid sm:grid-cols-5 gap-2 items-center"
            >
              <div className="font-semibold">{row.region}</div>
              {[row.overall, row.e, row.s, row.g].map((score, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full bg-[color:var(--secondary)]/15 relative"
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${score}%`,
                      backgroundColor: "var(--secondary)",
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          className="mt-3 grid grid-cols-5 gap-2 text-[10px]"
          style={{ color: "var(--fourth)" }}
        >
          <div></div>
          <div>Overall</div>
          <div>Environmental</div>
          <div>Social</div>
          <div>Governance</div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Gap analysis - expanded */}
        <div
          className="rounded-xl border bg-white shadow-sm p-5 space-y-4"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-bold"
            style={{ color: "var(--secondary)" }}
          >
            Gap Analysis: Abu Dhabi vs. Leaders
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div
                className="text-xs font-medium mb-1"
                style={{ color: "var(--fourth)" }}
              >
                Strengths (on par or better)
              </div>
              <ul
                className="list-disc pl-5 text-sm space-y-1"
                style={{ color: "var(--secondary)" }}
              >
                <li>Governance framework implementation</li>
                <li>ESG reporting adoption rate</li>
                <li>Green finance infrastructure development</li>
              </ul>
            </div>
            <div>
              <div
                className="text-xs font-medium mb-1"
                style={{ color: "var(--fourth)" }}
              >
                Opportunities for improvement
              </div>
              <ul
                className="list-disc pl-5 text-sm space-y-1"
                style={{ color: "var(--secondary)" }}
              >
                <li>
                  Environmental: -18 pts vs. Denmark — renewable energy,
                  circular economy
                </li>
                <li>
                  Social: -19 pts vs. Denmark — diversity & employee wellbeing
                </li>
                <li>Data depth for Scope 3 supplier categories</li>
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div
              className="rounded border p-3"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                backgroundColor: "var(--secondary)",
              }}
            >
              <div className="font-medium">Priority themes</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Renewables", "Diversity", "Logistics S3", "Water"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded px-2 py-1"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "var(--secondary)",
                      }}
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
            <div
              className="rounded border p-3"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                backgroundColor: "var(--secondary)",
              }}
            >
              <div className="font-medium">Recommended targets</div>
              <ul className="mt-2 space-y-1">
                <li>Energy intensity: -8% in 12 months</li>
                <li>Representation (women): +6 pts in 18 months</li>
                <li>Board climate oversight: 100% by FY</li>
              </ul>
            </div>
            <div
              className="rounded border p-3"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                backgroundColor: "var(--secondary)",
              }}
            >
              <div className="font-medium">Execution owners</div>
              <ul className="mt-2 space-y-1">
                <li>Energy PMO — Facilities</li>
                <li>HR/DEI Council — Social</li>
                <li>Board Secretariat — Governance</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Best practices - expanded */}
        <div
          className="rounded-xl border bg-white shadow-sm p-5 space-y-4"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-bold"
            style={{ color: "var(--secondary)" }}
          >
            Best Practices from Global Leaders
          </div>
          <div
            className="grid md:grid-cols-2 gap-4 text-sm"
            style={{ color: "var(--secondary)" }}
          >
            <div
              className="rounded border p-3"
              style={{ borderColor: "var(--fifth)" }}
            >
              <div className="font-medium">Singapore</div>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Mandatory ESG reporting (SGX) and climate disclosures</li>
                <li>Green Finance Action Plan integration with SMEs</li>
                <li>Public ESG data portal for benchmarking</li>
              </ul>
            </div>
            <div
              className="rounded border p-3"
              style={{ borderColor: "var(--fifth)" }}
            >
              <div className="font-medium">Denmark</div>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Circular economy at scale (60% waste recycling)</li>
                <li>Employee ownership & participation models</li>
                <li>Carbon tax implementation since 1992</li>
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div
              className="rounded border p-3"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                backgroundColor: "var(--secondary)",
              }}
            >
              <div className="font-medium">Templates & toolkits</div>
              <ul className="mt-2 space-y-1">
                <li>Supplier S3 questionnaire (XLSX)</li>
                <li>Board climate charter (DOCX)</li>
                <li>Energy audit checklist (PDF)</li>
              </ul>
            </div>
            <div
              className="rounded border p-3"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                backgroundColor: "var(--secondary)",
              }}
            >
              <div className="font-medium">Maturity accelerators</div>
              <ul className="mt-2 space-y-1">
                <li>External assurance pilots</li>
                <li>Sector alliances for supplier data</li>
                <li>Incentives linked to reduction KPIs</li>
              </ul>
            </div>
            <div
              className="rounded border p-3"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                backgroundColor: "var(--secondary)",
              }}
            >
              <div className="font-medium">Workshops & training</div>
              <ul className="mt-2 space-y-1">
                <li>Scope 3 masterclass</li>
                <li>ESG reporting bootcamp (GRI/ISSB)</li>
                <li>Board oversight for climate risk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          className="h-10 px-4 rounded-lg border text-sm"
          style={{ borderColor: "var(--secondary)", color: "var(--secondary)" }}
        >
          Download Full Report
        </button>
        <button
          className="h-10 px-4 rounded-lg border text-sm"
          style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
        >
          Interactive Dashboard
        </button>
        <button
          className="h-10 px-4 rounded-lg border text-sm"
          style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
        >
          Share with Stakeholders
        </button>
      </div>
    </section>
  );
}
