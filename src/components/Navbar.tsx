"use client";

import Image from "next/image";
import Link from "next/link";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "nav-shell shadow-[0_8px_30px_rgba(15,40,36,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative block h-9 w-9 overflow-hidden rounded-xl ring-1 ring-[rgba(13,110,104,0.18)] transition group-hover:ring-[rgba(13,110,104,0.35)]">
            <Image
              src="/logo.png"
              alt="Ralosy logo"
              fill
              sizes="36px"
              className="scale-[1.55] object-cover"
              priority
            />
          </span>
          <span className="text-display text-lg font-bold tracking-tight text-ink">
            Ralosy
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-white/70 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-[rgba(13,110,104,0.2)] bg-white/70 px-3.5 py-2 text-sm font-semibold text-brand-deep transition hover:border-brand hover:bg-white"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(20,40,36,0.12)] bg-white/80 text-ink md:hidden"
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
            className="border-t border-[rgba(20,40,36,0.08)] bg-[rgba(247,250,248,0.96)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/ralosyglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2"
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
