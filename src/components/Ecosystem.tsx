import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/motion";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-label mb-3">Ecosystem</p>
          <h2 className="text-display max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Products built for the next India
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            From scam defense to education ops and civic tools — a connected
            stack with privacy, speed, and real-world impact.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={product.id === "link" ? "md:col-span-2" : undefined}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
