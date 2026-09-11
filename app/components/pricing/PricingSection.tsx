
const plans = [
  {
    number: "01",
    name: "Starter",
    price: "₹15,000",
    description:
      "A professional business website that builds credibility and gives customers a simple way to discover and contact your business.",
    includes: [
      "Professional business website",
      "Mobile-responsive design",
      "Services & business information",
      "Contact & enquiry form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Deployment & domain connection",
    ],
    label: "Professional Website",
    exampleTitle: "Example: Local Restaurant",
    example:
      "A restaurant gets a modern website with its menu, location, business information, WhatsApp contact, and an enquiry form.",
  },
  {
    number: "02",
    name: "Medium",
    price: "₹20,000",
    description:
      "A professional website with your own AI chatbot that communicates with customers, answers questions, and captures potential leads.",
    includes: [
      "Everything in Starter",
      "Custom AI chatbot",
      "Business-specific AI knowledge",
      "24/7 customer conversations",
      "Lead collection",
      "Lead qualification",
      "Website AI integration",
    ],
    label: "Website + AI Chatbot",
    featured: true,
    exampleTitle: "Example: Real Estate Business",
    example:
      "A property business gets an AI chatbot that answers property questions, understands buyer requirements, collects lead details, and qualifies prospects.",
  },
  {
    number: "03",
    name: "Pro",
    price: "₹25,000",
    description:
      "A complete AI-powered system that communicates with customers and automatically performs repetitive business tasks.",
    includes: [
      "Everything in Pro",
      "AI-powered automation",
      "Automated lead processing",
      "Customer follow-ups",
      "Lead & CRM updates",
      "Team notifications",
      "Custom business workflows",
    ],
    label: "Website + AI + Automation",
    exampleTitle: "Example: Healthcare Clinic",
    example:
      "A real estate agency gets an AI system that talks to buyers, collects property requirements, qualifies leads, sends follow-ups, updates the CRM, and alerts the sales team when a high-intent buyer is ready.",
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
            Choose how much{" "}
            <span className="text-[#c5b8ae]">
              your business wants to automate.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
            Start with a professional website, add an AI chatbot, or build a
            complete system that can communicate with customers and take
            automated actions.
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

                <p className="mt-3 min-h-[96px] text-xs leading-6 text-[#927e70] sm:text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-3xl font-semibold tracking-[-0.035em] text-[#f8f3ed]">
                  {plan.price}
                </p>

                <p className="mt-1 text-[10px] text-[#634f43]">
                  One-time starting price
                </p>
              </div>

              <div className="my-6 h-px bg-[#43291c]" />

              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                  What you get
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

              <div className="mt-7 rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
                <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]">
                  {plan.exampleTitle}
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#c5b8ae]">
                  {plan.example}
                </p>
              </div>

              <div className="mt-auto pt-6">
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
                Need a custom system?
              </p>

              <h3 className="mt-2 text-base font-semibold text-[#f8f3ed] sm:text-lg">
                We can build AI around your specific business workflow.
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#927e70] sm:text-sm">
                Need advanced AI agents, complex automations, CRM
                integrations, or multi-step workflows? We can scope a custom
                solution around your operations.
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

