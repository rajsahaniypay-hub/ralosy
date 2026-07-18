"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  ExternalLink,
  Globe2,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Founder } from "@/data/founders";
import { FadeIn, Reveal } from "@/components/motion";
import { InstagramIcon } from "@/components/icons";

export function FounderProfile({ founder }: { founder: Founder }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            href="/#founders"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to founders
          </Link>
        </FadeIn>

        {/* Hero card */}
        <Reveal>
          <div className="glow-border overflow-hidden rounded-[2rem] p-6 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`relative h-36 w-36 shrink-0 overflow-hidden rounded-[2rem] bg-gradient-to-br ${founder.accent} p-[2px] shadow-[0_0_50px_rgba(56,232,255,0.35)] sm:h-44 sm:w-44`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-2px)]">
                  <Image
                    src={founder.image}
                    alt={`Portrait of ${founder.name}`}
                    fill
                    sizes="(min-width: 640px) 176px, 144px"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <div className="min-w-0 flex-1">
                <p className="section-eyebrow mb-3">Founder Profile</p>
                <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {founder.name}
                </h1>
                <p className="mt-2 text-base text-cyan-200/90">{founder.role}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {founder.shortBio}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={founder.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {founder.instagram}
                  </a>
                  {founder.website && (
                    <a
                      href={founder.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-sm"
                    >
                      <Globe2 className="h-4 w-4" />
                      {founder.websiteLabel ?? "Website"}
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                    d.label.toLowerCase().includes("born") ||
                    d.label.toLowerCase().includes("base") ? (
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
                    ) : null}
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Interests */}
        {founder.interests && founder.interests.length > 0 && (
          <Reveal delay={0.05}>
            <section className="mt-8 glow-border rounded-[2rem] p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <p className="section-eyebrow">Interests</p>
              </div>
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
            </section>
          </Reveal>
        )}

        {/* Skills */}
        {founder.skills && founder.skills.length > 0 && (
          <Reveal delay={0.08}>
            <section className="mt-8 glow-border rounded-[2rem] p-6 sm:p-8">
              <p className="section-eyebrow mb-5">Technical proficiency</p>
              <div className="space-y-4">
                {founder.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-zinc-200">{skill.name}</span>
                      <span className="font-mono text-xs text-cyan-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${founder.accent}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Admirations */}
        {founder.admirations && founder.admirations.length > 0 && (
          <Reveal delay={0.1}>
            <section className="mt-8 glow-border rounded-[2rem] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-300" />
                <p className="section-eyebrow">Admirations & principles</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {founder.admirations.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] px-4 py-3.5 text-sm leading-relaxed text-zinc-300"
                  >
                    <span className="mr-2 text-emerald-300">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Awards */}
        {founder.awards && founder.awards.length > 0 && (
          <Reveal delay={0.12}>
            <section className="mt-8 glow-border rounded-[2rem] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-300" />
                <p className="section-eyebrow">Awards & digital milestones</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {founder.awards.map((award) => (
                  <article
                    key={award.title}
                    className="rounded-2xl border border-amber-300/15 bg-gradient-to-br from-amber-400/[0.06] to-transparent p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                        {award.title}
                      </h3>
                      {award.year && (
                        <span className="shrink-0 rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-100">
                          {award.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {award.note}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Timeline */}
        {founder.timeline && founder.timeline.length > 0 && (
          <Reveal delay={0.14}>
            <section className="mt-8 glow-border rounded-[2rem] p-6 sm:p-8">
              <p className="section-eyebrow mb-6">Execution log</p>
              <ol className="relative space-y-0 border-l border-cyan-400/25 pl-6">
                {founder.timeline.map((item, i) => (
                  <li key={`${item.year}-${item.title}`} className="relative pb-8 last:pb-0">
                    <span className="absolute -left-[1.9rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-400/20 shadow-[0_0_12px_rgba(56,232,255,0.5)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    </span>
                    <p className="font-mono text-xs text-cyan-300/90">
                      {item.year}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                    {i < founder.timeline!.length - 1 ? null : null}
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        )}

        {/* Projects */}
        {founder.projects && founder.projects.length > 0 && (
          <Reveal delay={0.16}>
            <section className="mt-8 glow-border rounded-[2rem] p-6 sm:p-8">
              <p className="section-eyebrow mb-5">Deployed protocols</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {founder.projects.map((project) => (
                  <div
                    key={project.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-cyan-400/30"
                  >
                    <p className="text-sm font-semibold text-white">
                      {project.label}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">{project.value}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Narrative sections */}
        <div className="mt-8 space-y-5">
          {founder.sections.map((section, i) => (
            <Reveal key={section.title} delay={0.05 + i * 0.06}>
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-7">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
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
        <article className="glow-border group h-full overflow-hidden rounded-3xl p-6 sm:p-7">
          <div
            className={`relative mb-5 h-24 w-24 overflow-hidden rounded-2xl bg-gradient-to-br ${founder.accent} p-[2px] shadow-[0_0_30px_rgba(56,232,255,0.25)] transition group-hover:shadow-[0_0_44px_rgba(56,232,255,0.4)]`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
              <Image
                src={founder.image}
                alt={`Portrait of ${founder.name}`}
                fill
                sizes="96px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {founder.name}
          </h3>
          <p className="mt-1 text-sm text-cyan-200/80">{founder.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {founder.shortBio}
          </p>
          {founder.awards && founder.awards.length > 0 && (
            <p className="mt-4 text-xs text-zinc-500">
              {founder.awards.length} milestones · enriched profile
            </p>
          )}
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:gap-3">
            View profile
            <span aria-hidden>→</span>
          </p>
        </article>
      </Link>
    </Reveal>
  );
}
