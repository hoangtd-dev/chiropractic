import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import type { Service } from "@/types";

export interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <Section spacing="sm">
      <div className="max-w-3xl" data-aos="fade-up">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <span aria-hidden="true">&larr;</span>
          All services
        </Link>

        <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface text-primary">
          <Icon name={service.icon} className="h-7 w-7" />
        </span>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl lg:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {service.detail?.intro ?? service.description}
        </p>
      </div>
    </Section>
  );
}
