"use client";

import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex justify-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Your Personalized Interview Upgrade Plan
        </h1>

        <p className="text-white/70 leading-relaxed">
          Based on your readiness score, we’ll build you a tailored improvement
          plan focusing on clarity, problem solving, communication, and system
          design reasoning.
          <br /><br />
          This is *not* generic LC grinding. You’ll learn how to think and talk
          like someone who gets hired.
        </p>

        <div className="rounded-xl border border-white/15 bg-white/[0.04] p-5">
          <p className="text-sm text-white/60">
            What you’ll receive:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-white/80">
            <li>Personalized improvement roadmap</li>
            <li>Structured interview explanation frameworks</li>
            <li>Guided practice exercises</li>
            <li>Weekly skill checkpoints to measure progress</li>
          </ul>
        </div>

        <Link
          href="https://forms.gle/pZZXefiSgKFKxHDVA" // <-- your join form link here
          className="inline-block bg-white text-black px-5 py-3 rounded-md text-lg font-medium hover:bg-white/90 transition"
        >
          Join the Waitlist →
        </Link>

        <p className="text-sm text-white/40">
          This is a small private group. We onboard people in batches.
        </p>
      </div>
    </div>
  );
}
