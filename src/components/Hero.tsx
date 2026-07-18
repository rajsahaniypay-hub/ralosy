"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { InstagramIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="scanline" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-violet-500/15 blur-[90px]" />
      <div className="pointer-events-none absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-emerald-400/10 blur-[80px]" />

      {/* Orbital rings */}
      <div className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 lg:block">
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-10 rounded-full border border-dashed border-violet-400/25"
          animate={{ rotate: -360 }}
          transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-24 rounded-full border border-emerald-400/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-1/2 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(56,232,255,0.9)]" />
        <div className="absolute bottom-16 right-16 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(93,255,176,0.9)]" />

        {/* Logo at the center of the orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-float"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] shadow-[0_0_80px_rgba(56,232,255,0.35)] ring-1 ring-cyan-400/40">
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 flex items-center gap-4 lg:hidden">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(56,232,255,0.35)] ring-1 ring-cyan-400/40">
              <Image
                src="/logo.png"
                alt="Ralosy logo"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            Indian Tech · Education · Civic Empowerment
          </div>
        </FadeIn>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient neon-text">Welcome to Ralosy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          Building the future of Indian Tech, Education, and Civic Empowerment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a href="#ecosystem" className="btn-primary">
            Explore the ecosystem
          </a>
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
