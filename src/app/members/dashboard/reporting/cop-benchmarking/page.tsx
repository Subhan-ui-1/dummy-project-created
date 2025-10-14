import ReportingTabs from "../Tabs";

export default function COPBenchmarkingReportPage() {
  return (
    <section className="space-y-6">
      <ReportingTabs />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>ESG COP-style Benchmarking Report</h2>
          <p className="text-sm" style={{ color: 'var(--secondary)' }}>Comparative performance against global leaders, aligned to COP themes.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-9 px-3 rounded-lg border text-xs" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Export PDF</button>
          <button className="h-9 px-3 rounded-lg border text-xs" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Share</button>
        </div>
      </div>

      <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
        <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Implementation Comparison</div>
        <div className="mt-4 grid gap-3 text-sm" style={{ color: 'var(--secondary)' }}>
          {/* Header */}
          <div className="grid grid-cols-5 font-medium">
            <div>Country/Region</div>
            <div>Overall</div>
            <div>Environmental</div>
            <div>Social</div>
            <div>Governance</div>
          </div>
          {["Abu Dhabi (ADCCI)","Singapore","Denmark","Japan"].map((row) => (
            <div key={row} className="grid grid-cols-5 items-center gap-2">
              <div className="font-medium">{row}</div>
              {[62,68,65,60].map((score, i) => (
                <div key={i} className="h-2 rounded-full bg-[color:var(--primary)]/25 relative">
                  <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${score}%`, backgroundColor: 'var(--primary)' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-2" style={{ color: 'var(--secondary)' }}>Gap Analysis</div>
          <ul className="list-disc pl-5 text-sm" style={{ color: 'var(--secondary)' }}>
            <li>Environmental: -18 pts vs. Denmark — focus on renewables and circular economy</li>
            <li>Social: -19 pts vs. Denmark — focus on diversity and employee wellbeing</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-2" style={{ color: 'var(--secondary)' }}>Best Practices</div>
          <ul className="list-disc pl-5 text-sm" style={{ color: 'var(--secondary)' }}>
            <li>Singapore: mandatory ESG reporting; finance action plan integration</li>
            <li>Denmark: circular economy at scale; carbon tax since 1992</li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
        <div className="text-sm font-medium mb-2" style={{ color: 'var(--secondary)' }}>Strategic Recommendations</div>
        <ol className="list-decimal pl-5 space-y-2 text-sm" style={{ color: 'var(--secondary)' }}>
          <li>Short-term (6–12 months): accelerate SME renewable adoption; set 5–8 pt sector targets</li>
          <li>Medium-term (1–2 years): strengthen social pillar via Emiratization and diversity</li>
          <li>Long-term (2–3 years): build circular economy framework; aim for 75+ overall</li>
        </ol>
      </div>
    </section>
  );
}


