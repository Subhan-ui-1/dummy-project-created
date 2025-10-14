import AssessmentTabs from "../Tabs";

export default function ESGResultsPage() {
  const overall = 68;
  const e = 72;
  const s = 65;
  const g = 67;

  const tier = overall >= 75 ? "Gold" : overall >= 50 ? "Silver" : "Bronze";
  const tierColor = tier === "Gold" ? "#F2C94C" : tier === "Silver" ? "#BFC7D5" : "#D6A27D";

  return (
    <section className="space-y-8">
      <AssessmentTabs />
      {/* Header */}
      <div className="rounded-xl border bg-white shadow-sm p-6 flex items-center justify-between" style={{ borderColor: "var(--fifth)" }}>
        <div>
          <div className="text-xs uppercase tracking-wide" style={{ color: "var(--fourth)" }}>Module 2</div>
          <div className="text-lg font-semibold" style={{ color: "var(--secondary)" }}>ESG Assessment Results Dashboard</div>
          <div className="text-xs" style={{ color: "var(--fourth)" }}>Comprehensive scoring, clear tiering, and next steps</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded text-xs font-medium" style={{ backgroundColor: tierColor, color: "#161326" }}>{tier} Tier</div>
          <a href="/members/dashboard/esg-assessment" className="h-9 px-3 rounded-lg text-xs shadow-sm hover:opacity-90" style={{ backgroundColor: "var(--primary)", color: "#161326" }}>Retake</a>
        </div>
      </div>

      {/* Scores row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-wide" style={{ color: "var(--fourth)" }}>Overall score</div>
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(147,147,158,0.2)", color: "var(--secondary)" }}>0–100</span>
          </div>
          <div className="mt-2 text-4xl font-extrabold" style={{ color: "var(--secondary)" }}>{overall}</div>
          <div className="mt-3 h-2.5 rounded-full" style={{ backgroundColor: "rgba(147,147,158,0.25)" }}>
            <div className="h-2.5 rounded-full" style={{ width: `${overall}%`, backgroundColor: "var(--primary)" }} />
          </div>
          <div className="mt-2 text-xs" style={{ color: "var(--fourth)" }}>You are tracking well. Aim for 75+ to reach Gold.</div>
        </div>
        {[
          { label: "Environmental", score: e, help: "Emissions, energy, water" },
          { label: "Social", score: s, help: "People & inclusion" },
          { label: "Governance", score: g, help: "Board & oversight" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border bg-white shadow-sm p-5"
            style={{ borderColor: "var(--fifth)" }}
          >
            <div className="text-sm font-medium" style={{ color: "var(--secondary)" }}>{item.label}</div>
            <div className="mt-1 text-xs" style={{ color: "var(--fourth)" }}>{item.help}</div>
            <div className="mt-2 flex items-baseline gap-1">
              <div
                className="text-2xl font-bold"
                style={{ color: "var(--secondary)" }}
              >
                {item.score}
              </div>
              <span className="text-xs" style={{ color: "var(--fourth)" }}>
                /100
              </span>
            </div>
            <div
              className="mt-2 h-2 rounded-full"
              style={{ backgroundColor: "rgba(147,147,158,0.25)" }}
            >
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${item.score}%`,
                  backgroundColor: "var(--primary)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tiering & legend */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border bg-white shadow-sm p-4 text-sm" style={{ borderColor: "var(--fifth)" }}>
          <div className="font-medium" style={{ color: "var(--secondary)" }}>Tiering</div>
          <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
            <div className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>Bronze 0–49</div>
            <div className="rounded border p-2" style={{ borderColor: "var(--fifth)", backgroundColor: "#EEF2FF" }}>Silver 50–74 (you)</div>
            <div className="rounded border p-2" style={{ borderColor: "var(--fifth)", backgroundColor: "#FFF9D9" }}>Gold 75–100</div>
          </div>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-4 text-sm lg:col-span-2" style={{ borderColor: "var(--fifth)" }}>
          <div className="font-medium" style={{ color: "var(--secondary)" }}>How to read scores</div>
          <ul className="mt-2 grid sm:grid-cols-3 gap-2 text-xs" style={{ color: "var(--fourth)" }}>
            <li className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>60–69: Solid foundation, formalize policies</li>
            <li className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>70–79: Mature practices, expand coverage</li>
            <li className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>80+: Leading practice, external assurance</li>
          </ul>
        </div>
      </div>

      {/* Analysis row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div
          className="rounded-xl border bg-white shadow-sm p-5"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div className="text-sm font-medium mb-3" style={{ color: "var(--secondary)" }}>Gap analysis — priority actions</div>
          <div
            className="space-y-4 text-sm"
            style={{ color: "var(--secondary)" }}
          >
            <div>
              <div className="font-medium">
                High Priority (Worth +15 points total):
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Complete water usage assessment</li>
                <li>Upload diversity policy document</li>
                <li>Set carbon reduction targets</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">
                Quick Wins (Worth +8 points total):
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Add employee wellbeing initiatives</li>
                <li>Document waste management process</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="text-sm font-medium mb-3" style={{ color: "var(--secondary)" }}>Industry benchmarking</div>
          <div
            className="space-y-2 text-sm"
            style={{ color: "var(--secondary)" }}
          >
            <div>Your Industry: Manufacturing</div>
            <div>Your Score: {overall}/100</div>
            <div>Industry Average: 62/100 · Above average</div>
            <div>Top Performer: 87/100</div>
            <div>Your Rank: Top 35% in sector</div>
            <div className="text-xs" style={{ color: "var(--fourth)" }}>
              Sectors compared: Construction (59), Retail (64), Hospitality (61)
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/10" style={{ borderColor: "var(--primary)", color: "var(--secondary)" }}>Download report</button>
        <a href="/members/dashboard/esg-assessment" className="h-10 px-4 rounded-lg text-sm shadow-sm hover:opacity-90" style={{ backgroundColor: "var(--primary)", color: "#161326" }}>Retake assessment</a>
        <button className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/10" style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}>Book advisor</button>
        <button className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/10" style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}>Apply for label</button>
      </div>
    </section>
  );
}
