import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-4 pt-20">
      <div
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-[rgba(13,110,104,0.12)] blur-3xl"
        aria-hidden
      />
      <div className="relative text-center">
        <p className="text-display text-7xl font-extrabold tracking-tight text-brand">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-ink">
          This page isn&apos;t in the ecosystem
        </h1>
        <p className="mt-2 text-sm text-muted">
          The route you requested doesn&apos;t exist on Ralosy.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Return home
        </Link>
      </div>
    </div>
  );
}
