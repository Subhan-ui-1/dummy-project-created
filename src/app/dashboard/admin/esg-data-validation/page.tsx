export default function AdminESGDataValidationPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>ESG Data Validation (Double Verification)</h2>
      <div className="rounded-xl border bg-white shadow-sm p-5" style={{ borderColor: 'var(--fifth)' }}>
        <div className="text-sm font-medium mb-3" style={{ color: 'var(--secondary)' }}>Pending Submissions</div>
        <table className="w-full text-sm" style={{ color: 'var(--secondary)' }}>
          <thead>
            <tr className="text-left">
              <th className="py-2">Company</th><th>Metric</th><th>Submitted</th><th>Evidence</th><th>Reviewer</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map((i) => (
              <tr key={i} className="border-t" style={{ borderColor: 'var(--fifth)' }}>
                <td className="py-2">Company {i}</td>
                <td>Scope 2 Energy Use</td>
                <td>18% reduction</td>
                <td><button className="text-xs underline">View</button></td>
                <td>Unassigned</td>
                <td className="space-x-2">
                  <button className="text-xs rounded border px-2 py-1" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Approve</button>
                  <button className="text-xs rounded border px-2 py-1" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Reject</button>
                  <button className="text-xs rounded border px-2 py-1" style={{ borderColor: 'var(--fifth)', color: 'var(--fourth)' }}>Assign</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


