import type { SVGProps } from "react";

/** Geometric R mark. Keep in sync with public/logo.svg and src/app/icon.svg. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect width="32" height="32" fill="#0A3F3C" />
      <path fill="#F7FAF8" d="M8 6h5v20H8z" />
      <path
        fill="#F7FAF8"
        d="M13 6h5.2C22.6 6 25.2 8.5 25.2 12.2 25.2 15.9 22.6 18.4 18.2 18.4H13V6z"
      />
      <path fill="#0A3F3C" d="M13 9.4h4.1c2.2 0 3.5 1.1 3.5 2.8s-1.3 2.8-3.5 2.8H13V9.4z" />
      <path fill="#F7FAF8" d="M12 15.2 25.4 26h-4.8L10.4 17.8z" />
    </svg>
  );
}
