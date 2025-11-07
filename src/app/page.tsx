"use client";

import { motion } from "framer-motion";
import { TriangleAlert, Brain, ChartNoAxesColumnIncreasing } from "lucide-react";

const FORM_URL = "https://forms.gle/XuBtCQ5F3dRDQJJx8";

const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-20 md:py-24 ${className}`}>
    {children}
  </section>
);

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="flex justify-between items-center py-5 px-6 md:px-10 border-b border-white/10 text-white">
        <div className="text-xl font-semibold">eVolve</div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#why" className="hover:text-white transition">Why eVolve</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a
            href={FORM_URL}
            target="_blank"
            className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Get Early Access
          </a>
        </nav>
      </header>

      {/* HERO */}
      <Section className="text-white px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-12 md:gap-16 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15]"
            >
              Train for top-tier interviews with
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Confidence & Consistency
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-white/70 text-base sm:text-lg max-w-md mx-auto md:mx-0"
            >
              A structured system that trains clarity, communication, reasoning and calm execution under pressure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href={FORM_URL}
                target="_blank"
                className="px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition"
              >
                Get Early Access →
              </a>
              <a
                href={FORM_URL}
                target="_blank"
                className="px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition"
              >
                Take Readiness Test →
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[220px] sm:h-[260px] md:h-[380px] mx-auto rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-5 flex items-end gap-1.5"
          >
            {[28, 40, 52, 64, 76, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-white/55 to-white/10"
                style={{
                  height: `${h}%`,
                  animation: "breathe 5s ease-in-out infinite",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.12),transparent_70%)] rounded-2xl" />
          </motion.div>
        </div>
      </Section>

      {/* WHY */}
      <Section id="why" className="border-t border-white/10 text-white px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">Why Most Engineers Struggle Alone</h2>

        <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
          Interviews test clarity, structure, and performance — not just solving skill.
        </p>

        <div className="mt-12 divide-y divide-white/10 rounded-xl overflow-hidden">
          {[
            {
              icon: TriangleAlert,
              heading: "No Clear Structure",
              body: "Too many resources, not enough direction. Prep feels scattered.",
            },
            {
              icon: ChartNoAxesColumnIncreasing,
              heading: "No Progress Feedback",
              body: "Without measurable improvement, motivation drops.",
            },
            {
              icon: Brain,
              heading: "Performance Anxiety",
              body: "You know the concepts, but freeze under pressure.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="py-10 md:py-12 px-4 md:px-6"
              >
                <div className="flex items-start gap-4 max-w-3xl mx-auto">
                  <Icon className="mt-1 h-6 w-6 text-white/60" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.heading}</h3>
                    <p className="text-white/60 mt-2 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="border-t border-white/10 text-white px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">What Makes eVolve Different</h2>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Structured Training Tracks",
              text: "Day-by-day paths for System Design, Communication Drills, and Reasoning.",
            },
            {
              title: "The Readiness System",
              text: "Elite scoring across clarity, reasoning, communication, and composure.",
            },
            {
              title: "Weekly Progress Snapshots",
              text: "Know exactly where you are. Improve what matters.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-white text-center px-6 md:px-10">
        <h3 className="text-2xl sm:text-3xl font-semibold">Early Access is Limited.</h3>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">
          Cohorts open in waves. Secure your spot and get access to the Readiness System preview.
        </p>

        <a
          href={FORM_URL}
          target="_blank"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition"
        >
          Get Early Access →
        </a>
      </Section>
    </>
  );
}
