export default function GreenFinanceConnectorPage() {
  const ourScore = 68;
  const banks = [
    {
      name: "Abu Dhabi Islamic Bank",
      product: "Green SME Facility",
      requirement: 65,
      apr: "2.5% p.a.",
      amount: "Up to AED 5M",
    },
    {
      name: "Mashreq Bank",
      product: "Green Credit Line",
      requirement: 60,
      apr: "2.8% p.a.",
      amount: "Up to AED 3M",
    },
    {
      name: "Abu Dhabi Commercial",
      product: "ESG Excellence Fund",
      requirement: 75,
      apr: "2.7% p.a.",
      amount: "Up to AED 7M",
    },
  ];

  return (
    <section className="space-y-6">
      <div
        className="text-lg font-semibold"
        style={{ color: "var(--secondary)" }}
      >
        MODULE 7: Green Finance Connector
      </div>
      <div className="grid gap-6 lg:grid-cols-1">
        <div
          className="rounded-xl border bg-white shadow-sm p-5 space-y-4"
          style={{ borderColor: "white" }}
        >
          <div
            className="text-sm font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Your Green Finance Eligibility
          </div>
          <div
            className="grid sm:grid-cols-2 gap-3 text-sm"
            style={{ color: "var(--secondary)" }}
          >
            <div
              className="rounded border p-3 bg-gray-300 "
              style={{ borderColor: "var(--fifth)" }}
            >
              ESG Score: {ourScore}/100 — Silver Label
              <div className="text-xs" style={{ color: "var(--fourth)" }}>
                Qualified for Green Finance Programs
              </div>
            </div>
            <div
              className="rounded border p-3"
              style={{ borderColor: "var(--fifth)" }}
            >
              Finance Match Score
              <div className="text-xs" style={{ color: "var(--fourth)" }}>
                Top match: ADIB Green SME Facility (92%)
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            {banks.map((b) => {
              const eligible = ourScore >= b.requirement;
              return (
                <div
                  key={b.name}
                  className="rounded-lg border p-4 flex items-start justify-between gap-3"
                  style={{
                    borderColor: "var(--fifth)",
                    color: "var(--secondary)",
                  }}
                >
                  <div>
                    <div className="text-sm font-semibold">{b.name}</div>
                    <div className="text-xs" style={{ color: "var(--fourth)" }}>
                      {b.product} • {b.amount} • {b.apr}
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
                      <div
                        className="rounded border px-2 py-1"
                        style={{ borderColor: "var(--fifth)" }}
                      >
                        Required ESG ≥ {b.requirement}
                      </div>
                      <div
                        className="rounded border px-2 py-1"
                        style={{ borderColor: "var(--fifth)" }}
                      >
                        Your ESG: {ourScore}
                      </div>
                      <div
                        className={` rounded px-2 py-1 text-center ${
                          eligible ? "" : ""
                        }`}
                        style={{
                          backgroundColor: eligible ? "#DDEFE1" : "#F3F4F6",
                          // color: "var(--secondary)",
                        }}
                      >
                        {eligible ? "Eligible" : "Not Eligible"}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 min-w-[160px]">
                    <button
                      className="h-9 w-full rounded-lg border text-xs hover:bg-[color:var(--primary)]/10 disabled:opacity-50"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "var(--secondary)",
                        // borderColor: "var(--primary)",
                        // color: "var(--secondary)",
                      }}
                      disabled={!eligible}
                    >
                      Apply Now
                    </button>
                    <a
                      href="/members/dashboard/awareness/awareness/workshops"
                      className="flex items-center justify-center h-9 w-full rounded-lg border text-xs hover:bg-[color:var(--primary)]/10"
                      style={{
                        backgroundColor: "var(--secondary)",
                        // borderColor: "var(--fifth)",
                        color: "white",
                      }}
                    >
                      View Checklist
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="rounded-xl border bg-[#161326] text-white shadow-sm p-5"
          style={{ borderColor: "white" }}
        >
          <div
            className="text-sm font-medium mb-3"
            style={{ color: "var(--primary)" }}
          >
            Green Finance Application Process
          </div>
          <div
            className="grid sm:grid-cols-5 gap-3 text-xs"
            style={{ color: "var(--primary)" }}
          >
            {[
              "Share ESG Score",
              "Pre-Qualification",
              "Submit Documents",
              "Approval",
              "Funding",
            ].map((step, idx) => (
              <div
                key={step}
                className="rounded border p-3"
                style={{ borderColor: "var(--primary)" }}
              >
                <div className="font-medium text-sm">
                  {idx + 1}. {step}
                </div>
                <div className="mt-1" style={{ color: "white" }}>
                  Secure transfer • 10 business day SLA
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs" style={{ color: "white" }}>
            Your ESG data will only be shared with selected institutions. All
            transfers comply with UAE data protection regulations.
          </div>
        </div>
      </div>
    </section>
  );
}
