import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../services/services";
import { BRAND_NAME } from "../seo";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  BUSINESS_PHONE_HREF,
  DISPLAY_ADDRESS,
} from "@/lib/business-contact";
import { areas } from "../areas/areas";
import { getPublishedBlogPosts } from "@/lib/blogs";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "Painting Guides", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Cookie Policy", href: "/cookies" },
];

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();
  const allPosts = await getPublishedBlogPosts();
  const latestBlogs = (allPosts || []).slice(0, 10);

  return (
    <footer className="border-t border-stone-300/80 bg-[#f4f2ee] text-stone-700">
      {/* Main footer content */}
      <div className="mx-auto max-w-8xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand column */}
            <div>
              <Link
                href="/"
                className="mb-4 inline-flex items-center"
                aria-label={`${BRAND_NAME} - Home`}
              >
                <Image
                  src="/noida-logo-transparent.png"
                  alt={`${BRAND_NAME} logo`}
                  width={220}
                  height={75}
                  priority
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </Link>
              <p className="text-xs font-bold uppercase tracking-wider text-[#022b5c]">
                A Brand by Home Glazer (Est. 2008)
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600">
                Professional, reliable painting and waterproofing services across Noida and Greater Noida for residential societies, apartments, and luxury villas.
              </p>

              {/* Contact info */}
              <div className="mt-6 space-y-2.5">
                <a
                  href={BUSINESS_PHONE_HREF}
                  className="flex items-center gap-3 text-sm font-semibold text-stone-900 transition-colors hover:text-[#022b5c]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#022b5c] shadow-sm border border-stone-200">
                    <Phone size={15} strokeWidth={2} />
                  </span>
                  <span>{BUSINESS_PHONE}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-center gap-3 text-sm font-medium text-stone-700 transition-colors hover:text-[#022b5c]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#022b5c] shadow-sm border border-stone-200">
                    <Mail size={15} strokeWidth={2} />
                  </span>
                  <span>{BUSINESS_EMAIL}</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-stone-600">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#022b5c] shadow-sm border border-stone-200">
                    <MapPin size={15} strokeWidth={2} />
                  </span>
                  <span className="mt-1">{DISPLAY_ADDRESS}</span>
                </div>
              </div>
            </div>

            {/* Services column */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone-900">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-stone-600 transition-colors hover:text-[#022b5c]"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links column */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone-900">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-600 transition-colors hover:text-[#022b5c]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free Quote Callout column */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone-900">
                Site Inspection
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                Need an expert to evaluate your property? Schedule a free on-site consultation with accurate laser measurements.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="tel:+919717256514"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#022b5c] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#011d3f]"
                >
                  <Phone size={14} />
                  <span>Call +91 97172 56514</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 shadow-sm transition-all hover:bg-stone-50"
                >
                  <span>Book Free Visit</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Areas We Serve in Noida - Tag Pills */}
          <section
            className="mt-12 border-t border-stone-300/80 pt-8"
            aria-labelledby="footer-areas-heading"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2
                id="footer-areas-heading"
                className="text-xs font-bold uppercase tracking-wider text-stone-900"
              >
                Key Areas &amp; Societies We Serve in Noida
              </h2>
              <Link
                href="/areas"
                className="text-xs font-bold text-[#022b5c] hover:underline"
              >
                View all localities &rarr;
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-stone-600">
              {areas.map((area, index) => (
                <span key={area.slug} className="inline-flex items-center gap-2.5">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="transition-colors hover:text-[#022b5c] hover:underline"
                  >
                    {area.seoKeyword || `Painting Services in ${area.name}`}
                  </Link>
                  {index < areas.length - 1 && (
                    <span className="text-stone-400 select-none">•</span>
                  )}
                </span>
              ))}
            </div>
          </section>

          {/* Latest Blogs / Painting Guides - Dot Separated */}
          {latestBlogs.length > 0 && (
            <section
              className="mt-8 border-t border-stone-300/80 pt-6"
              aria-labelledby="footer-blogs-heading"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Link
                  href="/blog"
                  id="footer-blogs-heading"
                  className="text-xs font-bold uppercase tracking-wider text-stone-900 transition-colors hover:text-[#022b5c] hover:underline"
                >
                  New Blogs &amp; Guides
                </Link>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-[#022b5c] hover:underline"
                >
                  View all blogs &rarr;
                </Link>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-stone-600">
                {latestBlogs.map((blog, index) => (
                  <span key={blog.slug} className="inline-flex items-center gap-2.5">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="transition-colors hover:text-[#022b5c] hover:underline"
                    >
                      {blog.title}
                    </Link>
                    {index < latestBlogs.length - 1 && (
                      <span className="text-stone-400 select-none">•</span>
                    )}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Copyright & Legal */}
          <div className="mt-10 border-t border-stone-300/80 pt-6 sm:flex sm:items-center sm:justify-between text-xs text-stone-500">
            <p>
              &copy; {currentYear} Noida Painters by Home Glazer. All rights reserved.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 sm:mt-0">
              <span>Serving Noida &amp; Greater Noida (UP)</span>
              <Link href="/privacy-policy" className="hover:text-[#022b5c] hover:underline">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="hover:text-[#022b5c] hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
