type KPIStatProps = {
  label: string;
  value: string | number;
  sublabel?: string;
};

export default function KPIStat({ label, value, sublabel }: KPIStatProps) {
  return (
    <div className="rounded-lg p-4 border" style={{ borderColor: "var(--fifth)", backgroundColor: "rgba(192,250,160,0.06)" }}>
      <div className="text-xs uppercase tracking-wide" style={{ color: "var(--fifth)" }}>{label}</div>
      <div className="mt-2 text-2xl font-bold" style={{ color: "var(--secondary)" }}>{value}</div>
      {sublabel ? (
        <div className="mt-1 text-xs" style={{ color: "var(--fourth)" }}>{sublabel}</div>
      ) : null}
    </div>
  );
}


