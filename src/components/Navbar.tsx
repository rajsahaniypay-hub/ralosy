"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#founders", label: "Founders" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "glass shadow-[0_10px_40px_rgba(0,0,0,0.35)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative h-9 w-9 overflow-hidden rounded-xl shadow-[0_0_24px_rgba(56,232,255,0.3)] ring-1 ring-cyan-400/30 transition group-hover:shadow-[0_0_32px_rgba(56,232,255,0.45)]">
            <Image
              src="/logo.png"
              alt="Ralosy logo"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white">
            Ralosy
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/60 hover:shadow-[0_0_24px_rgba(56,232,255,0.25)]"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-zinc-200 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/ralosyglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950"
              >
                <InstagramIcon className="h-4 w-4" />
                @ralosyglobal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
