export default function AdminAwarenessTemplatesPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>Awareness: Templates (Admin)</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="rounded-xl border bg-white shadow-sm p-5 space-y-4" style={{ borderColor: 'var(--fifth)' }}>
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} placeholder="Template name" />
            <select className="rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }}>
              <option>Checklist</option>
              <option>Policy</option>
              <option>Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Upload file</label>
            <input type="file" className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} />
          </div>
          <button className="h-10 px-4 rounded text-sm" style={{ backgroundColor: 'var(--primary)', color: '#161326' }}>Add Template</button>
        </form>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-3" style={{ color: 'var(--secondary)' }}>Existing Templates</div>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--secondary)' }}>
            {["Diversity Policy", "ESG Assessment Template", "Supplier Code of Conduct"].map((t) => (
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


