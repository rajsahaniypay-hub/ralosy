"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  ExternalLink,
  Globe2,
  Heart,
  Layers,
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
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[rgba(13,110,104,0.1)] blur-3xl"
        aria-hidden
      />
      <div className="bg-soft-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            href="/#founders"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to founders
          </Link>
        </FadeIn>

        <Reveal>
          <div className="panel overflow-hidden p-6 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.55 }}
                className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl ring-1 ring-[rgba(13,110,104,0.18)] sm:h-44 sm:w-44"
              >
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  fill
                  sizes="(min-width: 640px) 176px, 144px"
                  className="object-cover"
                  priority
                />
              </motion.div>

              <div className="min-w-0 flex-1">
                <p className="section-label mb-3">Founder Profile</p>
                <h1 className="text-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {founder.name}
                </h1>
                <p className="mt-2 text-base font-medium text-brand">{founder.role}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
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
                      className="btn-secondary text-sm"
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
                  className="rounded-xl bg-[rgba(20,40,36,0.03)] px-4 py-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {d.label}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-ink">
                    {d.label.toLowerCase().includes("live") ||
                    d.label.toLowerCase().includes("born") ||
                    d.label.toLowerCase().includes("base") ? (
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                    ) : null}
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {founder.interests && founder.interests.length > 0 && (
          <Reveal delay={0.05}>
            <section className="panel mt-6 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand" />
                <p className="section-label">Interests</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {founder.interests.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[rgba(13,110,104,0.08)] px-3 py-1.5 text-sm font-medium text-brand-deep"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {founder.skills && founder.skills.length > 0 && (
          <Reveal delay={0.08}>
            <section className="panel mt-6 p-6 sm:p-8">
              <p className="section-label mb-5">Technical proficiency</p>
              <div className="space-y-4">
                {founder.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-ink">{skill.name}</span>
                      <span className="text-xs font-semibold text-brand">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[rgba(20,40,36,0.06)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-brand"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {founder.admirations && founder.admirations.length > 0 && (
          <Reveal delay={0.1}>
            <section className="panel mt-6 p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Heart className="h-4 w-4 text-brand" />
                <p className="section-label">Admirations & principles</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {founder.admirations.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-[rgba(13,110,104,0.05)] px-4 py-3.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mr-2 text-brand">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {founder.awards && founder.awards.length > 0 && (
          <Reveal delay={0.12}>
            <section className="panel mt-6 p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <p className="section-label">Awards & digital milestones</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {founder.awards.map((award) => (
                  <article
                    key={award.title}
                    className="rounded-xl bg-[rgba(194,120,3,0.06)] p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-display text-base font-bold text-ink">
                        {award.title}
                      </h3>
                      {award.year && (
                        <span className="shrink-0 rounded-md bg-[rgba(194,120,3,0.14)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          {award.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {award.note}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {founder.timeline && founder.timeline.length > 0 && (
          <Reveal delay={0.14}>
            <section className="panel mt-6 p-6 sm:p-8">
              <p className="section-label mb-6">Journey</p>
              <ol className="relative space-y-0 border-l border-[rgba(13,110,104,0.22)] pl-6">
                {founder.timeline.map((item) => (
                  <li
                    key={`${item.year}-${item.title}`}
                    className="relative pb-8 last:pb-0"
                  >
                    <span className="absolute -left-[1.85rem] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-brand bg-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {item.year}
                    </p>
                    <h3 className="text-display mt-1 text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        )}

        {founder.ecosystem && founder.ecosystem.length > 0 && (
          <Reveal delay={0.15}>
            <section className="panel mt-6 p-6 sm:p-8">
              <div className="mb-2 flex items-center gap-2">
                <Layers className="h-4 w-4 text-brand" />
                <p className="section-label">Ralosy ecosystem — co-owned</p>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                Every Ralosy product is jointly owned and operated by both
                founders.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {founder.ecosystem.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-[rgba(13,110,104,0.05)] px-4 py-4 transition hover:bg-[rgba(13,110,104,0.08)]"
                  >
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="mt-1 text-sm text-muted">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {founder.projects && founder.projects.length > 0 && (
          <Reveal delay={0.16}>
            <section className="panel mt-6 p-6 sm:p-8">
              <p className="section-label mb-5">Projects</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {founder.projects.map((project) => (
                  <div
                    key={project.label}
                    className="rounded-xl bg-[rgba(20,40,36,0.03)] px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-ink">
                      {project.label}
                    </p>
                    <p className="mt-1 text-sm text-muted">{project.value}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        <div className="mt-6 space-y-4">
          {founder.sections.map((section, i) => (
            <Reveal key={section.title} delay={0.05 + i * 0.05}>
              <div className="panel p-5 sm:p-7">
                <h2 className="text-display text-xl font-bold text-ink">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
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
    <Reveal delay={index * 0.08}>
      <Link href={`/founders/${founder.slug}`} className="block h-full">
        <article className="panel panel-interactive group h-full overflow-hidden p-6 sm:p-7">
          <div className="relative mb-5 h-24 w-24 overflow-hidden rounded-2xl ring-1 ring-[rgba(13,110,104,0.16)]">
            <Image
              src={founder.image}
              alt={`Portrait of ${founder.name}`}
              fill
              sizes="96px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="text-display text-xl font-bold text-ink">
            {founder.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-brand">{founder.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {founder.shortBio}
          </p>
          {founder.awards && founder.awards.length > 0 && (
            <p className="mt-4 text-xs text-muted">
              {founder.awards.length} milestones · enriched profile
            </p>
          )}
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition group-hover:gap-3">
            View profile
            <span aria-hidden>→</span>
          </p>
        </article>
      </Link>
    </Reveal>
  );
}
