import ReportingTabs from "../Tabs";

export default function ESGAdoptionReportPage() {
  return (
    <section className="space-y-6">
      <ReportingTabs />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>ESG Adoption Report</h2>
          <p className="text-sm" style={{ color: 'var(--secondary)' }}>Adoption trend, sector breakdown, and key findings for your organization.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-9 px-3 rounded-lg border text-xs" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Export PDF</button>
          <button className="h-9 px-3 rounded-lg border text-xs" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Download CSV</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-white shadow-sm p-5 lg:col-span-2" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Adoption Trend - Last 12 Months</div>
          <div className="mt-4 h-64 rounded bg-[color:var(--primary)]/10" />
          <div className="mt-2 text-xs" style={{ color: 'var(--fourth)' }}>Upward trend: +45% YoY</div>
        </div>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Adoption by Sector</div>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: 'var(--secondary)' }}>
            {[{s:'Manufacturing',v:68},{s:'Logistics',v:66},{s:'Retail',v:64},{s:'Construction',v:59},{s:'Hospitality',v:61}].map(({s,v}) => (
              <li key={s} className="flex items-center justify-between">
                <span>{s}</span>
                <span className="ml-4 flex-1 h-2 rounded bg-[color:var(--primary)]/20 relative">
                  <span className="absolute inset-y-0 left-0 rounded" style={{ width: `${v}%`, backgroundColor: 'var(--primary)' }} />
                </span>
                <span className="w-10 text-right">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>AI-powered Insights</div>
          <ul className="mt-2 list-disc pl-5 text-sm" style={{ color: 'var(--secondary)' }}>
            <li>Manufacturing shows the strongest adoption growth (+15% QoQ)</li>
            <li>Social pillar lags behind E&G across most sectors</li>
            <li>78% of companies struggle with Scope 3 tracking</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Risk Alerts</div>
          <ul className="mt-2 list-disc pl-5 text-sm" style={{ color: 'var(--secondary)' }}>
            <li>3 companies at risk of label expiry</li>
            <li>12 companies haven't updated data in 90+ days</li>
            <li>5 sectors below national targets</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


