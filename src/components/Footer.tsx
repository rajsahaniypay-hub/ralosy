import Link from "next/link";
import { InstagramIcon } from "@/components/icons";
import { LogoMark } from "@/components/LogoMark";
import { founders } from "@/data/founders";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t-2 border-brand-deep bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-gutter py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <span className="font-display text-display-md font-extrabold text-ink">
              Ralosy
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Building the future of Indian Tech, Education, and Civic Empowerment.
          </p>
          <a
            href="https://instagram.com/ralosyglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
          >
            <InstagramIcon className="h-4 w-4" />
            @ralosyglobal
          </a>
        </div>

        <div>
          <p className="section-label mb-4">Ecosystem</p>
          <ul className="space-y-2.5">
            {products.map((product) => (
              <li key={product.id}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">Founders</p>
          <ul className="space-y-2.5">
            {founders.map((founder) => (
              <li key={founder.id}>
                <Link
                  href={`/founders/${founder.slug}`}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {founder.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(15,28,26,0.1)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-gutter py-6 text-xs font-medium tracking-tight text-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ralosy. All rights reserved.</p>
          <p>Crafted for the next decade of Indian tech.</p>
        </div>
      </div>
    </footer>
  );
}
