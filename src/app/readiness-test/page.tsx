export default function ReadinessTestPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">
        The Interview Readiness Test
      </h1>
      <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
        This 6-minute diagnostic simulates how you actually think and communicate in real interviews.
        You’ll answer scenario-based questions designed to test clarity, reasoning, and tradeoff communication — not just DSA.
      </p>

      <ul className="text-white/60 max-w-md mx-auto text-left mb-10 space-y-2">
        <li>✅ Tests clarity, reasoning, and composure under pressure</li>
        <li>✅ Get a personalized readiness score (Not Ready / Leveling / Ready)</li>
        <li>✅ Instantly receive your full AI-generated report via email</li>
      </ul>

      <a
        href="https://forms.gle/uoHs5FRNkXKDcaCP6"
        target="_blank"
        className="inline-block px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
      >
        Start the Test →
      </a>

      <p className="text-xs text-white/40 mt-4">Takes ~6 minutes • No login required</p>
    </div>
  );
}
