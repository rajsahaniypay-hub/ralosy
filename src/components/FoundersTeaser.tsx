import { founders } from "@/data/founders";
import { FounderCard } from "@/components/FounderProfile";
import { Reveal } from "@/components/motion";

export function FoundersTeaser() {
  return (
    <section id="founders" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-label mb-3">Founders</p>
          <h2 className="text-display max-w-xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The minds behind Ralosy
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted">
            Meet the co-founders building India-first technology with clarity
            and craft.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {founders.map((founder, index) => (
            <FounderCard key={founder.id} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
