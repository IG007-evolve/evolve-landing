"use client";

import Image from "next/image";

export default function SamplePlan() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-20">
      <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
        🚀 Personalized Growth Plan
      </h2>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-xl">
        <div className="w-full flex justify-center">
          <Image
            src="/images/sample-growth-plan.png"  // ⬅️ update name if needed
            alt="Sample Personalized Plan"
            width={1100}
            height={750}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>

        <p className="text-center text-white/60 mt-4 text-sm">
          Get actionable weekly steps tailored to your weaknesses.
        </p>
      </div>
    </div>
  );
}
