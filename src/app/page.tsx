"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TriangleAlert, ChartNoAxesColumnIncreasing, Brain } from "lucide-react";

const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-24 ${className}`}>
    {children}
  </section>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <header className="flex justify-between items-center py-6 px-6 md:px-10 border-b border-white/10">
        <div className="text-xl font-semibold">eVolve</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#why" className="hover:text-white transition">Why eVolve</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#join" className="hover:text-white transition">Readiness Test</a>
          <a href="#join" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
            Join Now
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start gap-4 px-6 py-4 border-b border-white/10 text-sm bg-black">
          <a href="#why" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Why eVolve</a>
          <a href="#features" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#join" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Readiness Test</a>
          <a
            href="#join"
            className="px-4 py-2 mt-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
            onClick={() => setMenuOpen(false)}
          >
            Join
          </a>
        </div>
      )}

      {/* HERO */}
      <Section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">
          <div className="space-y-6 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
            >
              Train for top-tier
              <br /> interviews with
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Confidence & Consistency
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/60 max-w-lg md:max-w-none mx-auto md:mx-0"
            >
              A structured system that trains clarity, communication,
              reasoning and calm execution under pressure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#join" className="px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition">
                Get Early Access →
              </a>
              <a href="#join" className="px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition">
                Take Readiness Test →
              </a>
            </motion.div>
          </div>

          {/* Bar Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md h-[240px] sm:h-[300px] md:h-[390px] mx-auto rounded-2xl border border-white/10 p-6 flex items-end gap-2 relative overflow-hidden bg-gradient-to-b from-white/5 to-white/0">
              {[28, 40, 52, 64, 76, 88].map((h, i) => (
                <div
                  key={i}
                  className="rounded-sm bg-gradient-to-t from-white/55 to-white/10"
                  style={{ width: "14%", height: `${h}%`, animation: "breathe 5s ease-in-out infinite alternate" }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
          @keyframes breathe {
            0% { opacity: 0.7; transform: translateY(0); }
            100% { opacity: 1; transform: translateY(-4px); }
          }
        `}</style>
      </Section>

      {/* WHY */}
      <Section id="why">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Why Most Engineers Struggle Alone</h2>
        <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto leading-relaxed">
          Interviews test clarity, structure, and performance — not just solving skill.
        </p>

        <div className="mt-14 divide-y divide-white/10 rounded-xl overflow-hidden">
          {[
            { icon: TriangleAlert, heading: "No Clear Structure", body: "Too many resources, not enough direction. Prep feels scattered." },
            { icon: ChartNoAxesColumnIncreasing, heading: "No Progress Tracking", body: "Without measurable improvement, motivation sinks." },
            { icon: Brain, heading: "Performance Anxiety", body: "You know the concepts, but freeze when pressure hits." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="py-12 px-6">
                  <div className="flex items-start gap-5 max-w-3xl mx-auto">
                    <Icon className="mt-1 h-6 w-6 text-white/60" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.heading}</h3>
                      <p className="text-white/60 mt-2 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section id="join" className="pt-0">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to train with clarity?</h3>
          <p className="text-white/60 mt-3 leading-relaxed">
            Join early access and build real interview confidence.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a href="https://forms.gle/XuBtCQ5F3dRDQJJx8" target="_blank" className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              Join the Waitlist
            </a>
          </div>
        </div>
      </Section>

      <footer className="text-center text-xs text-white/30 py-10">
        © 2025 eVolve — Built by engineers, for engineers.
      </footer>
    </>
  );
}
