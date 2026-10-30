import { Poppins, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getSiteUrl } from "./site-url";
import ScrollReveal from "./components/ScrollReveal";
import CookieNotice from "./components/CookieNotice";
import WhatsAppButton from "./components/WhatsAppButton";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { BRAND_NAME, createSeoMetadata } from "./seo";
import { areas } from "./areas/areas";
import {
  BUSINESS_ADDRESS_DETAILS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
} from "@/lib/business-contact";

const siteUrl = getSiteUrl();

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const rootSeo = createSeoMetadata({
  title: "Painting Services in Noida | Noida Painters",
  description: "Painting services in Noida near me for flats, villas and offices: interior, exterior, wall textures and waterproofing. Book free site visit today.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BRAND_NAME,
    title: "Painting Services in Noida | Noida Painters",
    description: "Painting services in Noida near me for flats, villas and offices: interior, exterior, wall textures and waterproofing. Book free site visit today.",
    ...(siteUrl ? { url: siteUrl, images: ["/images/hero-image-two.webp"] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Services in Noida | Noida Painters",
    description: "Painting services in Noida near me for flats, villas and offices: interior, exterior, wall textures and waterproofing. Book free site visit today.",
    ...(siteUrl ? { images: ["/images/hero-image-two.webp"] } : {}),
  },
});

export const metadata = {
  ...rootSeo,
  metadataBase: new URL(siteUrl || "https://www.noidapainters.com"),
  title: { default: rootSeo.title.absolute, template: "%s" },
  applicationName: BRAND_NAME,
};

export default function RootLayout({ children }) {
  const businessSchema = siteUrl
    ? {
        "@context": "https://schema.org",
        "@type": "HousePainter",
        "@id": `${siteUrl}/#local-business`,
        name: BRAND_NAME,
        url: siteUrl,
        logo: `${siteUrl}/noida-painters-logo.png`,
        image: `${siteUrl}/images/hero-image-two.webp`,
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        priceRange: "₹₹",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5034,
          longitude: 77.2465,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "128",
          bestRating: "5",
          worstRating: "1",
        },
        address: {
          "@type": "PostalAddress",
          ...BUSINESS_ADDRESS_DETAILS,
        },
        areaServed: [
          { "@type": "City", name: "Noida", alternateName: "Gautam Buddha Nagar" },
          ...areas.map(({ name }) => ({ "@type": "Place", name })),
        ],
      }
    : null;

  return (
    <html lang="en-IN" className={`${spaceGrotesk.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        {children}
        {businessSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
            }}
          />
        )}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WVX3B89NZY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WVX3B89NZY');
          `}
        </Script>
        <ScrollReveal />
        <AnalyticsEvents />
        <CookieNotice />
        <WhatsAppButton />
                                        {/* Floating Separate Circular Action Buttons (Horizontal at Bottom) */}
        <div className="fixed inset-x-0 bottom-4 z-40 flex items-center justify-center gap-5 pointer-events-none md:hidden">
          {/* Call Button - Circular */}
          <a
            href="tel:+919717256514"
            aria-label="Call Noida Painters"
            title="Call Us"
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#022b5c] text-white shadow-lg shadow-slate-900/25 transition-transform active:scale-90"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* WhatsApp Button - Circular */}
          <a
            href="https://wa.me/919717256514?text=Hello%20Noida%20Painters%2C%20I%20would%20like%20to%20discuss%20a%20painting%20project."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="WhatsApp"
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/25 transition-transform active:scale-90"
          >
            <svg viewBox="0 0 32 32" className="h-5.5 w-5.5 fill-current">
              <path d="M16.02 3a12.8 12.8 0 0 0-10.9 19.52L3.4 29l6.65-1.74A12.9 12.9 0 1 0 16.02 3Zm0 23.4c-1.95 0-3.86-.52-5.53-1.52l-.4-.24-3.95 1.03 1.05-3.84-.26-.42A10.48 10.48 0 1 1 16.02 26.4Zm5.75-7.85c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.22 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.1 1.32 3.31c.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z" />
            </svg>
          </a>

          {/* Quote / Inquiry Button - Circular */}
          <a
            href="/contact"
            aria-label="Get a Painting Quote"
            title="Get Quote"
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#022b5c] shadow-lg shadow-slate-900/20 transition-transform active:scale-90"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
