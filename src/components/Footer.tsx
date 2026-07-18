import Link from "next/link";
import { InstagramIcon } from "@/components/icons";
import { products } from "@/data/products";
import { founders } from "@/data/founders";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            Ralosy
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
            Building the future of Indian Tech, Education, and Civic Empowerment.
          </p>
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </div>

        <div>
          <p className="section-eyebrow mb-4">Ecosystem</p>
          <ul className="space-y-2.5">
            {products.map((p) => (
              <li key={p.id}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-eyebrow mb-4">Founders</p>
          <ul className="space-y-2.5">
            {founders.map((f) => (
              <li key={f.id}>
                <Link
                  href={`/founders/${f.slug}`}
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  {f.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ralosy. All rights reserved.</p>
          <p className="text-zinc-600">Crafted for the next decade of Indian tech.</p>
        </div>
      </div>
    </footer>
  );
}
