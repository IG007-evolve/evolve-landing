"use client";

export default function ScoreBox({ label, value }: { label: string; value: number }) {
  const color = value === 2
    ? "text-green-400 border-green-400/30 bg-green-400/10"
    : value === 1
    ? "text-yellow-300 border-yellow-300/30 bg-yellow-300/10"
    : "text-red-400 border-red-400/30 bg-red-400/10";

  return (
    <div className={`rounded-lg border p-4 ${color}`}>
      <div className="text-xs opacity-80">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}
