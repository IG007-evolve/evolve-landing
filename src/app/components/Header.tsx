"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#0B0B0D] text-white py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          eVolve
        </Link>

        <nav className="flex items-center gap-8 text-sm">
          <Link href="/why-evolve" className="hover:text-[#B9A6FF] transition">Why eVolve</Link>
          <Link href="/features" className="hover:text-[#B9A6FF] transition">Features</Link>
          <Link href="/readiness-test" className="hover:text-[#B9A6FF] transition">Readiness Test</Link>

          <Link
            href="/join"
            className="ml-6 bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#F0EEFF] transition"
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
