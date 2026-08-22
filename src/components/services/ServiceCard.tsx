import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { Service } from "@/types";

export interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-8"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-primary transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon name={service.icon} className="h-7 w-7" />
      </span>

      <h2 className="mt-5 text-lg font-semibold text-balance text-primary sm:text-xl">
        {service.title}
      </h2>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
        {service.description}
      </p>

      <span
        aria-hidden="true"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent"
      >
        Learn more
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </span>
    </Link>
  );
}
