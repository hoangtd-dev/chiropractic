import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import {
  ADDRESS,
  BOOKING_URL,
  CONTACT,
  HERO_IMAGE,
  SITE_DESCRIPTION,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <Image
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-surface/85 sm:bg-gradient-to-r sm:from-surface sm:from-25% sm:via-surface/85 sm:via-55% sm:to-transparent"
      />

      <div className="container-page section-y-lg">
        <div className="max-w-xl lg:max-w-[34rem]" data-aos="fade-up">
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-primary sm:text-5xl lg:text-6xl">
            <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
              {`Chiropractor in ${ADDRESS.suburb}, ${ADDRESS.state}`}
            </span>
            <span className="mt-4 block">
              Better <span className="text-accent">Flow.</span>
              <br />
              Better <span className="text-accent">Life.</span>
            </span>
          </h1>

          <span aria-hidden="true" className="mt-8 block h-px w-28 bg-accent" />

          <p className="mt-8 max-w-md text-base leading-relaxed text-primary/80 sm:text-lg">
            {SITE_DESCRIPTION}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={BOOKING_URL} className="text-base uppercase" fullWidthOnMobile>
              <Icon name="calendar" className="mr-3 h-5 w-5" />
              Book online
            </Button>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
            <Icon name="pin" className="h-5 w-5 text-accent" />
            {CONTACT.region}
          </p>
        </div>
      </div>
    </section>
  );
}
