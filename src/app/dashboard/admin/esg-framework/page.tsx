export default function AdminESGFrameworkPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>ESG Framework Creation</h2>
      <form className="grid gap-4 max-w-3xl">
        <div>
          <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Framework Name</label>
          <input className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="e.g., ADCCI ESG 2025" />
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Description</label>
          <textarea className="w-full rounded border px-3 py-2" rows={4} style={{ borderColor: 'var(--fifth)' }} placeholder="Short overview" />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Environmental Weight %</label>
            <input type="number" className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} defaultValue={40} />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Social Weight %</label>
            <input type="number" className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} defaultValue={30} />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Governance Weight %</label>
            <input type="number" className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} defaultValue={30} />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Add Metric</label>
          <div className="grid sm:grid-cols-4 gap-3">
            <input className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Metric name" />
            <select className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }}>
              <option>Environmental</option>
              <option>Social</option>
              <option>Governance</option>
            </select>
            <input type="number" className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Weight %" />
            <button className="rounded border px-3 py-2" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Add</button>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="h-10 px-4 rounded text-sm" style={{ backgroundColor: 'var(--primary)', color: '#161326' }}>Save Framework</button>
          <button className="h-10 px-4 rounded border text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Publish</button>
        </div>
      </form>
    </section>
  );
}


