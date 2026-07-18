"use client";

import { ArrowUpRight, Link2, Shield, GraduationCap, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { SuggestionBox } from "@/components/SuggestionBox";
import { Reveal } from "@/components/motion";

const icons = {
  satark: Shield,
  kaksha: GraduationCap,
  link: Link2,
  indianow: Landmark,
};

const accentMap = {
  cyan: {
    badge: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
    icon: "text-cyan-300 bg-cyan-400/10 border-cyan-400/30",
    soft: "from-cyan-500/15 via-transparent to-transparent",
  },
  emerald: {
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    icon: "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
    soft: "from-emerald-500/15 via-transparent to-transparent",
  },
  violet: {
    badge: "border-violet-400/30 bg-violet-400/10 text-violet-200",
    icon: "text-violet-300 bg-violet-400/10 border-violet-400/30",
    soft: "from-violet-500/15 via-transparent to-transparent",
  },
  amber: {
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    icon: "text-amber-300 bg-amber-400/10 border-amber-400/30",
    soft: "from-amber-500/15 via-transparent to-transparent",
  },
};

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const Icon = icons[product.id as keyof typeof icons] ?? Link2;
  const accent = accentMap[product.accent];

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.article
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className={`glow-border group relative h-full overflow-hidden rounded-3xl p-6 sm:p-8 ${
          product.size === "lg" ? "min-h-[340px]" : "min-h-[280px]"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.soft}`}
        />
        <div className="relative flex h-full flex-col">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${accent.icon}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
                    {product.title}
                  </h3>
                  {product.upcoming && (
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent.badge}`}>
                      Upcoming
                    </span>
                  )}
                </div>
                {product.subtitle && (
                  <p className="mt-0.5 text-xs text-zinc-500">{product.subtitle}</p>
                )}
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-400">
              {product.domain}
            </span>
          </div>

          <p className="text-base font-medium text-zinc-100">{product.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {product.mission}
          </p>

          {product.linkTree ? (
            <div className="mt-5 space-y-2">
              {["Satark", "Kaksha", "Founders", "Instagram"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition group-hover:border-violet-400/30"
                >
                  <span>{item}</span>
                  <ArrowUpRight className="h-4 w-4 text-violet-300 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {product.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm leading-snug text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80 shadow-[0_0_8px_rgba(56,232,255,0.8)]" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          {product.showSuggestion && <SuggestionBox />}

          <div className="mt-auto pt-6">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group/cta inline-flex text-sm"
            >
              {product.upcoming ? "Preview domain" : "Open product"}
              <ArrowUpRight className="h-4 w-4 transition group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
