"use client";

import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Founder } from "@/data/founders";
import { FadeIn, Reveal } from "@/components/motion";
import { InstagramIcon } from "@/components/icons";

export function FounderProfile({ founder }: { founder: Founder }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            href="/#founders"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to founders
          </Link>
        </FadeIn>

        <Reveal>
          <div className="glow-border overflow-hidden rounded-[2rem] p-6 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`relative flex h-28 w-28 shrink-0 items-center justify-center rounded-[2rem] bg-gradient-to-br ${founder.accent} text-3xl font-bold text-slate-950 shadow-[0_0_50px_rgba(56,232,255,0.35)] sm:h-32 sm:w-32`}
              >
                {founder.initials}
                <span className="absolute inset-0 rounded-[2rem] ring-1 ring-white/30" />
              </motion.div>

              <div className="min-w-0 flex-1">
                <p className="section-eyebrow mb-3">Founder</p>
                <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {founder.name}
                </h1>
                <p className="mt-2 text-base text-cyan-200/90">{founder.role}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {founder.shortBio}
                </p>

                <a
                  href={founder.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 text-sm"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {founder.instagram}
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {founder.details.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    {d.label}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-zinc-100">
                    {d.label.toLowerCase().includes("live") ||
                    d.label.toLowerCase().includes("born") ? (
                      <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                    ) : null}
                    {d.value}
                  </p>
                </div>
              ))}
            </div>

            {founder.interests && founder.interests.length > 0 && (
              <div className="mt-10">
                <p className="section-eyebrow mb-4">Interests</p>
                <div className="flex flex-wrap gap-2.5">
                  {founder.interests.map((tag) => (
                    <span
                      key={tag}
                      className="pill-neon rounded-full px-3.5 py-1.5 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 space-y-5">
              {founder.sections.map((section, i) => (
                <Reveal key={section.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-6">
                    <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function FounderCard({
  founder,
  index = 0,
}: {
  founder: Founder;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.1}>
      <Link href={`/founders/${founder.slug}`} className="block h-full">
        <article className="glow-border group h-full rounded-3xl p-6 sm:p-7">
          <div
            className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${founder.accent} text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(56,232,255,0.25)]`}
          >
            {founder.initials}
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {founder.name}
          </h3>
          <p className="mt-1 text-sm text-cyan-200/80">{founder.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {founder.shortBio}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:gap-3">
            View profile
            <span aria-hidden>→</span>
          </p>
        </article>
      </Link>
    </Reveal>
  );
}
