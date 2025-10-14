type TrendBadgeProps = {
  changePct: number; // negative for down, positive for up
};

export default function TrendBadge({ changePct }: TrendBadgeProps) {
  const isUp = changePct >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs ${isUp ? "" : ""}`}
      style={{
        backgroundColor: isUp ? "rgba(192,250,160,0.2)" : "rgba(72,71,103,0.15)",
        color: isUp ? "var(--secondary)" : "var(--fourth)",
      }}
    >
      {isUp ? "▲" : "▼"}
      {Math.abs(changePct).toFixed(1)}%
    </span>
  );
}


