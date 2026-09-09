const problems = [
  {
    number: "01",
    title: "Missed Leads",
    description:
      "Potential customers enquire outside business hours and never receive a timely response.",
  },
  {
    number: "02",
    title: "Slow Responses",
    description:
      "Customers wait too long for answers while your team handles conversations manually.",
  },
  {
    number: "03",
    title: "Repetitive Enquiries",
    description:
      "Your team keeps answering the same questions instead of focusing on higher-value work.",
  },
  {
    number: "04",
    title: "Manual Follow-ups",
    description:
      "Leads get forgotten because follow-ups depend on someone remembering to send them.",
  },
  {
    number: "05",
    title: "Outdated Websites",
    description:
      "Your website may look fine but does little to actively capture and qualify potential customers.",
  },
  {
    number: "06",
    title: "Scattered Information",
    description:
      "Customer details, enquiries, and follow-ups live across different tools and conversations.",
  },
];

export default function ProblemSection() {
  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
            The problem
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
            Most Businesses Don&apos;t Need More Tools.
            <span className="block text-[#c5b8ae]">
              They Need Better Systems.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#927e70] sm:text-base">
            Businesses lose time and opportunities when everyday processes
            depend on manual work. We identify those gaps and turn them into
            practical systems.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-[#43291c] bg-[#1f120c] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#634331] hover:bg-[#24150e]"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.12em] text-[#927e70]">
                  {problem.number}
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#43291c] text-xs text-[#927e70] transition-all duration-300 group-hover:border-[#6b4937] group-hover:text-[#f8f3ed]">
                  →
                </span>
              </div>

              {/* Content */}
              <div className="mt-12">
                <h3 className="text-lg font-medium tracking-[-0.02em] text-[#f8f3ed]">
                  {problem.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[#927e70]">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}