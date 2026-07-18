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
    <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-400/5 p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2 text-amber-200">
        <Lightbulb className="h-4 w-4" />
        <p className="text-sm font-semibold">Suggestion Box</p>
      </div>
      <p className="mb-4 text-xs leading-relaxed text-zinc-400">
        Help name the product and shape features. Suggestions are saved on this
        device for now.
      </p>

      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block">
          <span className="mb-1.5 block text-xs text-zinc-400">
            Preferred domain
          </span>
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="indianow.ralosy.com or improveindia.ralosy.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/40 focus:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs text-zinc-400">
            Feature idea
          </span>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            rows={3}
            placeholder="What should citizens be able to report or track?"
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/40 focus:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-xl border border-amber-300/30 bg-amber-300/15 px-4 py-2.5 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/25 hover:shadow-[0_0_24px_rgba(251,191,36,0.2)]"
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
            className="mt-3 flex items-center gap-2 text-sm text-emerald-300"
          >
            <CheckCircle2 className="h-4 w-4" />
            Saved — thank you for shaping IndiaNow.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
