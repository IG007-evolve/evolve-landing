"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SampleReport() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-center"
        >
          🧠 Sample Readiness Report
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/60 mt-3 max-w-2xl mx-auto"
        >
          A real example of what you receive after completing the test.
        </motion.p>

        {/* MAIN REPORT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl mx-auto max-w-4xl"
        >
          {/* Header */}
          <h3 className="text-2xl font-semibold mb-10">Interview Readiness Result</h3>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "LC_Understanding", v: 2, c: "bg-green-900/40" },
              { label: "LC_Structure", v: 1, c: "bg-yellow-900/40" },
              { label: "LC_Edge_Cases", v: 0, c: "bg-red-900/40" },
              { label: "LC_Reasoning", v: 1, c: "bg-yellow-900/40" },

              { label: "SD_Clarity", v: 2, c: "bg-green-900/40" },
              { label: "SD_Scalability", v: 2, c: "bg-green-900/40" },
              { label: "SD_Tradeoffs", v: 1, c: "bg-yellow-900/40" },
              { label: "SD_Composure", v: 1, c: "bg-yellow-900/40" },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-lg p-4 border border-white/10 ${item.c}`}
              >
                <div className="text-sm text-white/60">{item.label}</div>
                <div className="text-xl font-semibold mt-1">{item.v}</div>
              </div>
            ))}
          </div>

          {/* Total Score */}
          <div className="rounded-xl p-6 border border-white/10 bg-white/5 mt-10">
            <div className="text-white/60 text-sm">Total Score</div>
            <div className="text-3xl font-bold mt-1">10 / 16</div>
          </div>

          {/* Feedback box */}
          <div className="mt-10 p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-white/60">Profile</span>
              <span className="px-3 py-1 text-xs rounded-full bg-yellow-700/40 border border-yellow-500/40">
                Leveling
              </span>
            </div>

            <p className="leading-relaxed text-white/80 text-[15px]">
              Your understanding of the LIS problem is strong, particularly in your use
              of dynamic programming. However, your response lacks depth in edge cases,
              such as handling duplicates or negative numbers. Additionally,
              your reasoning could be more robust — explaining the substructure and
              transition clearly. Focus on practicing edge case identification and
              reasoning to enhance your problem-solving skills.
            </p>
          </div>
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
        </motion.div>

      </div>
    </section>
  );
}
