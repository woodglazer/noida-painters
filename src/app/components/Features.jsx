import { Building2, Check, Paintbrush, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Trusted Expertise",
    description:
      "Home Glazer reports completing more than 5,000 projects since it was founded in 2008.",
    icon: Check,
  },
  {
    title: "Skilled Experts",
    description:
      "A dedicated team to prepare surfaces and apply the agreed finish with care and precision.",
    icon: Paintbrush,
  },
  {
    title: "Free Site Visit",
    description:
      "Discuss your property, requirements, and suitable painting options on site at no cost.",
    icon: ShieldCheck,
  },
  {
    title: "Site Supervision",
    description:
      "Structured project coordination and active on-site supervision for a smooth workflow.",
    icon: Building2,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#022b5c]">
            <span className="h-px w-8 bg-[#022b5c]" />
            Our promise
            <span className="h-px w-8 bg-[#022b5c]" />
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why choose Noida Painters?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Compare services, discuss the condition of your surfaces, and plan a suitable finish for your home or business in Noida.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative flex flex-col items-center rounded-xl bg-[#022b5c] p-6 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#011d3f] hover:shadow-2xl hover:shadow-[#022b5c]/30 sm:p-7 border border-[#022b5c]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 transition-all duration-300 group-hover:bg-white group-hover:text-[#022b5c]">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
