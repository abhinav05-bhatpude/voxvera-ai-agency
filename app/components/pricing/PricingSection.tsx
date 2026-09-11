
const plans = [
  {
    number: "01",
    name: "AI Starter",
    description:
      "For businesses that need a stronger digital presence and a better way to capture enquiries.",
    includes: [
      "AI-powered website",
      "Lead capture system",
      "WhatsApp integration",
      "Booking or enquiry flow",
    ],
    label: "For getting started",
  },
  {
    number: "02",
    name: "AI Growth",
    description:
      "For businesses ready to automate lead qualification, follow-ups, and customer interactions.",
    includes: [
      "Everything in AI Starter",
      "AI chatbot or agent",
      "Lead qualification",
      "Automated follow-ups",
      "CRM integration",
    ],
    label: "For growing businesses",
    featured: true,
  },
  {
    number: "03",
    name: "AI Custom",
    description:
      "For businesses that need a connected AI system built around their specific operations.",
    includes: [
      "Custom AI agents",
      "Advanced automation",
      "Multi-step workflows",
      "Business system integrations",
      "Ongoing optimization",
    ],
    label: "For complex operations",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
            Engagement
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
            Start with what your business{" "}
            <span className="text-[#c5b8ae]">actually needs.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#927e70] sm:text-base">
            Every business has different workflows, tools, and priorities.
            We scope each project around the system you actually need rather
            than forcing you into a one-size-fits-all package.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.number}
              className={`group relative flex flex-col rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                plan.featured
                  ? "border-[#634331] bg-[#2a190f]"
                  : "border-[#43291c] bg-[#24150e] hover:border-[#634331]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-5 rounded-full border border-[#634331] bg-[#1a0f0a] px-3 py-1">
                  <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#f8f3ed]">
                    Most popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-[0.14em] text-[#634f43]">
                  {plan.number}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#43291c] text-xs text-[#927e70] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#f8f3ed]">
                  →
                </span>
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#f8f3ed]">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-xs leading-6 text-[#927e70] sm:text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="my-6 h-px bg-[#43291c]" />

              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                  Includes
                </p>

                <div className="mt-4 space-y-3">
                  {plan.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-xs text-[#f8f3ed]">
                        ✓
                      </span>

                      <span className="text-xs leading-5 text-[#c5b8ae]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
                  <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
                    Engagement
                  </p>

                  <p className="mt-1.5 text-xs font-medium text-[#f8f3ed]">
                    {plan.label}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#634f43]">
                    Final pricing depends on scope, integrations, and
                    workflow complexity.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-4 flex w-full items-center justify-center rounded-lg border border-[#43291c] px-5 py-3 text-xs font-semibold text-[#f8f3ed] transition-all duration-300 hover:border-[#634331] hover:bg-[#2a190f]"
                >
                  Discuss This Option
                  <span className="ml-2">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                How pricing works
              </p>

              <h3 className="mt-2 text-base font-semibold text-[#f8f3ed] sm:text-lg">
                We price the system, not the number of features.
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#927e70] sm:text-sm">
                Your final proposal is based on the business problem, required
                integrations, workflow complexity, and level of ongoing
                support.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg px-5 py-3 text-xs font-semibold"
              style={{
                backgroundColor: "#f8f3ed",
                color: "#1a0f0a",
              }}
            >
              Get a Custom Quote
              <span className="ml-2" style={{ color: "#1a0f0a" }}>
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```
