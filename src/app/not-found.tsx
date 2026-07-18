import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-4 pt-20">
      <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="relative text-center">
        <p className="font-[family-name:var(--font-display)] text-7xl font-semibold text-gradient">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-white">
          Signal lost in the mesh
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          This route doesn&apos;t exist in the Ralosy ecosystem.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Return home
        </Link>
      </div>
    </div>
  );
}
