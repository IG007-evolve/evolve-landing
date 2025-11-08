// app/readiness-test/page.tsx
import Link from "next/link";

export default function ReadinessTestIntro() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center px-6 md:px-10">
      <div className="max-w-3xl mx-auto py-20">

        <h1 className="text-4xl font-semibold tracking-tight mb-6">
          The Readiness Test
        </h1>

        <p className="text-white/70 text-lg leading-relaxed mb-10">
          This short assessment measures your clarity of thought, problem reasoning,
          communication, and system design maturity. You'll receive a personalized
          score and improvement roadmap immediately after submission.
        </p>

        <div className="border border-white/10 bg-white/[0.03] rounded-xl p-8 space-y-5 text-white/90">
          <div className="space-y-2">
            <div className="text-base font-medium">What’s inside:</div>
            <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
              <li>• Self-assessment (1–5) — 1 minute</li>
              <li>• LC mini problem — Explain approach (no code)</li>
              <li>• System design micro prompt — 6–10 sentences</li>
            </ul>
          </div>

          <div className="pt-3 border-t border-white/5 text-sm text-amber-400/90">
            Scoring is strict. Vague or generic answers typically receive low scores.
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="https://forms.gle/ujjrNM6YPRUPagzZ8"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black text-base font-medium hover:bg-white/90 transition"
          >
            Begin Readiness Test →
          </Link>
        </div>

      </div>
    </div>
  );
}
