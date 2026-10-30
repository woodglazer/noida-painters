"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { ENQUIRY_SERVICES } from "@/lib/enquiry-config";
import Link from "next/link";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  BUSINESS_PHONE_HREF,
} from "@/lib/business-contact";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const projectMessage = [
      "Hello Noida Painters, I would like to request a painting quote.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Service: ${formData.get("service")}`,
      `Project details: ${formData.get("message") || "Not provided"}`,
    ].join("\n");
    const encodedWhatsappUrl = `https://wa.me/919717256514?text=${encodeURIComponent(projectMessage)}`;
    const whatsappWindow = window.open("about:blank", "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }

    setIsSubmitting(true);
    setFormError("");
    setFormMessage("");
    setWhatsappUrl("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We could not save your enquiry.");
      }

      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          service: formData.get("service"),
          method: "enquiry_form",
        });
      }

      form.reset();
      setFormMessage("Your enquiry has been saved. Continue in WhatsApp to send it.");
      if (whatsappWindow) {
        whatsappWindow.location.href = encodedWhatsappUrl;
      } else {
        setWhatsappUrl(encodedWhatsappUrl);
      }
    } catch (error) {
      whatsappWindow?.close();
      setFormError(
        error instanceof Error
          ? error.message
          : "We could not save your enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClassName =
    "mt-2 w-full rounded-md border border-[#dedbd4] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#022b5c] focus:ring-2 focus:ring-[#022b5c]/20";

  return (
    <section id="contact" className="bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200">
      <div className="mx-auto grid max-w-8xl gap-8 px-5 sm:px-8 lg:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="text-left">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
            <span className="h-px w-8 bg-[#022b5c]" />
            Get in touch
          </p>
          <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
            Let’s talk about your space
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Looking for painters in Noida or Greater Noida? Noida Painters by
            Home Glazer offers interior and exterior home painting, wall
            textures, waterproofing, wood and metal finishes, and commercial
            painting. Share your requirements for a quote for your home,
            apartment, office, or shop.
          </p>
          <a
            href={BUSINESS_PHONE_HREF}
            className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-slate-900 transition-colors hover:text-[#022b5c]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#022b5c] shadow-sm">
              <Phone size={17} strokeWidth={1.7} aria-hidden="true" />
            </span>
            {BUSINESS_PHONE}
          </a>
          <a
            href={`mailto:${BUSINESS_EMAIL}`}
            className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-slate-900 transition-colors hover:text-[#022b5c]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#022b5c] shadow-sm">
              <Mail size={17} strokeWidth={1.7} aria-hidden="true" />
            </span>
            {BUSINESS_EMAIL}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#514b41]">
              Your name
              <input
                className={fieldClassName}
                type="text"
                name="name"
                autoComplete="name"
                minLength={2}
                maxLength={120}
                placeholder="Enter your name"
                required
              />
            </label>

            <label className="text-sm font-medium text-[#514b41]">
              Phone number
              <input
                className={fieldClassName}
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                maxLength={30}
                placeholder="Enter your phone number"
                required
              />
            </label>

            <label className="text-sm font-medium text-[#514b41] sm:col-span-2">
              Service you need
              <select className={fieldClassName} name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                {ENQUIRY_SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-[#514b41] sm:col-span-2">
              Project details <span className="font-normal text-[#817a6e]">(optional)</span>
              <textarea
                className={`${fieldClassName} min-h-28 resize-y`}
                name="message"
                maxLength={2000}
                placeholder="Property type, area, or anything else we should know"
                rows={4}
              />
            </label>
          </div>

          <button
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#022b5c] px-5 text-sm font-bold text-white transition-colors hover:bg-[#011d3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#022b5c] sm:w-auto"
            type="submit"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          >
            {isSubmitting ? "Saving enquiry..." : "Send enquiry on WhatsApp"}
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-[#817a6e]">
            We save your details to respond to your request. WhatsApp opens for
            you to review and send the message. See our{" "}
            <Link href="/privacy-policy" className="font-semibold underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
          {formError && (
            <p role="alert" className="mt-3 text-sm text-red-700">
              {formError}
            </p>
          )}
          {formMessage && (
            <p role="status" className="mt-3 text-sm text-green-800">
              {formMessage}
            </p>
          )}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#022b5c] hover:text-[#011d3f]"
            >
              Continue to WhatsApp
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </form>
      </div>
    </section>
  );
}
