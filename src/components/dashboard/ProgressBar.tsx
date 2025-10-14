type ProgressBarProps = {
  value: number; // 0-100
  label?: string;
};

export default function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div>
      {label ? <div className="mb-1 text-xs" style={{ color: "var(--fourth)" }}>{label}</div> : null}
      <div className="h-2 w-full rounded-full" style={{ backgroundColor: "rgba(147,147,158,0.35)" }}>
        <div
          className="h-2 rounded-full"
          style={{ width: `${clamped}%`, backgroundColor: "var(--primary)" }}
        />
      </div>
    </div>
  );
}


