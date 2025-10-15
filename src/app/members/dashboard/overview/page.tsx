import KPIStat from "@/components/dashboard/KPIStat";
import ProgressBar from "@/components/dashboard/ProgressBar";
import TrendBadge from "@/components/dashboard/TrendBadge";

export default function MembersOverviewPage() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold" style={{ color: "var(--secondary)" }}>ESG Overview</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs rounded px-2 py-1" style={{ backgroundColor: "#E8FFF4", color: "#006D3C", border: "1px solid #BFEFD8" }}>Environmental</span>
          <span className="text-xs rounded px-2 py-1" style={{ backgroundColor: "#EEF2FF", color: "#1E3A8A", border: "1px solid #C7D2FE" }}>Social</span>
          <span className="text-xs rounded px-2 py-1" style={{ backgroundColor: "#F5ECFF", color: "#6B21A8", border: "1px solid #E9D5FF" }}>Governance</span>
        </div>
        <p className="mt-2 text-sm" style={{ color: "var(--fourth)" }}>
          High-level ESG performance across the E, S, and G pillars for members.
        </p>
      </div>

      {/* ESG summary highlights */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--fifth)", backgroundColor: "#F7F9FF" }}>
          <div className="text-xs" style={{ color: "var(--fourth)" }}>Net zero target</div>
          <div className="mt-1 text-lg font-semibold" style={{ color: "var(--secondary)" }}>2040</div>
          <div className="text-[11px] mt-1" style={{ color: "var(--fourth)" }}>Aligned to SBTi</div>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--fifth)", backgroundColor: "#F6FFFB" }}>
          <div className="text-xs" style={{ color: "var(--fourth)" }}>GHG inventory coverage</div>
          <div className="mt-1 text-lg font-semibold" style={{ color: "var(--secondary)" }}>92%</div>
          <div className="text-[11px] mt-1" style={{ color: "var(--fourth)" }}>Scopes 1–3 material categories</div>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--fifth)", backgroundColor: "#FBF7FF" }}>
          <div className="text-xs" style={{ color: "var(--fourth)" }}>External rating</div>
          <div className="mt-1 text-lg font-semibold" style={{ color: "var(--secondary)" }}>A-</div>
          <div className="text-[11px] mt-1" style={{ color: "var(--fourth)" }}>CDP equivalent</div>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--fifth)", backgroundColor: "#FFF9D9" }}>
          <div className="text-xs" style={{ color: "var(--fourth)" }}>Industry rank</div>
          <div className="mt-1 text-lg font-semibold" style={{ color: "var(--secondary)" }}>Top 30%</div>
          <div className="text-[11px] mt-1" style={{ color: "var(--fourth)" }}>vs. regional peers</div>
        </div>
      </div>

      {/* Expanded KPI grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPIStat label="Carbon emissions (tCO₂e)" value={"12,450"} sublabel={<span>YoY <TrendBadge changePct={-4.2} /></span> as unknown as string} />
        <KPIStat label="Toxic waste (tons)" value={"320"} sublabel={<span>YoY <TrendBadge changePct={-1.3} /></span> as unknown as string} />
        <KPIStat label="Energy reduction" value={"18%"} sublabel={<span>Target 25%</span> as unknown as string} />
        <KPIStat label="Water reduction" value={"12%"} sublabel={<span>Target 20%</span> as unknown as string} />
        <KPIStat label="Renewables share" value={"36%"} sublabel={<span>Target 50%</span> as unknown as string} />
        <KPIStat label="Supplier ESG coverage" value={"58%"} sublabel={<span>Scope 3 Tier-1</span> as unknown as string} />
        <KPIStat label="LTIFR" value={"0.86"} sublabel={<span>YoY <TrendBadge changePct={-0.2} /></span> as unknown as string} />
        <KPIStat label="Board independence" value={"62%"} sublabel={<span>Policy ≥ 50%</span> as unknown as string} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border p-5" style={{ borderColor: "#BFEFD8", background: "linear-gradient(180deg, #F6FFFB 0%, #FFFFFF 60%)" }}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold" style={{ color: "#0B5F3A" }}>Environmental</h3>
            <span className="text-xs rounded px-1.5 py-0.5" style={{ color: "#0B5F3A", backgroundColor: "#E8FFF4", border: "1px solid #BFEFD8" }}>E</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--secondary)" }}>
            <li className="flex items-center justify-between"><span>Carbon emissions</span><span>12,450 tCO₂e</span></li>
            <li className="flex items-center justify-between"><span>Tons of toxic waste</span><span>320 tons</span></li>
            <li className="flex items-center justify-between"><span>Percent of energy reduction</span><span>18%</span></li>
            <li className="flex items-center justify-between"><span>Percent of water reduction</span><span>12%</span></li>
            <li className="flex items-center justify-between"><span>Percent sustainably sourced products</span><span>54%</span></li>
            <li className="flex items-center justify-between"><span>Pay tied to climate targets</span><span>15%</span></li>
            <li className="flex items-center justify-between"><span>Renewable electricity</span><span>36%</span></li>
            <li className="flex items-center justify-between"><span>Fleet electrification</span><span>28%</span></li>
          </ul>
          <div className="mt-4 space-y-2">
            <ProgressBar value={54} label="Sustainably sourced products" />
            <ProgressBar value={15} label="Compensation linked to climate targets" />
            <ProgressBar value={36} label="Renewables share" />
          </div>
        </div>

        <div className="rounded-lg border p-5" style={{ borderColor: "#C7D2FE", background: "linear-gradient(180deg, #F7F9FF 0%, #FFFFFF 60%)" }}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold" style={{ color: "#1E3A8A" }}>Social</h3>
            <span className="text-xs rounded px-1.5 py-0.5" style={{ color: "#1E3A8A", backgroundColor: "#EEF2FF", border: "1px solid #C7D2FE" }}>S</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--secondary)" }}>
            <li className="flex items-center justify-between"><span>Representation at all levels</span><span>41%</span></li>
            <li className="flex items-center justify-between"><span>Gender pay gap</span><span>3.5%</span></li>
            <li className="flex items-center justify-between"><span>Upskilling investment / employee</span><span>$1,250</span></li>
            <li className="flex items-center justify-between"><span>Employee satisfaction</span><span>78/100</span></li>
            <li className="flex items-center justify-between"><span>Wellness initiatives (number/types)</span><span>12</span></li>
            <li className="flex items-center justify-between"><span>Lost time injury frequency rate</span><span>0.86</span></li>
            <li className="flex items-center justify-between"><span>Community investment</span><span>$420k</span></li>
          </ul>
          <div className="mt-4 space-y-2">
            <ProgressBar value={41} label="Representation" />
            <ProgressBar value={78} label="Satisfaction" />
            <ProgressBar value={72} label="Training completion" />
          </div>
        </div>

        <div className="rounded-lg border p-5" style={{ borderColor: "#E9D5FF", background: "linear-gradient(180deg, #FBF7FF 0%, #FFFFFF 60%)" }}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold" style={{ color: "#6B21A8" }}>Governance</h3>
            <span className="text-xs rounded px-1.5 py-0.5" style={{ color: "#6B21A8", backgroundColor: "#F5ECFF", border: "1px solid #E9D5FF" }}>G</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--secondary)" }}>
            <li className="flex items-center justify-between"><span>Female directors</span><span>4</span></li>
            <li className="flex items-center justify-between"><span>Minority directors</span><span>3</span></li>
            <li className="flex items-center justify-between"><span>Board climate involvement</span><span>Yes</span></li>
            <li className="flex items-center justify-between"><span>Exec comp aligned with sustainability</span><span>True</span></li>
            <li className="flex items-center justify-between"><span>ESG policy disclosure</span><span>Public</span></li>
            <li className="flex items-center justify-between"><span>Whistleblower mechanism</span><span>Active</span></li>
          </ul>
          <div className="mt-4 space-y-2">
            <ProgressBar value={60} label="Governance maturity" />
            <ProgressBar value={85} label="Compliance coverage" />
          </div>
        </div>
      </div>

      {/* Compliance & Reporting */}
      <div className="rounded-lg border p-5" style={{ borderColor: "var(--fifth)" }}>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold" style={{ color: "var(--secondary)" }}>Compliance & Reporting</h3>
          <span className="text-xs rounded px-2 py-1" style={{ backgroundColor: "#EEF2FF", color: "var(--secondary)" }}>Readiness: 78%</span>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm" style={{ color: "var(--secondary)" }}>
          <div className="rounded border p-3" style={{ borderColor: "var(--fifth)" }}>
            <div className="text-xs" style={{ color: "var(--fourth)" }}>Frameworks</div>
            <ul className="mt-1 space-y-1">
              <li>GRI: Core</li>
              <li>ISSB: In progress</li>
              <li>TCFD: Partial</li>
            </ul>
          </div>
          <div className="rounded border p-3" style={{ borderColor: "var(--fifth)" }}>
            <div className="text-xs" style={{ color: "var(--fourth)" }}>Assurance</div>
            <ul className="mt-1 space-y-1">
              <li>Scope 1–2: Limited</li>
              <li>Scope 3: Plan FY26</li>
              <li>Data controls: Established</li>
            </ul>
          </div>
          <div className="rounded border p-3" style={{ borderColor: "var(--fifth)" }}>
            <div className="text-xs" style={{ color: "var(--fourth)" }}>Deadlines</div>
            <ul className="mt-1 space-y-1">
              <li>Annual ESG report: Q1</li>
              <li>CDP submission: Q3</li>
              <li>Supplier survey: Q2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


