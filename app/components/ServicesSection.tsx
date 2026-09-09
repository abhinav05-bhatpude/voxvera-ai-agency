
const services = [
  {
    number: "01",
    title: "AI Websites",
    description:
      "Modern websites designed to capture attention, generate enquiries, and turn visitors into leads.",
    features: [
      "Modern UI",
      "Mobile responsive",
      "Lead capture",
      "WhatsApp integration",
      "Booking systems",
      "AI features",
    ],
  },
  {
    number: "02",
    title: "AI Chatbots",
    description:
      "AI assistants that answer customer questions instantly and collect potential leads.",
    features: [
      "FAQ handling",
      "Business knowledge",
      "Lead collection",
      "Customer enquiries",
      "Appointment assistance",
    ],
  },
  {
    number: "03",
    title: "AI Agents",
    description:
      "AI agents that understand conversations, make decisions, and complete business tasks.",
    features: [
      "Lead qualification",
      "Customer support",
      "Appointment booking",
      "Information collection",
      "Human handoff",
    ],
  },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Automated workflows that connect your business tools and eliminate repetitive work.",
    features: [
      "Lead automation",
      "Follow-ups",
      "CRM integration",
      "Notifications",
      "Data management",
      "Workflow automation",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
            What we build
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
            Practical AI Systems for{" "}
            <span className="text-[#c5b8ae]">
              Real Businesses.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#927e70] sm:text-base">
            Choose the system that solves your biggest business problem, or
            combine multiple services into one connected workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-[#43291c] bg-[#1f120c] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#634331] hover:bg-[#24150e] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.12em] text-[#927e70]">
                  {service.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#43291c] text-sm text-[#927e70] transition-all duration-300 group-hover:border-[#6b4937] group-hover:text-[#f8f3ed]">
                  ↗
                </span>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#f8f3ed]">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#927e70]">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-[#43291c] bg-[#24150e] px-3 py-1.5 text-xs text-[#c5b8ae]"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-sm font-semibold text-[#f8f3ed] transition-transform duration-200 group-hover:translate-x-1"
              >
                Explore {service.title}
                <span className="ml-2">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

