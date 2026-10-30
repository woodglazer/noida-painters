"use client";

import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../services/services";
import { BRAND_NAME } from "../seo";
import { BUSINESS_PHONE, BUSINESS_PHONE_HREF } from "@/lib/business-contact";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200 bg-white backdrop-blur-md">
      {/* Main Full-Width Header Bar */}
      <nav aria-label="Main navigation" className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2.5 sm:px-8 sm:py-3.5 lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={`${BRAND_NAME} - Home`}
        >
          <Image
            src="/noida-logo-transparent.png"
            alt={`${BRAND_NAME} logo`}
            width={220}
            height={75}
            priority
            className="h-10 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 text-sm font-semibold text-[#0B1F4D] lg:flex xl:gap-9">
          {/* Services Dropdown */}
          <div className="group relative">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 py-2 transition-colors hover:text-[#022b5c] focus-visible:text-[#022b5c]"
            >
              <span>Services</span>
              <ChevronDown size={15} className="transition-transform group-hover:rotate-180" aria-hidden="true" />
            </Link>
            
            <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#334155] transition-colors hover:bg-slate-50 hover:text-[#022b5c]"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="mt-1 flex items-center justify-between border-t border-slate-100 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#022b5c] hover:text-[#011d3f]"
                >
                  <span>All Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative py-2 transition-colors hover:text-[#022b5c] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#022b5c] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Action: Direct Phone Dial & Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Desktop/Tablet Call Button (No Border, Clean Flat Style) */}
          <a
            href={BUSINESS_PHONE_HREF}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-transparent px-2.5 py-1.5 text-sm font-bold text-[#022b5c] transition-colors hover:text-[#011d3f]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#022b5c]/10 text-[#022b5c]">
              <Phone size={14} />
            </div>
            <span>{BUSINESS_PHONE}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#0f172a] transition-colors hover:bg-slate-100 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-5 py-4 shadow-xl lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {/* Mobile Services toggle */}
            <div>
              <div className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-[#0f172a] hover:bg-slate-50">
                <Link
                  href="/services"
                  className="flex-1"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <button
                  type="button"
                  aria-label={isServicesOpen ? "Hide services" : "Show services"}
                  className="p-1 text-[#64748b]"
                  onClick={() => setIsServicesOpen((open) => !open)}
                >
                  <ChevronDown size={18} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {isServicesOpen && (
                <div className="ml-3 my-1 space-y-1 border-l-2 border-[#022b5c]/30 pl-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block py-2 text-sm text-[#475569] hover:text-[#022b5c]"
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-[#0f172a] hover:bg-slate-50 hover:text-[#022b5c]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={BUSINESS_PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#022b5c] py-2.5 text-sm font-semibold text-white"
              >
                <Phone size={16} />
                <span>Call {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
