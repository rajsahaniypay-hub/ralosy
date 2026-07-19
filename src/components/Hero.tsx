"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-16 sm:items-center">
      {/* Full-bleed brand visual */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/logo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.18] sm:opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eef3f1] via-[#eef3f1]/88 to-[#eef3f1]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e8f0ed] via-transparent to-[#f7faf8]/70" />
        <div className="bg-soft-grid absolute inset-0 opacity-70" />
      </div>

      <div
        className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-[rgba(13,110,104,0.12)] blur-3xl animate-drift sm:h-[28rem] sm:w-[28rem]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-display text-[clamp(3.4rem,12vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-ink"
        >
          Ralosy
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Building the future of Indian Tech, Education, and Civic Empowerment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
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
    </section>
  );
}
