// app/readiness-result/page.tsx
import React from "react";

const GS_WEB_APP = "https://script.google.com/macros/s/AKfycbwZxC6hoqkj5LouCrJoWQMMAshA6QcHqIOGCtJflVtO6pAaAsaG0nISYzoB4vUe1_EB/exec";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { id?: string; email?: string };
}) {
  const params = new URLSearchParams();
  if (searchParams?.id) params.set("id", searchParams.id);
  else if (searchParams?.email) params.set("email", searchParams.email || "");

  let data: any = null;
  if (params.toString()) {
    const res = await fetch(`${GS_WEB_APP}?${params.toString()}`, { cache: "no-store" });
    data = await res.json();
  }

  const hasData = data && !data.error;

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold">Your Readiness Result</h1>
        {!hasData ? (
          <div className="mt-8 space-y-4">
            <p className="text-white/70">Provide your Result ID or email to view your latest score.</p>
            <form className="flex flex-col sm:flex-row gap-3" action="/readiness-result" method="get">
              <input
                name="id"
                placeholder="Result ID"
                className="px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white flex-1"
              />
              <span className="text-white/40">or</span>
              <input
                name="email"
                placeholder="Email used in the test"
                className="px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white flex-1"
              />
              <button className="px-5 py-3 rounded-md bg-white text-black font-medium">View</button>
            </form>
            <p className="text-sm text-white/50">Tip: We also emailed you a direct link after your submission.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["LC_Understanding", data["LC_Understanding"]],
                ["LC_Structure", data["LC_Structure"]],
                ["LC_Edge_Cases", data["LC_Edge_Cases"]],
                ["LC_Reasoning", data["LC_Reasoning"]],
                ["SD_Clarity", data["SD_Clarity"]],
                ["SD_Scalability", data["SD_Scalability"]],
                ["SD_Tradeoffs", data["SD_Tradeoffs"]],
                ["SD_Composure", data["SD_Composure"]],
              ].map(([label, val]) => (
                <div key={label} className="rounded-lg border border-white/10 p-4 bg-white/[0.03]">
                  <div className="text-xs text-white/50">{label}</div>
                  <div className="text-2xl font-semibold mt-1">{String(val ?? "—")}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
              <div className="text-sm text-white/60">Total Score</div>
              <div className="text-3xl font-semibold">{String(data["Total_Score"] ?? "—")} / 16</div>
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
              <div className="text-sm text-white/60">Profile</div>
              <div className="text-2xl font-semibold">{String(data["Readiness_Profile"] ?? "—")}</div>
              {data["Feedback"] && (
                <p className="text-white/70 mt-3">{String(data["Feedback"])}</p>
              )}
            </div>

            <div className="text-sm text-white/50">
              Result ID: <span className="font-mono">{String(data["Result_ID"] || "")}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
