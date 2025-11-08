"use client";

export default function ProfileBadge({ profile }: { profile: string }) {
  const styles: Record<string, string> = {
    Ready: "bg-green-500/20 text-green-300 border-green-400/30",
    Leveling: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
    "Not Ready": "bg-red-500/20 text-red-300 border-red-400/30",
  };

  const style = styles[profile] || "bg-white/10 text-white/60 border-white/20";

  return (
    <span
      className={`px-4 py-1.5 rounded-full text-sm font-medium border ${style} tracking-wide`}
    >
      {profile}
    </span>
  );
}
