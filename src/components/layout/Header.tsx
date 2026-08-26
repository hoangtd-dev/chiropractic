import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import { SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <Link href="/" className="flex items-center">
          <img
            src="/brand/logo.webp"
            alt={SITE_NAME}
            width={440}
            height={114}
            fetchPriority="high"
            decoding="sync"
            draggable={false}
            className="h-10 w-auto select-none object-contain sm:h-12 md:h-14"
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
