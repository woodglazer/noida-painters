"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_PHONE_HREF } from "@/lib/business-contact";

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const projectMessage = [
      "Hello Noida Painters, I would like to book a Free Site Visit.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Location: ${formData.get("message") || "Free Site Visit Request"}`,
    ].join("\n");

    const encodedWhatsappUrl = `https://wa.me/919717256514?text=${encodeURIComponent(projectMessage)}`;
    const whatsappWindow = window.open("about:blank", "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;

    setIsSubmitting(true);
    setFormMessage("");

    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          service: "Free Site Visit Consultation",
          message: formData.get("message") || "Free Site Visit Request",
        }),
      });

      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          service: "Free Site Visit",
          method: "hero_form",
        });
      }

      form.reset();
      setFormMessage("Request received! Connecting to WhatsApp...");
      if (whatsappWindow) {
        whatsappWindow.location.href = encodedWhatsappUrl;
      } else {
        window.location.href = encodedWhatsappUrl;
      }
    } catch {
      if (whatsappWindow) {
        whatsappWindow.location.href = encodedWhatsappUrl;
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative flex min-h-[82vh] w-full items-center pt-24 pb-16 sm:min-h-[85vh] sm:pt-28 sm:pb-20 lg:min-h-[88vh] lg:pt-32 lg:pb-24">
      {/* Background Hero Image - Full Width */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/noida-hero-room.webp"
          alt="Painting Services in Noida"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft natural dark tint */}
        <div className="absolute inset-0 bg-slate-950/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: H1, Paragraph, and Phone Call Button */}
          <div className="text-white lg:col-span-7 xl:col-span-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Painting Services in Noida
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Looking for professional <strong className="font-semibold text-white">painting services near me in Noida</strong>? We provide reliable interior and exterior <strong className="font-semibold text-white">painting services in Noida</strong> and Greater Noida for high-rise flats, villas, and offices with dust-free sanding and genuine branded paints.
            </p>

            <div className="mt-8">
              <a
                href={BUSINESS_PHONE_HREF}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#022b5c] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#011d3f] border border-white/20"
              >
                <Phone size={17} />
                <span>Call {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Compact Form (No required services dropdown) */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end xl:col-span-4">
            <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-xl font-bold text-slate-900">
                  Book a Free Site Visit
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Leave your details and our team will get in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                <div>
                  <label htmlFor="hero-name" className="block text-xs font-medium text-slate-700">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="hero-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#022b5c] focus:outline-none focus:ring-1 focus:ring-[#022b5c]"
                  />
                </div>

                <div>
                  <label htmlFor="hero-phone" className="block text-xs font-medium text-slate-700">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="hero-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#022b5c] focus:outline-none focus:ring-1 focus:ring-[#022b5c]"
                  />
                </div>

                <div>
                  <label htmlFor="hero-message" className="block text-xs font-medium text-slate-700">
                    Society / Locality
                  </label>
                  <input
                    id="hero-message"
                    name="message"
                    type="text"
                    placeholder="e.g. Sector 137, Noida"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#022b5c] focus:outline-none focus:ring-1 focus:ring-[#022b5c]"
                  />
                </div>

                {formMessage && (
                  <p className="rounded bg-emerald-50 p-2 text-xs font-medium text-emerald-800">
                    {formMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#022b5c] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#011d3f] disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Please wait..." : "Request Call Back"}</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
