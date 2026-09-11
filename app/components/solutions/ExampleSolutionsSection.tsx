
const solutions = [
  {
    number: "01",
    category: "Real Estate",
    title: "Turn property enquiries into qualified leads.",
    description:
      "Instead of your sales team answering every enquiry manually, an AI system can understand what buyers are looking for and prepare qualified opportunities.",
    flow: [
      "Customer asks about a property",
      "AI collects budget, location & requirements",
      "Lead is qualified automatically",
      "Sales team receives the opportunity",
    ],
  },
  {
    number: "02",
    category: "Healthcare",
    title: "Let your clinic handle routine enquiries automatically.",
    description:
      "An AI assistant can handle common questions, collect basic information, and help customers move toward the right appointment workflow.",
    flow: [
      "Patient asks a common question",
      "AI provides business-approved information",
      "Patient details are collected",
      "Appointment workflow is triggered",
    ],
  },
  {
    number: "03",
    category: "Education",
    title: "Convert course enquiries into counselling opportunities.",
    description:
      "An AI system can answer questions about courses, understand student requirements, collect contact details, and route interested students to your team.",
    flow: [
      "Student asks about a course",
      "AI explains relevant information",
      "Student requirements are collected",
      "Counselling follow-up is triggered",
    ],
  },
  {
    number: "04",
    category: "E-commerce",
    title: "Automate repetitive customer conversations.",
    description:
      "An AI assistant can help customers with product questions, order-related enquiries, and common support requests while your team focuses on more important work.",
    flow: [
      "Customer asks about a product or order",
      "AI understands the request",
      "Relevant information is provided",
      "Next customer action is triggered",
    ],
  },
];

export default function ExampleSolutionsSection() {
  return (
    <section
      id="examples"
      className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
            Example Solutions
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
            See what AI could{" "}
            <span className="text-[#c5b8ae]">
              actually do for your business.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
            These are examples of how Voxvera can connect websites, AI
            conversations, and automation into practical business workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="group relative overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#634331] hover:bg-[#2a190f] sm:p-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#43291c]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927e70]">
                    {solution.category}
                  </p>

                  <h3 className="mt-3 max-w-lg text-xl font-semibold leading-tight tracking-[-0.025em] text-[#f8f3ed] sm:text-2xl">
                    {solution.title}
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#43291c] text-[10px] font-medium text-[#634f43] transition-all duration-300 group-hover:border-[#634331] group-hover:text-[#f8f3ed]">
                  {solution.number}
                </span>
              </div>

              <p className="relative mt-4 max-w-xl text-xs leading-6 text-[#927e70] sm:text-sm">
                {solution.description}
              </p>

              <div className="relative mt-7 rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
                <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                  Example workflow
                </p>

                <div className="mt-4 space-y-3">
                  {solution.flow.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-3"
                    >
                      <div className="flex shrink-0 items-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#43291c] bg-[#24150e] text-[8px] font-medium text-[#c5b8ae]">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] leading-5 text-[#c5b8ae] sm:text-xs">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-5 flex items-center justify-between border-t border-[#43291c] pt-4">
                <span className="text-[9px] uppercase tracking-[0.14em] text-[#634f43]">
                  AI-powered workflow
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#43291c] text-xs text-[#927e70] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#634331] group-hover:text-[#f8f3ed]">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                Your business
              </p>

              <h3 className="mt-2 text-base font-semibold text-[#f8f3ed] sm:text-lg">
                Have a different workflow in mind?
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-[#927e70] sm:text-sm">
                Tell us how your business currently handles enquiries,
                customers, and repetitive work. We can identify where an AI
                system could fit.
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
              Discuss My Workflow
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

