"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "ralosy-indianow-suggestions";

type Suggestion = {
  domain: string;
  idea: string;
  at: string;
};

export function SuggestionBox() {
  const [domain, setDomain] = useState("");
  const [idea, setIdea] = useState("");
  const [saved, setSaved] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!domain.trim() && !idea.trim()) return;

    const entry: Suggestion = {
      domain: domain.trim(),
      idea: idea.trim(),
      at: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]",
      ) as Suggestion[];
      existing.push(entry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([entry]));
    }

    setDomain("");
    setIdea("");
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2800);
  }

  return (
    <div className="mt-5 rounded-xl border border-[rgba(194,120,3,0.2)] bg-[rgba(194,120,3,0.06)] p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2 text-accent">
        <Lightbulb className="h-4 w-4" />
        <p className="text-sm font-semibold">Suggestion Box</p>
      </div>
      <p className="mb-4 text-xs leading-relaxed text-muted">
        Help name the product and shape features. Suggestions are saved on this
        device for now.
      </p>

      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">
            Preferred domain
          </span>
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="indianow.ralosy.com or improveindia.ralosy.com"
            className="w-full rounded-lg border border-[rgba(20,40,36,0.12)] bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-[rgba(90,107,103,0.55)] focus:border-brand"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">
            Feature idea
          </span>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            rows={3}
            placeholder="What should citizens be able to report or track?"
            className="w-full resize-none rounded-lg border border-[rgba(20,40,36,0.12)] bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-[rgba(90,107,103,0.55)] focus:border-brand"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
        >
          Submit suggestion
        </button>
      </form>

      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-3 flex items-center gap-2 text-sm font-medium text-[color:var(--success)]"
          >
            <CheckCircle2 className="h-4 w-4" />
            Saved — thank you for shaping IndiaNow.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
