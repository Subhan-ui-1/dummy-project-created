export default function AdvisorNetworkPage() {
  return (
    <section className="space-y-6">
      <div className="text-lg font-semibold" style={{ color: 'var(--secondary)' }}>MODULE 6: Advisor Network Management</div>
      <div className="grid gap-6">
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="grid sm:grid-cols-4 gap-3 text-sm" style={{ color: 'var(--secondary)' }}>
            <div className="rounded border p-3" style={{ borderColor: 'var(--fifth)' }}>Active Advisors: 38</div>
            <div className="rounded border p-3" style={{ borderColor: 'var(--fifth)' }}>Total Sessions: 342</div>
            <div className="rounded border p-3" style={{ borderColor: 'var(--fifth)' }}>Avg Rating: 4.7/5</div>
            <div className="rounded border p-3" style={{ borderColor: 'var(--fifth)' }}>Pilot SMEs: 15</div>
          </div>
        </div>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-3" style={{ color: 'var(--secondary)' }}>Pilot Program Performance</div>
          <div className="grid md:grid-cols-2 gap-4 text-sm" style={{ color: 'var(--secondary)' }}>
            <div className="rounded border p-3" style={{ borderColor: 'var(--fifth)' }}>
              Average Score Improvement: +17.2 pts
              <div className="text-xs" style={{ color: 'var(--fourth)' }}>Success Rate: 93%</div>
            </div>
            <div className="rounded border p-3" style={{ borderColor: 'var(--fifth)' }}>
              Top Performing Advisors
              <div className="text-xs" style={{ color: 'var(--fourth)' }}>Ahmad Al-Mansoori · 4.9★</div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-3" style={{ color: 'var(--secondary)' }}>Marketplace</div>
          <div className="grid md:grid-cols-3 gap-4">
            {["Ahmad Al-Mansoori","Fatima Hassan","Sara Al-Ali"].map((name) => (
              <div key={name} className="rounded border p-4 flex items-center justify-between" style={{ borderColor: 'var(--fifth)', color: 'var(--secondary)' }}>
                <div>
                  <div className="font-medium">{name}</div>
                  <div className="text-xs" style={{ color: 'var(--fourth)' }}>Manufacturing, Energy</div>
                </div>
                <button className="h-9 px-3 rounded-lg border text-xs" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Book Session</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


