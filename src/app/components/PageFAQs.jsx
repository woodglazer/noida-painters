import { faqSchema } from "./page-faqs";

export default function PageFAQs({ faqs, title = "Frequently asked questions", intro, id = "faqs", className = "bg-white" }) {
  if (!faqs?.length) return null;
  const schema = faqSchema(faqs);

  return (
    <section id={id} className={`py-14 sm:py-18 lg:py-20 border-b border-stone-300/80 ${className}`} aria-labelledby={`${id}-heading`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#022b5c]">
            <span className="h-px w-8 bg-[#022b5c]" />
            Frequently Asked Questions
            <span className="h-px w-8 bg-[#022b5c]" />
          </p>
          <h2 id={`${id}-heading`} className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {intro}
            </p>
          )}
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group py-5 sm:py-6" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-slate-900 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span aria-hidden="true" className="shrink-0 text-2xl font-normal leading-none text-[#022b5c] transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl pr-8 text-sm leading-6 text-[#69645b] sm:text-base sm:leading-7">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
