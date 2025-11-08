import React from "react";
import CopyButton from "../components/CopyButton";
import ProfileBadge from "../components/ProfileBadge"; 
import ScoreBox from "../components/ScoreBox"; 

const GS_WEB_APP =
    "https://script.google.com/macros/s/AKfycbwZxC6hoqkj5LouCrJoWQMMAshA6QcHqIOGCtJflVtO6pAaAsaG0nISYzoB4vUe1_EB/exec";

export default async function ResultPage({
    searchParams,
}: {
    searchParams: { id?: string; email?: string };
}) {
    // Unwrap searchParams safely (Next.js 16 change)
    const awaited = await searchParams;
    const id = awaited?.id?.trim();
    const email = awaited?.email?.trim();

    let data: any = null;

    if (id || email) {
        const param = id ? `id=${id}` : `email=${encodeURIComponent(email || "")}`;
        const res = await fetch(`${GS_WEB_APP}?${param}`, { cache: "no-store" });
        data = await res.json();
    }

    const hasData = data && !data.error;

    // Build shareable result link
    const resultUrl = data?.Result_ID
        ? `https://evolve-landing-ig.vercel.app/readiness-result?id=${data["Result_ID"]}`
        : "";

    return (
        <div className="min-h-screen bg-black text-white px-6 md:px-10 py-16">
            <div className="max-w-3xl mx-auto space-y-10">
                <h1 className="text-4xl font-semibold tracking-tight">
                    Interview Readiness Result
                </h1>

                {!hasData ? (
                    <div className="space-y-6">
                        <p className="text-white/60">
                            Enter your Result ID or email to view your assessment.
                        </p>

                        <form
                            className="flex flex-col sm:flex-row gap-3"
                            action="/readiness-result"
                            method="get"
                        >
                            <input
                                name="id"
                                placeholder="Result ID"
                                className="px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white flex-1"
                            />
                            <span className="text-white/40 text-center sm:text-left">or</span>
                            <input
                                name="email"
                                placeholder="Email used in the test"
                                className="px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white flex-1"
                            />
                            <button className="px-5 py-3 rounded-md bg-white text-black font-medium">
                                View
                            </button>
                        </form>

                        <p className="text-sm text-white/50">
                            Tip: You also received your result link via email.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Score Grid */}
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
    <ScoreBox key={label} label={label} value={Number(val || 0)} />
  ))}
</div>

                        {/* Total Score */}
                        <div className="rounded-xl border border-white/10 p-5 bg-white/[0.04]">
                            <div className="text-sm text-white/60">Total Score</div>
                            <div className="text-4xl font-semibold">
                                {String(data["Total_Score"] ?? "—")} / 16
                            </div>
                        </div>

                        {/* Profile + Feedback */}
                        <div className="rounded-xl border border-white/10 p-6 bg-white/[0.05] space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-white/60">Profile</div>
                                <ProfileBadge profile={String(data["Readiness_Profile"] ?? "—")} />
                            </div>

                            {data["Feedback"] && (
                                <p className="text-white/80 leading-relaxed text-[15.5px]">
                                    {String(data["Feedback"])}
                                </p>
                            )}
                        </div>

                        <div className="rounded-xl border border-white/10 p-6 bg-white/[0.02] text-center space-y-4">
                            <p className="text-white/70 text-[15px]">
                                Want a free personalized improvement plan based on your score?
                            </p>
                            <a
                                href="https://evolve-landing-ig.vercel.app/"
                                className="inline-block px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
                            >
                                Get My Plan
                            </a>
                        </div>



                        {/* Result ID + Copy Link */}
                        <div className="text-sm text-white/60 flex items-center gap-3">
                            <span>Result ID:</span>
                            <span className="font-mono">{data["Result_ID"]}</span>
                            {resultUrl && <CopyButton text={resultUrl} />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
