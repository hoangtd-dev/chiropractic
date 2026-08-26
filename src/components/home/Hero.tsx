import Button from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
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
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <ResponsiveImage
          image={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-left sm:object-[70%_center]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-surface/90 md:bg-surface/50 lg:bg-transparent lg:bg-gradient-to-r lg:from-surface lg:from-25% lg:via-surface/25 lg:via-55% lg:to-transparent"
      />

      <div className="container-page section-y-lg">
        <div className="max-w-xl text-center sm:text-left lg:max-w-[34rem]" data-aos="fade-up">
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

          <span aria-hidden="true" className="mx-auto mt-8 block h-px w-28 bg-accent sm:mx-0" />

          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-primary/80 sm:mx-0 sm:text-lg">
            {SITE_DESCRIPTION}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={BOOKING_URL} className="text-base uppercase" fullWidthOnMobile>
              <Icon name="calendar" className="mr-3 h-5 w-5" />
              Book online
            </Button>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-primary sm:justify-start">
            <Icon name="pin" className="h-5 w-5 text-accent" />
            {CONTACT.region}
          </p>
        </div>
      </div>
    </section>
  );
}
