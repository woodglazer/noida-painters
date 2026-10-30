import Image from "next/image";
import Link from "next/link";
import { services } from "../services/services";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200" aria-labelledby="services-section-title">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header - Centered like upper section */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#022b5c]">
            <span className="h-px w-8 bg-[#022b5c]" />
            Comprehensive Services
            <span className="h-px w-8 bg-[#022b5c]" />
          </p>
          <h2 id="services-section-title" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Painting &amp; Finishing Tailored for Noida Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            From high-rise apartments with strict society guidelines to spacious independent bungalows, our solutions ensure long-lasting quality and immaculate finishes.
          </p>
        </div>

        {/* Services Grid: Image-Only Cards with Heading Overlay Linking Directly */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative block aspect-[16/11] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#022b5c] hover:shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Natural Dark Gradient for High-Contrast Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity duration-300 group-hover:from-slate-950/90" />

              {/* Top Index Tag */}
              <span className="absolute top-3.5 left-3.5 rounded-md bg-white/90 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-slate-900">
                0{index + 1}
              </span>

              {/* Bottom Overlay: Heading with Arrow Link */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-3 text-white">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Service
                  </span>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-slate-100 sm:text-2xl">
                    {service.title}
                  </h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#022b5c] group-hover:scale-110">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
