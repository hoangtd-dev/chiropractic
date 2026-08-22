import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border py-8 pb-safe sm:py-10">
      <div className="container-page flex flex-col gap-4 md:flex-row-reverse md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center text-sm text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted">
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
