export default function RecognitionCertificationPage() {
  return (
    <section className="space-y-6">
      <div
        className="text-lg font-semibold"
        style={{ color: "var(--secondary)" }}
      >
        MODULE 3: Recognition & Certification Engine
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: "Bronze", desc: "Entry level ESG commitment" },
          { title: "Silver", desc: "Advanced ESG practices" },
          { title: "Gold", desc: "ESG excellence & leadership" },
        ].map((t) => {
          const bg =
            t.title === "Gold"
              ? "#F2C94C"
              : t.title === "Silver"
              ? "#BFC7D5"
              : "#D6A27D";
          return (
            <div
              key={t.title}
              className="rounded-xl border shadow-sm p-5"
              style={{ borderColor: "var(--fifth)", backgroundColor: bg }}
            >
              <div
                className="text-xl font-bold mb-2"
                style={{ color: "#161326" }}
              >
                {t.title}
              </div>
              <div className="text-sm" style={{ color: "#161326" }}>
                {t.desc}
              </div>
              <div className="mt-3 text-xs" style={{ color: "#161326" }}>
                Valid for 2 years • Benefits vary by tier
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="rounded-xl border shadow-sm p-5 bg-secondary text-white"
        style={{ borderColor: "var(--primary)" }}
      >
        <div className="text-sm font-medium mb-3">
          Application & Certification Process
        </div>
        <div className="grid sm:grid-cols-6 gap-3 text-sm">
          {[
            "Complete Assessment",
            "Achieve Minimum Score",
            "Submit Application",
            "Upload Evidence",
            "Chamber Review",
            "Certificate Issued",
          ].map((s, idx) => (
            <div
              key={s}
              className="rounded border p-3"
              style={{ borderColor: "var(--primary)" }}
            >
              <div className="font-medium">
                {idx + 1}. {s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
