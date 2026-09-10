import AutomationWorkflow from "./AutomationWorkflow";

const automationFeatures = [
  "Lead capture workflows",
  "Automated follow-ups",
  "CRM synchronization",
  "Email & WhatsApp workflows",
  "Appointment automation",
  "Internal notifications",
];

export default function AIAutomationSection() {
  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <AutomationWorkflow />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
              Service 04
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
              AI Automation That{" "}
              <span className="text-[#c5b8ae]">Keeps Work Moving.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
              Connect the tools and processes behind your business so leads,
              customer data, follow-ups, appointments, and internal tasks move
              automatically without constant manual work.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {automationFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-[#43291c] bg-[#24150e] px-4 py-3"
                >
                  <span className="text-xs text-[#f8f3ed]">✓</span>

                  <span className="text-xs text-[#c5b8ae]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#f8f3ed",
                color: "#1a0f0a",
              }}
            >
              Automate My Business
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}