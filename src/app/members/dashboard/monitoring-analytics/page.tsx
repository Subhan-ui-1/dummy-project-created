export default function MonitoringAnalyticsPage() {
  return (
    <section className="space-y-6">
      <div className="text-lg font-semibold" style={{ color: 'var(--secondary)' }}>MODULE 4: Monitoring & Analytics Dashboard</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{label:'Total Members',value:'2,847'},{label:'Avg ESG Score',value:'62.4'},{label:'Active Assessments',value:'456'},{label:'Certifications',value:'189'}].map((k) => (
          <div key={k.label} className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
            <div className="text-xs" style={{ color: 'var(--fourth)' }}>{k.label}</div>
            <div className="text-2xl font-bold" style={{ color: 'var(--secondary)' }}>{k.value}</div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--fourth)' }}>+ trend</div>
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>ESG Adoption Trend - Last 12 Months</div>
          <div className="mt-4 h-56 rounded bg-[color:var(--primary)]/10"></div>
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
      <div className="flex flex-wrap gap-3">
        <button className="h-10 px-4 rounded-lg border text-sm" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Full Report</button>
        <button className="h-10 px-4 rounded-lg border text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Custom Analytics</button>
        <button className="h-10 px-4 rounded-lg border text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Export Data</button>
      </div>
    </section>
  );
}


