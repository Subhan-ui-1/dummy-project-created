export default function MembersAnalyticsPage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2
          className="text-xl font-semibold"
          style={{ color: "var(--fourth)" }}
        >
          Analytics
        </h2>
        <div className="flex gap-2">
          <select
            className="h-9 rounded-lg border px-3 text-sm"
            style={{ borderColor: "var(--fifth)", color: "var(--secondary)" }}
          >
            <option>Last 12 months</option>
            <option>Year to date</option>
            <option>Last 90 days</option>
          </select>
          <select
            className="h-9 rounded-lg border px-3 text-sm"
            style={{ borderColor: "var(--fifth)", color: "var(--secondary)" }}
          >
            <option>All projects</option>
            <option>Manufacturing</option>
            <option>Logistics</option>
            <option>Retail</option>
          </select>
        </div>
      </div>

      {/* KPI header */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { l: "Total Projects", v: "124" },
          { l: "Avg ESG Score", v: "68.2" },
          { l: "Active Assessments", v: "37" },
          { l: "Certifications", v: "22" },
        ].map((k) => (
          <div
            key={k.l}
            className="rounded-xl border bg-white shadow-sm p-5"
            style={{ borderColor: "var(--fifth)" }}
          >
            <div className="text-xs" style={{ color: "var(--fourth)" }}>
              {k.l}
            </div>
            <div
              className="text-2xl font-bold mt-1"
              style={{ color: "var(--secondary)" }}
            >
              {k.v}
            </div>
            <div
              className="text-[10px] mt-1"
              style={{ color: "var(--fourth)" }}
            >
              vs last period: +5%
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Construction-focused score trend */}
        <div className="rounded-xl border bg-white shadow-sm p-5 lg:col-span-2" style={{ borderColor: "var(--fifth)" }}>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium" style={{ color: "var(--secondary)" }}>ESG Score Trend — Mega Construction Projects</div>
            <div className="flex items-center gap-2 text-[10px]" style={{ color: "var(--secondary)" }}>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--primary)" }}></span>E (Environment)</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#484767]"></span>S (Social)</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#93939E]"></span>G (Governance)</span>
            </div>
          </div>
          <div className="mt-4 h-72 rounded-lg border relative overflow-hidden" style={{ borderColor: "var(--fifth)" }}>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(192,250,160,0.15) 0 100%)" }} />
            <svg viewBox="0 0 1000 300" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="50" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                </pattern>
                <linearGradient id="gradE" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(192,250,160,0.6)" />
                  <stop offset="100%" stopColor="rgba(192,250,160,0.05)" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="1000" height="300" fill="url(#grid)" />
              <rect x="0" y="60" width="1000" height="20" fill="#C0FAA0" opacity="0.25" />
              <rect x="0" y="75" width="1000" height="20" fill="#C0FAA0" opacity="0.2" />
              <path d="M20 240 L160 230 L300 210 L440 205 L580 198 L720 185 L860 178 L980 170" stroke="#C0FAA0" strokeWidth="3" fill="none" />
              <path d="M20 240 L160 230 L300 210 L440 205 L580 198 L720 185 L860 178 L980 170 L980 300 L20 300 Z" fill="url(#gradE)" />
              <path d="M20 255 L160 250 L300 242 L440 238 L580 232 L720 228 L860 220 L980 214" stroke="#484767" strokeWidth="2.5" fill="none" />
              <path d="M20 265 L160 262 L300 258 L440 254 L580 252 L720 248 L860 246 L980 244" stroke="#93939E" strokeWidth="2.5" fill="none" />
              <g fill="#161326" opacity="0.9">
                <circle cx="160" cy="230" r="3" />
                <text x="150" y="220" fontSize="10" fill="#161326">Tender</text>
                <circle cx="300" cy="210" r="3" />
                <text x="280" y="200" fontSize="10" fill="#161326">Mobilization</text>
                <circle cx="580" cy="198" r="3" />
                <text x="560" y="188" fontSize="10" fill="#161326">Foundation</text>
                <circle cx="860" cy="178" r="3" />
                <text x="840" y="168" fontSize="10" fill="#161326">Structure</text>
              </g>
            </svg>
            <div className="absolute left-3 top-3 text-[10px] rounded px-2 py-1" style={{ backgroundColor: "#EEF2FF", color: "var(--secondary)" }}>Baseline: 65 | Target: 75–80</div>
          </div>
          <div className="mt-3 grid sm:grid-cols-3 gap-3 text-xs" style={{ color: "var(--secondary)" }}>
            <div className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>Emissions intensity ↓ 12% YoY</div>
            <div className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>LTIFR ↓ 0.3 → 0.2 (safety)</div>
            <div className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>Policy compliance 96%</div>
          </div>
        </div>

        {/* Donut chart placeholder */}
        <div
          className="rounded-xl border bg-white shadow-sm p-5 flex flex-col items-center"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="w-full text-sm font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Projects by Status
          </div>
          <div
            className="mt-4 h-48 w-48 rounded-full relative"
            style={{
              background:
                "conic-gradient(var(--primary) 0 40%, #9CA3AF 40% 70%, #E5E7EB 70% 100%)",
            }}
          >
            <div className="absolute inset-6 rounded-full bg-white" />
          </div>
          <div
            className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-xs"
            style={{ color: "var(--secondary)" }}
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></span>
              Active (40%)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>In
              Review (30%)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-200"></span>
              Completed (30%)
            </span>
          </div>
        </div>
      </div>

      {/* Bar chart and table */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div
          className="rounded-xl border bg-white shadow-sm p-5"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Average Scores by Sector
          </div>
          <div className="mt-4 space-y-3">
            {[
              { s: "Manufacturing", v: 72 },
              { s: "Logistics", v: 66 },
              { s: "Retail", v: 64 },
              { s: "Construction", v: 59 },
              { s: "Hospitality", v: 61 },
            ].map(({ s, v }) => (
              <div key={s}>
                <div
                  className="flex items-center justify-between text-xs"
                  style={{ color: "var(--secondary)" }}
                >
                  <span>{s}</span>
                  <span>{v}</span>
                </div>
                <div className="mt-1 h-2 rounded bg-[color:var(--primary)]/20">
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${v}%`,
                      backgroundColor: "var(--primary)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-xl border bg-white shadow-sm p-5 lg:col-span-2 overflow-x-auto"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Recent Projects
          </div>
          <table
            className="w-full text-sm mt-3"
            style={{ color: "var(--secondary)" }}
          >
            <thead>
              <tr className="text-left">
                <th className="py-2">Project</th>
                <th>Sector</th>
                <th>Status</th>
                <th>Score</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  p: "ABC Manufacturing",
                  s: "Manufacturing",
                  st: "Active",
                  sc: 72,
                  u: "2d ago",
                },
                {
                  p: "Green Logistics Co",
                  s: "Logistics",
                  st: "In Review",
                  sc: 66,
                  u: "5d ago",
                },
                {
                  p: "XYZ Retail LLC",
                  s: "Retail",
                  st: "Completed",
                  sc: 64,
                  u: "1w ago",
                },
              ].map((r) => (
                <tr
                  key={r.p}
                  className="border-t"
                  style={{ borderColor: "var(--fifth)" }}
                >
                  <td className="py-2">{r.p}</td>
                  <td>{r.s}</td>
                  <td>{r.st}</td>
                  <td>{r.sc}</td>
                  <td>{r.u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Advanced analytics row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* AI Forecast */}
        <div className="rounded-xl border bg-white shadow-sm p-5 lg:col-span-2" style={{ borderColor: "var(--fifth)" }}>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium" style={{ color: "var(--secondary)" }}>AI Forecast — ESG Score (next 6 months)</div>
            <span className="text-[10px] rounded px-2 py-0.5" style={{ backgroundColor: "#EEF2FF", color: "var(--secondary)" }}>Confidence: 82%</span>
          </div>
          <div className="mt-4 h-56 rounded-lg border relative overflow-hidden" style={{ borderColor: "var(--fifth)" }}>
            <svg viewBox="0 0 1000 220" className="absolute inset-0">
              <rect x="0" y="0" width="1000" height="220" fill="url(#grid)" opacity="0.25" />
              {/* Historical */}
              <path d="M20 170 L160 160 L300 150 L440 146 L580 142 L720 138" stroke="#484767" strokeWidth="2" fill="none" />
              {/* Forecast */}
              <path d="M720 138 L860 126 L980 118" stroke="#C0FAA0" strokeWidth="3" strokeDasharray="6 6" fill="none" />
            </svg>
            <div className="absolute left-3 top-3 text-[10px]" style={{ color: "var(--fourth)" }}>Model: Gradient-boosted ensemble using seasonality + workshops calendar</div>
          </div>
          <div className="mt-2 text-xs" style={{ color: "var(--fourth)" }}>Expected to reach 74–76 by Q4 with planned safety and energy initiatives.</div>
        </div>

        {/* Emissions breakdown stacked bars */}
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="text-sm font-medium" style={{ color: "var(--secondary)" }}>Emissions Breakdown (Scope 1/2/3)</div>
          <div className="mt-4 space-y-3">
            {[{k:"Concrete", s1:12, s2:8, s3:20},{k:"Steel", s1:10, s2:6, s3:14},{k:"Logistics", s1:3, s2:5, s3:18}].map(({k,s1,s2,s3}) => {
              const total = s1+s2+s3; const w = (v:number)=> `${(v/ (total||1))*100}%`;
              return (
                <div key={k}>
                  <div className="flex items-center justify-between text-xs" style={{ color: "var(--secondary)" }}><span>{k}</span><span>{total} ktCO₂e</span></div>
                  <div className="mt-1 h-3 rounded bg-gray-100 flex overflow-hidden">
                    <span style={{ width: w(s1), backgroundColor: '#C0FAA0' }} title={`S1 ${s1}`}></span>
                    <span style={{ width: w(s2), backgroundColor: '#484767' }} title={`S2 ${s2}`}></span>
                    <span style={{ width: w(s3), backgroundColor: '#93939E' }} title={`S3 ${s3}`}></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]" style={{ color: "var(--secondary)" }}>
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded" style={{ backgroundColor: '#C0FAA0' }}></span>Scope 1</span>
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded" style={{ backgroundColor: '#484767' }}></span>Scope 2</span>
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded" style={{ backgroundColor: '#93939E' }}></span>Scope 3</span>
          </div>
        </div>
      </div>

      {/* Correlations & anomalies */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Heatmap */}
        <div className="rounded-xl border bg-white shadow-sm p-5 lg:col-span-2" style={{ borderColor: "var(--fifth)" }}>
          <div className="text-sm font-medium" style={{ color: "var(--secondary)" }}>Correlation Heatmap</div>
          <div className="mt-4 grid grid-cols-6 gap-1">
            {Array.from({ length: 6 * 6 }).map((_, i) => {
              const r = Math.floor(Math.random() * 120) - 20; // -20..99
              const col = r > 60 ? '#C0FAA0' : r > 30 ? '#CDEFC2' : r > 0 ? '#E6F9E8' : '#F3F4F6';
              return <div key={i} className="h-8" style={{ backgroundColor: col }} />;
            })}
          </div>
          <div className="mt-3 text-[10px]" style={{ color: "var(--fourth)" }}>High correlation between energy intensity and overall ESG score; weak correlation with headcount.</div>
        </div>
        {/* Anomaly list */}
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="text-sm font-medium" style={{ color: "var(--secondary)" }}>AI Anomaly Detection</div>
          <ul className="mt-3 space-y-2 text-xs" style={{ color: "var(--secondary)" }}>
            <li className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>June: Sudden spike in Scope 3 logistics emissions (+18%) — likely supplier data import issue.</li>
            <li className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>August: Safety LTIFR increase detected in Project Delta — investigate subcontractor records.</li>
            <li className="rounded border p-2" style={{ borderColor: "var(--fifth)" }}>November: Governance policy attestation gap (4%) — send reminder to site managers.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
