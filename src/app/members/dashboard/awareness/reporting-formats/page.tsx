import AwarenessTabs from "../Tabs";

export default function MemberAwarenessReportingFormatsPage() {
  return (
    <section className="space-y-6">
      <AwarenessTabs />
      <h2 className="text-xl font-semibold" style={{ color: 'var(--fourth)' }}>Awareness: Reporting Formats</h2>
      <p className="text-sm" style={{ color: 'var(--secondary)' }}>Browse available ESG reporting formats provided by the chamber.</p>
      <ul className="space-y-2 text-sm" style={{ color: 'var(--secondary)' }}>
        {["GRI 2021", "ISSB S1/S2", "TCFD"]?.map((t) => (
          <li key={t} className="rounded border p-3 flex items-center justify-between" style={{ borderColor: 'var(--fifth)' }}>
            <span>{t}</span>
            <button className="text-xs rounded border px-2 py-1" style={{ borderColor: 'var(--primary)', color: 'var(--secondary)' }}>Download</button>
          </li>
        ))}
      </ul>
    </section>
  );
}


