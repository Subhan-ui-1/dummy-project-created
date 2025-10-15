import AwarenessTabs from "../Tabs";

export default function MemberAwarenessWorkshopsPage() {
  return (
    <section className="space-y-6">
      <AwarenessTabs />
      <h2 className="text-xl font-semibold" style={{ color: "var(--fourth)" }}>
        Awareness: Workshops
      </h2>
      <p className="text-sm" style={{ color: "var(--secondary)" }}>
        Register for upcoming workshops hosted by the chamber.
      </p>
      <ul className="space-y-2 text-sm" style={{ color: "var(--secondary)" }}>
        {["Scope 3 Data Collection", "GRI Reporting Essentials"].map((t) => (
          <li
            key={t}
            className="rounded border p-3 flex items-center justify-between"
            style={{ borderColor: "var(--primary)",
              color: "white",
              backgroundColor: "var(--secondary)",
            }}
          >
            <span>{t}</span>
            <button
              className="text-xs rounded border px-2 py-1"
              style={{
                borderColor: "var(--primary)",
                color: "var(--secondary)",
                backgroundColor: "var(--primary)",
              }}
            >
              Register
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
