"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { LogoMark } from "@/components/LogoMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#founders", label: "Founders" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 ${
        scrolled || open
          ? "border-[rgba(15,28,26,0.12)] bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-header max-w-6xl items-center justify-between px-gutter sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8" />
          <span className="font-display text-display-sm font-extrabold text-ink">
            Ralosy
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold tracking-tight text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 bg-brand-deep px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          className="inline-flex h-11 w-11 items-center justify-center border border-[rgba(15,28,26,0.16)] text-ink md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-[rgba(15,28,26,0.1)] bg-background md:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-gutter py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-display-sm font-extrabold text-ink py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-deep px-4 py-3 text-sm font-semibold text-white"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </div>
      </div>
    </header>
  );
}
