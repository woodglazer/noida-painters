import Link from "next/link";
import { getSiteUrl } from "../site-url";

export default function Breadcrumbs({ items, inline = false, onDark = false }) {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(siteUrl && item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <div className={inline ? "relative z-30" : "pointer-events-none absolute inset-x-0 top-[5.25rem] z-30"}>
      <div className={inline ? "" : "mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12"}>
        <nav
          aria-label="Breadcrumb"
          className={`pointer-events-auto flex w-full min-w-0 max-w-full items-center gap-2 overflow-hidden whitespace-nowrap text-xs ${onDark ? "text-white/75" : "text-[#69645b]"}`}
        >
          {items.map((item, index) => (
            <span key={`${item.label}-${index}`} className={`inline-flex min-w-0 items-center gap-2 ${index === items.length - 1 ? "flex-1" : "shrink-0"}`}>
              {index > 0 && <span aria-hidden="true" className="text-[#022b5c]">/</span>}
              {index === items.length - 1 ? (
                <span aria-current="page" title={item.label} className={`block min-w-0 truncate font-semibold ${onDark ? "text-white" : "text-[#29251f]"}`}>{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-[#022b5c]">{item.label}</Link>
              )}
            </span>
          ))}
        </nav>
      </div>
      {items.length > 1 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      )}
    </div>
  );
}
