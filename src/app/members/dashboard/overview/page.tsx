import KPIStat from "@/components/dashboard/KPIStat";
import ProgressBar from "@/components/dashboard/ProgressBar";
import TrendBadge from "@/components/dashboard/TrendBadge";

export default function MembersOverviewPage() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold" style={{ color: "var(--fourth)" }}>ESG Overview</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--fifth)" }}>
          High-level ESG performance across Environmental, Social, and Governance pillars for members.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPIStat label="Carbon emissions (tCO₂e)" value={"12,450"} sublabel={<span>YoY <TrendBadge changePct={-4.2} /></span> as unknown as string} />
        <KPIStat label="Toxic waste (tons)" value={"320"} sublabel={<span>YoY <TrendBadge changePct={-1.3} /></span> as unknown as string} />
        <KPIStat label="Energy reduction" value={"18%"} sublabel={<span>Target 25%</span> as unknown as string} />
        <KPIStat label="Water reduction" value={"12%"} sublabel={<span>Target 20%</span> as unknown as string} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold" style={{ color: "var(--secondary)" }}>Environmental</h3>
            <span className="text-xs" style={{ color: "var(--fifth)" }}>E</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--secondary)" }}>
            <li className="flex items-center justify-between"><span>Carbon emissions</span><span>12,450 tCO₂e</span></li>
            <li className="flex items-center justify-between"><span>Tons of toxic waste</span><span>320 tons</span></li>
            <li className="flex items-center justify-between"><span>Percent of energy reduction</span><span>18%</span></li>
            <li className="flex items-center justify-between"><span>Percent of water reduction</span><span>12%</span></li>
            <li className="flex items-center justify-between"><span>Percent sustainably sourced products</span><span>54%</span></li>
            <li className="flex items-center justify-between"><span>Pay tied to climate targets</span><span>15%</span></li>
          </ul>
          <div className="mt-4 space-y-2">
            <ProgressBar value={54} label="Sustainably sourced products" />
            <ProgressBar value={15} label="Compensation linked to climate targets" />
          </div>
        </div>

        <div className="rounded-lg border p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold" style={{ color: "var(--secondary)" }}>Social</h3>
            <span className="text-xs" style={{ color: "var(--fifth)" }}>S</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--secondary)" }}>
            <li className="flex items-center justify-between"><span>Representation at all levels</span><span>41%</span></li>
            <li className="flex items-center justify-between"><span>Gender pay gap</span><span>3.5%</span></li>
            <li className="flex items-center justify-between"><span>Upskilling investment / employee</span><span>$1,250</span></li>
            <li className="flex items-center justify-between"><span>Employee satisfaction</span><span>78/100</span></li>
            <li className="flex items-center justify-between"><span>Wellness initiatives (number/types)</span><span>12</span></li>
          </ul>
          <div className="mt-4 space-y-2">
            <ProgressBar value={41} label="Representation" />
            <ProgressBar value={78} label="Satisfaction" />
          </div>
        </div>

        <div className="rounded-lg border p-5" style={{ borderColor: "var(--fifth)" }}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold" style={{ color: "var(--secondary)" }}>Governance</h3>
            <span className="text-xs" style={{ color: "var(--fifth)" }}>G</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--secondary)" }}>
            <li className="flex items-center justify-between"><span>Female directors</span><span>4</span></li>
            <li className="flex items-center justify-between"><span>Minority directors</span><span>3</span></li>
            <li className="flex items-center justify-between"><span>Board climate involvement</span><span>Yes</span></li>
            <li className="flex items-center justify-between"><span>Exec comp aligned with sustainability</span><span>True</span></li>
          </ul>
          <div className="mt-4 space-y-2">
            <ProgressBar value={60} label="Governance maturity" />
          </div>
        </div>
      </div>
    </section>
  );
}


