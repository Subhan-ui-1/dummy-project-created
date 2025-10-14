export default function AdminAwarenessToolkitsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>Awareness: Toolkits (Admin)</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="rounded-xl border bg-white shadow-sm p-5 space-y-4" style={{ borderColor: 'var(--fifth)' }}>
          <input className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Toolkit name" />
          <textarea className="rounded border px-3 py-2" rows={4} style={{ borderColor: 'var(--fifth)' }} placeholder="Description" />
          <button className="h-10 px-4 rounded text-sm" style={{ backgroundColor: 'var(--primary)', color: '#161326' }}>Add Toolkit</button>
        </form>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-3" style={{ color: 'var(--secondary)' }}>Existing Toolkits</div>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--secondary)' }}>
            {["Carbon Accounting Starter Kit", "Supplier Engagement Pack"].map((t) => (
              <li key={t} className="rounded border p-3 flex items-center justify-between" style={{ borderColor: 'var(--fifth)' }}>
                <span>{t}</span>
                <div className="space-x-2 text-xs"><button className="underline">Edit</button><button className="underline">Remove</button></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


