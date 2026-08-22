import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/services-content";

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading title="How We Can Help" data-aos="fade-up" />

      <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {SERVICES.map((service, index) => (
          <li
            key={service.slug}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="h-full"
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col items-center rounded-lg px-2 py-3 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon name={service.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-primary group-hover:text-accent sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
