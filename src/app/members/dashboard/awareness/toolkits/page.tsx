import AwarenessTabs from "../Tabs";

export default function MemberAwarenessToolkitsPage() {
  return (
    <section className="space-y-6">
      <AwarenessTabs />
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>Awareness: Toolkits</h2>
      <p className="text-sm" style={{ color: 'var(--secondary)' }}>Toolkits curated by the chamber. View-only for members.</p>
      <ul className="space-y-2 text-sm" style={{ color: 'var(--secondary)' }}>
        {["Carbon Accounting Starter Kit", "Supplier Engagement Pack"].map((t) => (
          <li key={t} className="rounded border p-3 flex items-center justify-between" style={{ borderColor: 'var(--fifth)' }}>
            <span>{t}</span>
            <button className="text-xs rounded border px-2 py-1" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>View</button>
          </li>
        ))}
      </ul>
    </section>
  );
}


