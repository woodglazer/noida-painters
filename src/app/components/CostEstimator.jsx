import { ArrowUpRight } from "lucide-react";

export default function CostEstimator() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200" id="pricing-calculator">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Section Header - Exact matching upper sections */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#022b5c]">
            <span className="h-px w-8 bg-[#022b5c]" />
            Budget Planning
            <span className="h-px w-8 bg-[#022b5c]" />
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Paint Budget Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Want to estimate the painting cost for your apartment, villa, or office? Use Home Glazer’s online budget calculator to calculate accurate prices based on your room sizes, surface condition, and paint finishes.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://homeglazer.com/paint-budget-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#022b5c] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#011d3f]"
            >
              <span>Calculate Your Painting Cost</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
