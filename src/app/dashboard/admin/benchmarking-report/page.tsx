export default function AdminBenchmarkingReportPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold" style={{ color: "var(--fourth)" }}>
        Benchmarking Report (Admin)
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <form
          className="rounded-xl border bg-white shadow-sm p-5 space-y-4"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--secondary)" }}
              >
                Region
              </label>
              <input
                className="w-full rounded border px-3 py-2"
                style={{ borderColor: "var(--fifth)" }}
                placeholder="e.g., Abu Dhabi"
              />
            </div>
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--secondary)" }}
              >
                Quarter
              </label>
              <select
                className="w-full rounded border px-3 py-2"
                style={{ borderColor: "var(--fifth)" }}
              >
                <option>Q1 2025</option>
                <option>Q2 2025</option>
                <option>Q3 2025</option>
                <option>Q4 2025</option>
              </select>
            </div>
          </div>
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: "var(--secondary)" }}
            >
              Upload Dataset (CSV)
            </label>
            <input
              type="file"
              className="w-full rounded border px-3 py-2"
              style={{ borderColor: "var(--fifth)" }}
            />
          </div>
          <div className="flex gap-3">
            <button
              className="h-10 px-4 rounded text-sm"
              style={{ backgroundColor: "var(--primary)", color: "#161326" }}
            >
              Generate Report
            </button>
            <button
              className="h-10 px-4 rounded border text-sm"
              style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
            >
              Export PDF
            </button>
          </div>
        </form>
        <div
          className="rounded-xl border bg-white shadow-sm p-5"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-medium mb-3"
            style={{ color: "var(--secondary)" }}
          >
            Preview
          </div>
          <div className="h-64 rounded bg-[color:var(--primary)]/10" />
        </div>
      </div>
    </section>
  );
}
