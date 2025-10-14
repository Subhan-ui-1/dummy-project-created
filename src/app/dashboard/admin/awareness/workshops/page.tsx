export default function AdminAwarenessWorkshopsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>Awareness: Workshops (Admin)</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="rounded-xl border bg-white shadow-sm p-5 space-y-4" style={{ borderColor: 'var(--fifth)' }}>
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Workshop title" />
            <input className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Date & time" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Location / Online link" />
            <input className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Capacity" />
          </div>
          <textarea className="rounded border px-3 py-2" rows={4} style={{ borderColor: 'var(--fifth)' }} placeholder="Description" />
          <button className="h-10 px-4 rounded text-sm" style={{ backgroundColor: 'var(--primary)', color: '#161326' }}>Announce Workshop</button>
        </form>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-3" style={{ color: 'var(--secondary)' }}>Upcoming Workshops</div>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--secondary)' }}>
            {["Scope 3 Data Collection", "GRI Reporting Essentials"].map((t) => (
              <li key={t} className="rounded border p-3 flex items-center justify-between" style={{ borderColor: 'var(--fifth)' }}>
                <span>{t}</span>
                <div className="space-x-2 text-xs"><button className="underline">Edit</button><button className="underline">Cancel</button></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


