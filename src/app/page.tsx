"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SampleReport from "./components/SampleReport";
import {
  TriangleAlert,
  ChartNoAxesColumnIncreasing,
  Brain
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const fadeInSlow = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

const staggerBars = {
  hidden: { opacity: 0, y: 25 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 }
  })
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAV */}
      <header className="flex justify-between items-center py-6 px-6 md:px-10 border-b border-white/10">
        <div className="text-xl font-semibold">eVolve</div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#why" className="hover:text-white transition">Why eVolve</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#sample" className="hover:text-white transition">Sample Report</a>
          <a href="#join" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
            Join Now
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <div className="flex flex-col items-start gap-4 px-6 py-4 border-b border-white/10 bg-black">
          <a href="#why" onClick={() => setMenuOpen(false)}>Why eVolve</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#sample" onClick={() => setMenuOpen(false)}>Sample Report</a>
          <a href="#join" className="mt-2 px-4 py-2 rounded-md bg-white text-black font-medium">Join</a>
        </div>
      )}

      {/* HERO */}
      <section className="pt-20 pb-14 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* HERO TEXT */}
        <div>
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
          >
            Know why you’re{" "}
            <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              not clearing interviews
            </span>{" "}
            — in 7 minutes.
          </motion.h1>

          <motion.p
            variants={fadeInSlow}
            initial="hidden"
            animate="show"
            className="text-white/60 mt-5 max-w-lg"
          >
            A structured diagnostic evaluating clarity, structure, tradeoffs, and composure — the real interview killers.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="mt-6 flex gap-4"
          >
            <a href="/readiness-test" className="px-6 py-3 rounded-md bg-white text-black font-medium">
              Take the Readiness Test →
            </a>

            <a href="/sample-plan" className="px-5 py-3 rounded-md border border-white/10 text-white/80">
              View Sample Plan →
            </a>
          </motion.div>
        </div>

        {/* HERO BARS VISUAL (Hydration-safe + animated + bigger) */}
        <motion.div
          variants={fadeInSlow}
          initial="hidden"
          animate="show"
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-lg h-[320px] rounded-2xl border border-white/10 p-6 flex items-end gap-3 bg-gradient-to-b from-white/5 to-white/0">
            {[28, 40, 55, 67, 78, 92].map((h, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={staggerBars}
                initial="hidden"
                animate="show"
                className="rounded-md bg-gradient-to-t from-white/60 to-white/10"
                style={{ width: "16%", height: `${h}%` }}
              />
            ))}
          </div>
        </motion.div>

      </section>

      {/* WHY SECTION */}
      <section id="why" className="py-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" className="text-3xl font-semibold">
          Why Most Engineers Struggle
        </motion.h2>

        <motion.p variants={fadeInSlow} initial="hidden" whileInView="show" className="text-white/60 mt-3">
          It’s rarely DSA. It’s not system design patterns. It’s structure, clarity, and pressure control.
        </motion.p>

        <div className="mt-14 divide-y divide-white/10 rounded-xl overflow-hidden">
          {[
            { icon: TriangleAlert, title: "No Clear Structure", text: "Prep feels scattered and unfocused." },
            { icon: ChartNoAxesColumnIncreasing, title: "No Progress Tracking", text: "You improve but can’t measure it." },
            { icon: Brain, title: "Performance Anxiety", text: "Freeze or ramble under pressure." }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              className="py-10 px-6 flex gap-4 mx-auto max-w-3xl"
            >
              <item.icon className="h-6 w-6 text-white/60 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-white/60 mt-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SAMPLE REPORT */}
      <section id="sample" className="py-20 px-6 max-w-6xl mx-auto">
        <SampleReport />
      </section>

      {/* GROWTH DASHBOARD SECTION */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" className="text-3xl font-semibold">
            Your Growth — Visualized
          </motion.h2>

          <motion.p variants={fadeInSlow} initial="hidden" whileInView="show" className="text-white/60 mt-3 max-w-xl mx-auto">
            Track clarity, structure, decision-making, communication and more with a clean weekly dashboard.
          </motion.p>

          {/* CTA above image */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" className="mt-10">
            <a href="/sample-plan" className="px-6 py-3 rounded-md bg-white text-black font-medium">
              View Sample Growth Plan →
            </a>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="show" className="mt-10 flex justify-center">
            <img
              src="/images/growth-dashboard.png"
              alt="Growth dashboard"
              className="w-full max-w-3xl rounded-xl border border-white/10 shadow-lg"
            />
          </motion.div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section id="join" className="py-20 text-center px-6">
        <h3 className="text-2xl font-semibold">Ready to train with clarity?</h3>
        <p className="text-white/60 mt-3">Join early access and build real interview confidence.</p>

        <a
          href="https://forms.gle/XuBtCQ5F3dRDQJJx8"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 rounded-md bg-white text-black font-medium"
        >
          Join the Waitlist →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-white/30 py-10 border-t border-white/10">
        © 2025 eVolve — Built by engineers, for engineers.
      </footer>

    </main>
  );
}
