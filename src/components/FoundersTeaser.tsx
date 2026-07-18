import { founders } from "@/data/founders";
import { FounderCard } from "@/components/FounderProfile";
import { Reveal } from "@/components/motion";

export function FoundersTeaser() {
  return (
    <section id="founders" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-eyebrow mb-3">Founders</p>
          <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The minds behind Ralosy
          </h2>
          <p className="mt-4 max-w-xl text-base text-zinc-400">
            Meet the co-founders building India-first technology with a
            futuristic edge.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <FounderCard key={founder.id} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
