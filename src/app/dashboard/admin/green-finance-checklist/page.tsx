export default function AdminGreenFinanceChecklistPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: "var(--fourth)" }}>
        Green Finance Checklist
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <form
          className="rounded-xl border bg-white shadow-sm p-5 space-y-4"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              className="rounded border px-3 py-2"
              style={{ borderColor: "var(--fifth)" }}
              placeholder="Checklist item"
            />
            <select
              className="rounded border px-3 py-2"
              style={{ borderColor: "var(--fifth)" }}
            >
              <option>Eligibility</option>
              <option>Documentation</option>
              <option>Risk</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              className="rounded border px-3 py-2"
              style={{ borderColor: "var(--fifth)" }}
              placeholder="Acceptance criteria"
            />
            <input
              className="rounded border px-3 py-2"
              style={{ borderColor: "var(--fifth)" }}
              placeholder="Evidence required"
            />
          </div>
          <button
            className="h-10 px-4 rounded text-sm"
            style={{ backgroundColor: "var(--primary)", color: "#161326" }}
          >
            Add Item
          </button>
        </form>
        <div
          className="rounded-xl border bg-white shadow-sm p-5"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-medium mb-3"
            style={{ color: "var(--secondary)" }}
          >
            Checklist Items
          </div>
          <ul
            className="space-y-2 text-sm"
            style={{ color: "var(--secondary)" }}
          >
            {[
              "ESG score ≥ 65",
              "Valid trade license",
              "Audited financials",
            ].map((i) => (
              <li
                key={i}
                className="rounded border p-3 flex items-center justify-between"
                style={{ borderColor: "var(--fifth)" }}
              >
                <span>{i}</span>
                <div className="space-x-2 text-xs">
                  <button className="underline">Edit</button>
                  <button className="underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
