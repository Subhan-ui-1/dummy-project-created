import Link from "next/link";

export default function CertificateBadgePage() {
  return (
    <section className="space-y-6">
      {/* Brand header */}
      <div
        className="rounded-xl border bg-white shadow-sm p-5 flex items-center justify-between"
        style={{ borderColor: "var(--fifth)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: "var(--fourth)" }}
          >
            A
          </div>
          <div>
            <div
              className="text-sm font-semibold"
              style={{ color: "var(--secondary)" }}
            >
              ABC Manufacturing LLC
            </div>
            <div className="text-[11px]" style={{ color: "var(--fourth)" }}>
              Mega Construction Division
            </div>
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full"
          style={{ backgroundColor: "#EEF2FF", color: "var(--secondary)" }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          ></span>
          Silver ESG Label — Active
        </div>
      </div>

      {/* Announcement banner */}
      <div
        className="rounded-xl border bg-[color:var(--primary)]/12 p-4 text-sm flex items-center justify-between"
        style={{ borderColor: "var(--fifth)", color: "var(--secondary)" }}
      >
        <div>
          <span className="font-medium">Congratulations!</span> Your
          organization has been awarded the{" "}
          <span className="font-semibold">Silver ESG Label</span>.
        </div>
        <div
          className="hidden sm:block text-[11px]"
          style={{ color: "var(--fourth)" }}
        >
          Issued Oct 2025 • Valid until Oct 2027
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Certificate panel */}
        <div
          className="rounded-2xl border bg-white shadow-sm p-6"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--fourth)" }}
          >
            Official ESG Silver Certificate
          </div>

          <div
            className="relative mx-auto max-w-[760px] rounded-xl border bg-white p-8"
            style={{ borderColor: "var(--fifth)" }}
          >
            {/* Watermark */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5 select-none text-6xl font-extrabold"
              style={{ color: "var(--fourth)" }}
            >
              ADCCI
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
                  style={{ backgroundColor: "var(--fourth)" }}
                >
                  A
                </div>
                <div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: "var(--secondary)" }}
                  >
                    ABC Manufacturing LLC
                  </div>
                  <div className="text-xs" style={{ color: "var(--fourth)" }}>
                    United Arab Emirates
                  </div>
                </div>
              </div>
              <div
                className="text-xs px-3 py-1 rounded"
                style={{ backgroundColor: "#DDEFE1", color: "#161326" }}
              >
                Silver Label
              </div>
            </div>

            <div className="mt-6 text-sm" style={{ color: "var(--secondary)" }}>
              This certifies that the above organization has achieved the{" "}
              <strong>ESG Silver Label</strong> by demonstrating best practices
              across environmental, social, and governance pillars in accordance
              with the chamber’s recognition framework.
            </div>

            <div
              className="mt-6 grid sm:grid-cols-2 gap-4 text-xs"
              style={{ color: "var(--fourth)" }}
            >
              <div>
                Certificate ID:{" "}
                <span className="font-medium">ADCCI-ESG-SLV-2025-00123</span>
              </div>
              <div>
                Overall Score: <span className="font-medium">68/100</span>
              </div>
              <div>
                Issued: <span className="font-medium">October 2025</span>
              </div>
              <div>
                Valid Until: <span className="font-medium">October 2027</span>
              </div>
            </div>

            {/* Signature row */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6 items-end">
              <div className="col-span-2">
                <div
                  className="h-24 rounded-lg border flex items-center justify-center"
                  style={{ borderColor: "var(--fifth)" }}
                >
                  <span className="text-xs" style={{ color: "var(--fourth)" }}>
                    QR Code / Verification watermark
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-10"></div>
                <div
                  className="mt-2 border-t pt-1 text-xs"
                  style={{
                    borderColor: "var(--fifth)",
                    color: "var(--secondary)",
                  }}
                >
                  Authorized Signatory
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/10"
              style={{
                borderColor: "var(--primary)",
                color: "var(--secondary)",
              }}
            >
              Download PDF
            </button>
            <button
              className="h-10 px-4 rounded-lg border text-sm hover:bg-[color:var(--primary)]/10"
              style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
            >
              Print Certificate
            </button>
            <Link
              href="/members/dashboard/esg-assessment/results"
              className="h-10 px-4 rounded-lg text-sm shadow-sm flex items-center justify-center hover:opacity-90"
              style={{ backgroundColor: "var(--primary)", color: "#161326" }}
            >
              View Results
            </Link>
          </div>
        </div>

        {/* Badge + actions */}
        <aside
          className="rounded-2xl border bg-white shadow-sm p-6 h-fit"
          style={{ borderColor: "var(--fifth)" }}
        >
          <div
            className="text-sm font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Your Digital Badge
          </div>
          <div
            className="mt-4 mx-auto h-32 w-32 rounded-full flex items-center justify-center text-center text-xs shadow-inner"
            style={{
              backgroundColor: "rgba(147,147,158,0.25)",
              color: "var(--secondary)",
            }}
          >
            ADCCI\nESG SILVER\n2025
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              className="h-9 rounded-lg border text-xs hover:bg-[color:var(--primary)]/10"
              style={{
                borderColor: "var(--primary)",
                color: "var(--secondary)",
              }}
            >
              Download PNG
            </button>
            <button
              className="h-9 rounded-lg border text-xs hover:bg-[color:var(--primary)]/10"
              style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
            >
              Download SVG
            </button>
            <button
              className="h-9 rounded-lg border text-xs hover:bg-[color:var(--primary)]/10"
              style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
            >
              Email
            </button>
            <button
              className="h-9 rounded-lg border text-xs hover:bg-[color:var(--primary)]/10"
              style={{ borderColor: "var(--fifth)", color: "var(--fourth)" }}
            >
              Share
            </button>
          </div>

          <div
            className="mt-6 rounded-lg border p-3 text-xs"
            style={{ borderColor: "var(--fifth)", color: "var(--secondary)" }}
          >
            <div className="font-medium mb-1">Badge usage guidelines</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use on websites, proposals, and bids</li>
              <li>Do not alter colors; keep aspect ratio</li>
              <li>Link to verification page/QR</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
