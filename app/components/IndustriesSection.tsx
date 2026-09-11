
const industries = [
  {
    number: "01",
    title: "Real Estate",
    description:
      "Capture property enquiries, qualify buyers, collect requirements, and route high-intent prospects to your sales team.",
    solutions: ["Lead qualification", "Property enquiries", "Follow-ups"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M8 21.5L24 9L40 21.5V39H8V21.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18 39V27H30V39"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 23H18M30 23H34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Clinics & Healthcare",
    description:
      "Handle common questions, collect patient information, and automate appointment-related workflows.",
    solutions: ["Appointment booking", "Patient enquiries", "Reminders"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M24 39C24 39 9 30.5 9 19.5C9 14.8 12.6 11 17 11C20.1 11 22.6 12.8 24 15.3C25.4 12.8 27.9 11 31 11C35.4 11 39 14.8 39 19.5C39 30.5 24 39 24 39Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 18V27M19.5 22.5H28.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Education",
    description:
      "Help prospective students discover programs, answer questions, collect leads, and automate follow-up.",
    solutions: ["Course enquiries", "Lead capture", "Counselling"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M7 17L24 9L41 17L24 25L7 17Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M13 20V29C13 32.5 17.9 36 24 36C30.1 36 35 32.5 35 29V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M41 18V29"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Professional Services",
    description:
      "Turn website enquiries into organized opportunities with intelligent intake and automated workflows.",
    solutions: ["Client intake", "Lead routing", "Follow-ups"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="11"
          width="32"
          height="27"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M17 11V8H31V11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 21H33M15 27H27"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Local Businesses",
    description:
      "Respond to customer enquiries faster and automate repetitive tasks that normally consume your team's time.",
    solutions: ["Customer support", "Bookings", "Notifications"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M8 20L11 11H37L40 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 20V38H39V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 20C8 23.3 10.7 26 14 26C17.3 26 20 23.3 20 20C20 23.3 22.7 26 26 26C29.3 26 32 23.3 32 20C32 23.3 34.7 26 38 26C39 26 39.7 25.8 40 25.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M17 38V31H31V38"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "E-commerce",
    description:
      "Automate customer questions, order-related workflows, product discovery, and post-purchase communication.",
    solutions: ["Product support", "Order enquiries", "Customer workflows"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M9 12H13L17 32H36L40 18H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="20"
          cy="38"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="34"
          cy="38"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M22 22H31M26.5 17.5V26.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
            Industries
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
            Built for businesses where{" "}
            <span className="text-[#c5b8ae]">
              every lead matters.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#927e70] sm:text-base">
            Voxvera builds AI systems around the way your business actually
            operates — from the first customer enquiry to the final sales
            handoff.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group relative overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#634331] hover:bg-[#2a190f] sm:p-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#43291c]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between">
                <div className="relative h-14 w-14">
                  <div className="absolute inset-1 translate-x-1 translate-y-1 rounded-2xl border border-[#43291c] bg-[#1a0f0a]" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#634331] bg-[#2a190f] text-[#f8f3ed] shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                    {industry.icon}
                  </div>
                </div>

                <span className="text-[10px] font-medium tracking-[0.14em] text-[#634f43]">
                  {industry.number}
                </span>
              </div>

              <h3 className="relative mt-7 text-lg font-semibold tracking-[-0.02em] text-[#f8f3ed]">
                {industry.title}
              </h3>

              <p className="relative mt-3 text-xs leading-6 text-[#927e70] sm:text-sm">
                {industry.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {industry.solutions.map((solution) => (
                  <span
                    key={solution}
                    className="rounded-full border border-[#43291c] bg-[#1a0f0a] px-3 py-1.5 text-[9px] text-[#c5b8ae] transition-colors duration-300 group-hover:border-[#4f3021]"
                  >
                    {solution}
                  </span>
                ))}
              </div>

              <div className="relative mt-7 flex items-center justify-between border-t border-[#43291c] pt-4">
                <span className="text-[9px] uppercase tracking-[0.14em] text-[#634f43]">
                  AI solutions
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#43291c] text-xs text-[#927e70] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#634331] group-hover:text-[#f8f3ed]">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

