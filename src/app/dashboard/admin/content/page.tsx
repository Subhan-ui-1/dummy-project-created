export default function AdminContentPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>Content Management</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="rounded-xl border bg-white shadow-sm p-5 space-y-4" style={{ borderColor: 'var(--fifth)' }}>
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Title</label>
            <input className="w-full rounded border px-3 py-2" style={{ borderColor: 'var(--fifth)' }} />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Slug</label>
            <input className="w-full rounded border px-3 py-2" placeholder="/path" style={{ borderColor: 'var(--fifth)' }} />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: 'var(--secondary)' }}>Body</label>
            <textarea className="w-full rounded border px-3 py-2" rows={6} style={{ borderColor: 'var(--fifth)' }} />
          </div>
          <div className="flex gap-3">
            <button className="h-10 px-4 rounded text-sm" style={{ backgroundColor: 'var(--primary)', color: '#161326' }}>Save</button>
            <button className="h-10 px-4 rounded border text-sm" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Publish</button>
          </div>
        </form>
        <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
          <div className="text-sm font-medium mb-3" style={{ color: 'var(--secondary)' }}>Content Library</div>
          <table className="w-full text-sm" style={{ color: 'var(--secondary)' }}>
            <thead>
              <tr className="text-left">
                <th className="py-2">Title</th><th>Slug</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3].map((i) => (
                <tr key={i} className="border-t" style={{ borderColor: 'var(--fifth)' }}>
                  <td className="py-2">Sample Article {i}</td>
                  <td>/sample-{i}</td>
                  <td>Draft</td>
                  <td className="space-x-2"><button className="text-xs underline">Edit</button><button className="text-xs underline">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


