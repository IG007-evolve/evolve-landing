"use client";

import React from "react";
import { motion } from "framer-motion";

//
// Animation Variants
//
//
// Animation Variants (TS-safe)
//
import type { Variants } from "framer-motion";

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

const fadeInSlow: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75 } }
};

const floatIn: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.97 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.08,
            duration: 0.55,
            ease: "easeOut"
        }
    })
};


export default function SamplePlanPage() {
    const weeks = [
        {
            id: 1,
            title: "Clarity & Structure",
            color: "from-emerald-400 to-emerald-600",
            stars: 2,
            time: "45–60 min",
            skills: ["Clarity", "Framing"],
            intensity: "Medium"
        },
        {
            id: 2,
            title: "Edge Cases",
            color: "from-yellow-400 to-yellow-600",
            stars: 3,
            time: "50–70 min",
            skills: ["Robustness", "Invariants"],
            intensity: "Medium"
        },
        {
            id: 3,
            title: "Scalability",
            color: "from-sky-400 to-sky-600",
            stars: 4,
            time: "60–75 min",
            skills: ["System Design", "Tradeoffs"],
            intensity: "High"
        },
        {
            id: 4,
            title: "Pacing",
            color: "from-indigo-400 to-indigo-600",
            stars: 2,
            time: "40–55 min",
            skills: ["Conciseness", "Composure"],
            intensity: "Medium"
        },
        {
            id: 5,
            title: "Synthesis",
            color: "from-violet-400 to-violet-600",
            stars: 4,
            time: "60–90 min",
            skills: ["Integration", "Strategy"],
            intensity: "High"
        },
        {
            id: 6,
            title: "Interview Ready",
            color: "from-pink-400 to-pink-600",
            stars: 5,
            time: "3 full mocks",
            skills: ["Execution", "Pressure"],
            intensity: "Very High"
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-16">

                {/* HERO — WIDER TEXT */}
                <section className="pt-20 pb-10 max-w-5xl">
                    <motion.h1
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl"
                    >
                        Your <span className="text-white/90">6-Week</span> Rapid{" "}
                        <span className="text-white/90">Growth</span> Plan<br />
                        Tailored From Your <span className="text-white/90">Test</span>
                    </motion.h1>


                    <motion.p
                        variants={fadeInSlow}
                        initial="hidden"
                        animate="show"
                        className="text-white/70 mt-5 text-lg max-w-3xl"
                    >
                        Actionable weekly steps that fix the real problems interviewers care
                        about: clarity, structure, tradeoffs and composure. No fluff —
                        practice + feedback.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <a
                            href="/readiness-test"
                            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow"
                        >
                            Take the Quick Diagnostic
                        </a>

                        <a
                            href="#preview"
                            className="px-6 py-3 rounded-2xl border border-white/10 text-white/90"
                        >
                            Preview sample plan
                        </a>
                    </motion.div>

                    {/* Checklist */}
                    <motion.ul
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/70 max-w-3xl"
                    >
                        <ChecklistItem text="Weekly micro-tasks (30–90 mins each)" />
                        <ChecklistItem text="Daily drills for clarity & composure" />
                        <ChecklistItem text="Graded mock prompts with model answers" />
                        <ChecklistItem text="Progress dashboard & streak incentives" />
                    </motion.ul>
                </section>

                {/* SAMPLE GROWTH PLAN — moved BELOW hero */}
                <section className="mt-6" id="preview">
                    <GlossyDashboard weeks={weeks} />
                </section>

                {/* WHY IT WORKS */}
                <section className="mt-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Feature title="Focused Practice" desc="Micro-tasks target your weakest metric so every minute moves the needle." />
                        <Feature title="Real Prompts" desc="Short LC & SysDesign drills that mirror real interviews." />
                        <Feature title="Accountability" desc="Simple tracking and weekly checkpoints — no overwhelm." />
                    </div>
                </section>

                {/* 6-WEEK EXAMPLE GRID */}
                {/* 6-WEEK EXAMPLE GRID — UPDATED WITH DIFFICULTY, TIME, SKILLS */}
                <section className="mt-16">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        className="rounded-xl p-6 border border-white/6 bg-black/20"
                    >
                        <h3 className="text-xl font-semibold">6-Week Growth Plan (example)</h3>
                        <p className="text-white/70 mt-2">
                            Each week contains specific goals, difficulty levels, intensity markers and time estimates.
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {weeks.map((w, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={floatIn}
                                    initial="hidden"
                                    animate="show"
                                    viewport={{ once: true }}
                                    className="rounded-2xl border border-white/10 bg-black/40 p-5 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Header */}
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-sm text-white/60">Week {w.id}</div>
                                            <div className="font-semibold text-lg">{w.title}</div>
                                        </div>

                                        {/* Icon */}
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${w.color} flex items-center justify-center`}>
                                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                        </div>
                                    </div>

                                    {/* Difficulty */}
                                    <div className="mt-4">
                                        <div className="text-xs text-white/60">Difficulty</div>

                                        <div className="flex mt-1">
                                            {"★★★★★☆☆☆☆☆"
                                                .slice(0, w.stars + (5 - w.stars)) /* safety */
                                                .split("")
                                                .map((s, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={
                                                            idx < w.stars
                                                                ? "text-yellow-400 text-base"
                                                                : "text-white/20 text-base"
                                                        }
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="mt-3">
                                        <div className="text-xs text-white/60">Time Required</div>
                                        <div className="text-sm text-white/80 mt-1">{w.time}</div>
                                    </div>

                                    {/* Skills */}
                                    <div className="mt-3">
                                        <div className="text-xs text-white/60">Skills</div>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {w.skills.map((s: string) => (
                                                <span
                                                    key={s}
                                                    className="px-2 py-1 rounded-md text-xs bg-white/10 text-white/70"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Intensity */}
                                    <div className="mt-3">
                                        <div className="text-xs text-white/60">Intensity</div>
                                        <div className="text-sm text-white/80 mt-1">{w.intensity}</div>
                                    </div>

                                    {/* Sparkline */}
                                    <div className="mt-4">
                                        <MiniSparkline />
                                    </div>

                                    {/* Progress bar */}
                                    <div className="mt-4">
                                        <div className="text-xs text-white/60">Progress</div>
                                        <div className="mt-1 h-2 rounded-full bg-white/10">
                                            <div
                                                className={`h-2 rounded-full bg-gradient-to-r ${w.color}`}
                                                style={{ width: `${35 + w.id * 10}%` }}
                                            />
                                        </div>
                                    </div>

                                </motion.div>
                            ))}

                        </div>
                    </motion.div>
                </section>

                {/* FINAL CTA */}
                <section className="mt-16 text-center pb-20">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="show">
                        <h4 className="text-2xl font-semibold">What you’ll see in 2 weeks</h4>

                        <p className="text-white/70 mt-2">
                            Clearer explanations. Fewer rambling answers. Real confidence.
                        </p>

                        <div className="mt-6 flex justify-center gap-4">
                            <a
                                href="https://forms.gle/XuBtCQ5F3dRDQJJx8"
                                target="_blank"
                                className="px-8 py-3 rounded-2xl bg-white text-black font-semibold shadow"
                            >
                                Join the Plan (limited)
                            </a>

                            <a
                                href="/readiness-test"
                                className="px-6 py-3 rounded-2xl border border-white/10"
                            >
                                Take the Diagnostic
                            </a>
                        </div>

                        <p className="text-sm text-white/50 mt-6">
                            No payment. No forms. Just real improvement.
                        </p>
                    </motion.div>
                </section>

            </div>

            <footer className="text-center text-xs text-white/30 py-12">
                © 2025 eVolve
            </footer>
        </main>
    );
}

//
// —————————————————————
// COMPONENTS
// —————————————————————
//

function ChecklistItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-emerald-500">
                ✓
            </span>
            {text}
        </li>
    );
}

function Feature({ title, desc }: { title: string; desc: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 border border-white/6 bg-black/20"
        >
            <div className="font-semibold">{title}</div>
            <div className="text-white/70 mt-2">{desc}</div>
        </motion.div>
    );
}

// —————————————————————
// GLOSSY DASHBOARD UI
// —————————————————————

function GlossyDashboard({ weeks }: { weeks: any[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/6 bg-gradient-to-b from-white/5 to-black/10 backdrop-blur-xl shadow-2xl p-6 relative overflow-hidden"
        >
            {/* Ambient glows */}
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_30%_20%,rgba(100,120,255,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_70%_80%,rgba(255,120,155,0.05),transparent_60%)] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-lg font-semibold">Sample Growth Plan</div>
                    <div className="text-white/60 mt-1">Tailored from your test</div>
                </div>

                <div className="flex gap-3 text-sm">
                    <div className="px-3 py-1 rounded-md bg-white/5">Overview</div>
                    <div className="px-3 py-1 rounded-md bg-white/5">Export</div>
                </div>
            </div>

            {/* Week cards */}
            <div className="mt-6 overflow-x-auto">
                <div className="flex gap-4 pb-4">
                    {weeks.map((w, i) => (
                        <motion.div
                            key={w.id}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={floatIn}
                            className="min-w-[210px] bg-black/50 border border-white/6 rounded-2xl p-4 hover:-translate-y-1 transition"
                        >
                            <WeekCard week={w} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom stats */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Stat label="Avg time / task" value="42m" />
                <Stat label="Weekly load" value="3 tasks" />
                <Stat label="Confidence gain" value="+18%" />
            </div>
        </motion.div>
    );
}

function WeekCard({ week }: { week: any }) {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${week.color} flex items-center justify-center`}>
                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                    <div>
                        <div className="text-xs text-white/60">Week {week.id}</div>
                        <div className="font-semibold mt-1">{week.title}</div>
                    </div>
                </div>
                <div className="text-white/40 text-lg">•••</div>
            </div>

            {/* Pseudo-graph */}
            <div className="mt-4">
                <MiniSparkline />
            </div>

            {/* Progress bar */}
            <div className="mt-4">
                <div className="text-xs text-white/60">Tasks</div>
                <div className="mt-1 h-2 rounded-full bg-white/10">
                    <div
                        className={`h-2 rounded-full bg-gradient-to-r ${week.color}`}
                        style={{ width: `${35 + week.id * 10}%` }}
                    />
                </div>
            </div>
        </>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl p-4 bg-black/40 border border-white/6">
            <div className="text-white/60 text-sm">{label}</div>
            <div className="font-semibold mt-1">{value}</div>
        </div>
    );
}

function MiniSparkline() {
    return (
        <svg width="100%" height="36" viewBox="0 0 120 36" preserveAspectRatio="none">
            <path
                d="M2 28 L18 20 L36 26 L56 14 L76 18 L96 10 L118 8"
                stroke="#999"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 28 L18 20 L36 26 L56 14 L76 18 L96 10 L118 8"
                stroke="#3B82F6"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
