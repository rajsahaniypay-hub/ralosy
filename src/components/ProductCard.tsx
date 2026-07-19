"use client";

import {
  ArrowUpRight,
  Link2,
  Shield,
  GraduationCap,
  Landmark,
  Cpu,
  ShoppingBag,
} from "lucide-react";
import type { Product } from "@/data/products";
import { SuggestionBox } from "@/components/SuggestionBox";
import { Reveal } from "@/components/motion";

const icons = {
  satark: Shield,
  kaksha: GraduationCap,
  link: Cpu,
  indianow: Landmark,
  store: ShoppingBag,
};

const accentMap = {
  cyan: {
    icon: "bg-[rgba(13,110,104,0.1)] text-brand",
    bar: "bg-brand",
  },
  emerald: {
    icon: "bg-[rgba(31,122,76,0.1)] text-[color:var(--success)]",
    bar: "bg-[color:var(--success)]",
  },
  violet: {
    icon: "bg-[rgba(10,63,60,0.1)] text-brand-deep",
    bar: "bg-brand-deep",
  },
  amber: {
    icon: "bg-[rgba(194,120,3,0.12)] text-accent",
    bar: "bg-accent",
  },
  rose: {
    icon: "bg-[rgba(180,70,70,0.1)] text-[#9f3d3d]",
    bar: "bg-[#9f3d3d]",
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
    <Reveal delay={index * 0.06} className="h-full">
      <article
        className={`panel panel-interactive group relative h-full overflow-hidden p-6 sm:p-8 ${
          product.size === "lg" ? "min-h-[300px]" : "min-h-[260px]"
        }`}
      >
        <div className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} />
        <div className="relative flex h-full flex-col">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent.icon}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-display text-xl font-bold text-ink sm:text-2xl">
                    {product.title}
                  </h3>
                  {product.upcoming && (
                    <span className="rounded-md bg-[rgba(194,120,3,0.12)] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                      Upcoming
                    </span>
                  )}
                </div>
                {product.subtitle && (
                  <p className="mt-0.5 text-xs text-muted">{product.subtitle}</p>
                )}
              </div>
            </div>
            <span className="rounded-md bg-[rgba(20,40,36,0.04)] px-2.5 py-1 text-[11px] font-medium text-muted">
              {product.domain}
            </span>
          </div>

          <p className="text-base font-semibold text-ink">{product.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {product.mission}
          </p>

          {product.meta && product.meta.length > 0 && (
            <dl className="mt-5 grid gap-3 border-y border-[rgba(20,40,36,0.08)] py-4 sm:grid-cols-3">
              {product.meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 truncate text-sm font-medium text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {product.flowSteps && product.flowSteps.length > 0 && (
            <div className="mt-5 overflow-x-auto">
              <ol className="flex min-w-max items-center gap-2 text-sm">
                {product.flowSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-md bg-[rgba(13,110,104,0.08)] px-3 py-1.5 font-medium text-brand-deep">
                      {step}
                    </span>
                    {i < product.flowSteps!.length - 1 && (
                      <span className="text-muted" aria-hidden>
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {product.points.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-sm leading-snug text-muted"
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bar}`}
                />
                {point}
              </li>
            ))}
          </ul>

          {product.showSuggestion && <SuggestionBox />}

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group/cta inline-flex text-sm"
            >
              {product.ctaLabel ??
                (product.upcoming ? "Preview domain" : "Open product")}
              <ArrowUpRight className="h-4 w-4 transition group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
            {product.secondaryHref && (
              <a
                href={product.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-deep px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand"
              >
                {product.secondaryLabel ?? "Secondary"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
