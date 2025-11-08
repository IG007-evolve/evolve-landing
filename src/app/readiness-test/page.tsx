// app/readiness-test/page.tsx
export default function ReadinessTestIntro() {
  const FORM_URL = "https://forms.gle/uoHs5FRNkXKDcaCP6";
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">The Readiness Test</h1>
        <p className="text-white/70">
          8–12 minutes. Measures clarity, reasoning, communication, and composure.
          You’ll get a result link by email right after submission.
        </p>

        <div className="rounded-xl border border-white/10 p-6 bg-white/[0.03]">
          <ol className="list-decimal ml-5 space-y-2 text-white/80">
            <li>Self-assessment (1–5) — 1 minute</li>
            <li>LC mini problem — Outline approach only (no code)</li>
            <li>System Design micro prompt — 6–10 sentences</li>
          </ol>
          <p className="text-sm text-white/50 mt-3">Scoring is strict. Vague answers default to low scores.</p>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          className="inline-block px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
        >
          Begin Readiness Test →
        </a>
      </div>
    </div>
  );
}
