import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/icons";
import { products } from "@/data/products";
import { founders } from "@/data/founders";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-[rgba(20,40,36,0.1)] bg-[rgba(247,250,248,0.7)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative block h-10 w-10 overflow-hidden rounded-xl ring-1 ring-[rgba(13,110,104,0.18)]">
              <Image
                src="/logo.png"
                alt="Ralosy logo"
                fill
                sizes="40px"
                className="scale-[1.55] object-cover"
              />
            </span>
            <p className="text-display text-2xl font-bold text-ink">Ralosy</p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Building the future of Indian Tech, Education, and Civic Empowerment.
          </p>
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-deep"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </div>

        <div>
          <p className="section-label mb-4">Ecosystem</p>
          <ul className="space-y-2.5">
            {products.map((p) => (
              <li key={p.id}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition hover:text-ink"
                >
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">Founders</p>
          <ul className="space-y-2.5">
            {founders.map((f) => (
              <li key={f.id}>
                <Link
                  href={`/founders/${f.slug}`}
                  className="text-sm text-muted transition hover:text-ink"
                >
                  {f.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(20,40,36,0.08)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ralosy. All rights reserved.</p>
          <p>Crafted for the next decade of Indian tech.</p>
        </div>
      </div>
    </footer>
  );
}
