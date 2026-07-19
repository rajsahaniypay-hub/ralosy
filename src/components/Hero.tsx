"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Full-bleed brand visual */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/logo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_42%] opacity-55 sm:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8f0ed] from-[18%] via-[#e8f0ed]/90 via-[48%] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#dfe8e4] via-transparent to-[#f4f8f6]/55" />
        <div className="bg-soft-grid absolute inset-0 opacity-50" />
      </div>

      <div
        className="pointer-events-none absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-[rgba(11,101,95,0.16)] blur-3xl animate-drift sm:h-[38rem] sm:w-[38rem]"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-6xl items-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-xl">
          <motion.h1
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-mark text-display text-[clamp(3.5rem,11vw,7.25rem)] font-extrabold leading-[0.9] tracking-[-0.045em] text-ink"
          >
            Ralosy
          </motion.h1>

          <motion.p
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="hero-mark mt-5 max-w-md text-base leading-relaxed text-foreground sm:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            Building the future of Indian Tech, Education, and Civic Empowerment.
          </motion.p>

          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="hero-mark mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "140ms" }}
          >
            <a href="#ecosystem" className="btn-primary">
              Explore the ecosystem
            </a>
            <a
              href="https://instagram.com/ralosyglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <InstagramIcon className="h-4 w-4" />
              @ralosyglobal
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
