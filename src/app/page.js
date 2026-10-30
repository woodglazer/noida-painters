import Features from "./components/Features";
import FAQSection from "./components/FAQSection";
import Contact from "./components/Contact";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import HowWeDoIt from "./components/HowWeDoIt";
import CostEstimator from "./components/CostEstimator";
import Navbar from "./components/navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import VisualizeRoomColor from "./components/VisualizeRoomColor";
import { getSiteUrl } from "./site-url";
import { BRAND_NAME } from "./seo";

const siteUrl = getSiteUrl();

export const metadata = {
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
};

export default function Home() {
  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Wall Texture Painting",
    "Waterproofing",
    "Wood Polish and Metal Finishes",
    "Commercial Painting",
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: BRAND_NAME,
        description: "Top-rated painting services in Noida near me. Interior, exterior, texture painting, and waterproofing for residential societies and commercial properties.",
        ...(siteUrl
          ? { url: siteUrl }
          : {}),
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": siteUrl ? `${siteUrl}/#organization` : "#organization",
        name: BRAND_NAME,
        telephone: "+91 97172 56514",
        parentOrganization: {
          "@type": "Organization",
          name: "Home Glazer",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 97172 56514",
          contactType: "customer service",
        },
        ...(siteUrl ? { url: siteUrl } : {}),
      },
      ...services.map((name) => ({
        "@type": "Service",
        name,
        serviceType: name,
        description: `${name} for residential and commercial properties in Noida and Greater Noida. Scope and recommendations are confirmed after discussing the site and surfaces.`,
        areaServed: [
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Greater Noida" },
        ],
        provider: {
          "@type": "Organization",
          "@id": siteUrl ? `${siteUrl}/#organization` : "#organization",
          ...(!siteUrl ? { name: BRAND_NAME } : {}),
        },
      })),
    ],
  };

  return (
    <main className="relative min-h-screen bg-[#f6f6f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <Services />
      <HowWeDoIt />
      <CostEstimator />
      <VisualizeRoomColor />
      <Reviews />
      <BlogSection />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
