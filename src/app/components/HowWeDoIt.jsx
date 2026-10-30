export default function HowWeDoIt() {
  const steps = [
    {
      num: "1",
      title: "Contact & Consultation",
      desc: "Call us or submit the form with your property details and painting requirements.",
    },
    {
      num: "2",
      title: "Free Site Inspection",
      desc: "Our painting supervisor visits your property to measure walls and inspect moisture or cracks.",
    },
    {
      num: "3",
      title: "Detailed Quotation",
      desc: "You get a clear itemized estimate with material specs, timeline, and exact pricing.",
    },
    {
      num: "4",
      title: "Painting & Handover",
      desc: "Our painters complete masking, sanding, and coating, followed by deep site cleaning.",
    },
  ];

  return (
    <section className="bg-[#f4f2ee] py-14 sm:py-18 lg:py-20 border-b border-stone-300/80">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header - Centered matching upper sections */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#022b5c]">
            <span className="h-px w-8 bg-[#022b5c]" />
            Workflow
            <span className="h-px w-8 bg-[#022b5c]" />
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            From the initial consultation to final inspection and clean handover, our process ensures a smooth and reliable painting experience.
          </p>
        </div>

        {/* Real contractor numbered list layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col">
              {/* Clean solid number */}
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded bg-[#022b5c] text-sm font-bold text-white">
                  {step.num}
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Title & Desc */}
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
