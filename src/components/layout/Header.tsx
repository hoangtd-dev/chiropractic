import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import { SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <Link
          href="/"
          className="text-base font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg"
        >
          {SITE_NAME}
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
