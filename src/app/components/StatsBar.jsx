export default function StatsBar() {
  const stats = [
    {
      value: "2008",
      label: "Serving Customers Since",
      subtext: "16+ years of painting experience",
    },
    {
      value: "5,000+",
      label: "Projects Completed",
      subtext: "Homes, apartments & offices",
    },
    {
      value: "100%",
      label: "Genuine Brand Paints",
      subtext: "Asian Paints, Berger & Dulux",
    },
    {
      value: "4.9 / 5",
      label: "Customer Rating",
      subtext: "Trusted by families across NCR",
    },
  ];

  return (
    <section className="border-b border-stone-300/80 bg-[#f4f2ee]" aria-label="Company Experience & Metrics">
      <div className="mx-auto max-w-8xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <dl className="grid grid-cols-2 gap-6 divide-y-0 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                index !== 0 ? "sm:border-l sm:border-stone-300 sm:pl-8" : ""
              }`}
            >
              <dd className="text-3xl font-extrabold tracking-tight text-[#022b5c] sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm font-semibold text-slate-800">
                {stat.label}
              </dt>
              <p className="mt-0.5 text-xs text-slate-500">
                {stat.subtext}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
