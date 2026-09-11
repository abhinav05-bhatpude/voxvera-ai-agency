
const plans = [
  {
    number: "01",
    name: "Starter",
    price: "₹4,999",
    description:
      "A professional website designed to give your business a strong digital presence.",
    includes: [
      "Modern responsive website",
      "Mobile-friendly design",
      "Lead capture form",
      "WhatsApp integration",
      "Basic enquiry flow",
    ],
    label: "Website",
  },
  {
    number: "02",
    name: "Pro",
    price: "₹9,999",
    description:
      "A smarter website with AI-powered customer interactions and lead handling.",
    includes: [
      "Everything in Starter",
      "AI chatbot",
      "AI-powered customer responses",
      "Lead qualification",
      "Smart enquiry handling",
    ],
    label: "Website + AI",
    featured: true,
  },
  {
    number: "03",
    name: "Scale",
    price: "₹14,999",
    description:
      "A complete AI-powered system that connects your website, AI, and business workflows.",
    includes: [
      "Everything in Pro",
      "AI automation",
      "Automated follow-ups",
      "Workflow automation",
      "Business process integration",
    ],
    label: "Website + AI + Automation",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
            Pricing
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
            Start small.{" "}
            <span className="text-[#c5b8ae]">
              Build smarter.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#927e70] sm:text-base">
            Choose the level of AI your business needs today. You can always
            upgrade as your business grows.
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

              <div className="mt-6">
                <p className="text-3xl font-semibold tracking-[-0.035em] text-[#f8f3ed]">
                  {plan.price}
                </p>

                <p className="mt-1 text-[10px] text-[#634f43]">
                  Starting price
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
                    Package
                  </p>

                  <p className="mt-1.5 text-xs font-medium text-[#f8f3ed]">
                    {plan.label}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-4 flex w-full items-center justify-center rounded-lg border border-[#43291c] px-5 py-3 text-xs font-semibold text-[#f8f3ed] transition-all duration-300 hover:border-[#634331] hover:bg-[#2a190f]"
                >
                  Get Started
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
                Need something bigger?
              </p>

              <h3 className="mt-2 text-base font-semibold text-[#f8f3ed] sm:text-lg">
                We can build a custom AI system around your business.
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#927e70] sm:text-sm">
                Custom AI agents, advanced automations, CRM integrations,
                multi-step workflows, and other business-specific systems can
                be scoped separately.
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
              Discuss Custom Work
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

