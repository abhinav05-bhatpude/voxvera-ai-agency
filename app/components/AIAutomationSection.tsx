import AutomationWorkflow from "./AutomationWorkflow";

const automationFeatures = [
  "Lead capture workflows",
  "Automated follow-ups",
  "CRM synchronization",
  "Email & WhatsApp workflows",
  "Appointment automation",
  "Internal notifications",
];

const systemConnections = [
  {
    number: "01",
    title: "AI Agent",
    description: "Understands the incoming lead",
  },
  {
    number: "02",
    title: "Automation",
    description: "Triggers the right business action",
  },
  {
    number: "03",
    title: "Sales Team",
    description: "Receives a sales-ready opportunity",
  },
];

export default function AIAutomationSection() {
  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <AutomationWorkflow />

            <div className="mt-4 rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {systemConnections.map((connection, index) => (
                  <div
                    key={connection.number}
                    className="flex min-w-0 flex-1 items-center"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#43291c] bg-[#24150e] text-[9px] font-semibold text-[#f8f3ed]">
                        {connection.number}
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold text-[#f8f3ed]">
                          {connection.title}
                        </p>

                        <p className="mt-1 text-[9px] leading-4 text-[#634f43]">
                          {connection.description}
                        </p>
                      </div>
                    </div>

                    {index < systemConnections.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="ml-auto hidden px-3 text-xs text-[#634f43] sm:block"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
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

            <div className="mt-8 rounded-2xl border border-[#43291c] bg-[#24150e] p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#927e70]">
                Connected AI System
              </p>

              <p className="mt-2 text-sm leading-6 text-[#c5b8ae]">
                Your AI agent does not stop after understanding a lead.
                It can pass that information into automated workflows that
                keep the business moving.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-[#43291c] bg-[#1a0f0a] px-3 py-2 text-[10px] font-medium text-[#f8f3ed]">
                  AI Agent
                </span>

                <span className="text-xs text-[#634f43]">→</span>

                <span className="rounded-lg border border-[#43291c] bg-[#1a0f0a] px-3 py-2 text-[10px] font-medium text-[#f8f3ed]">
                  Automation
                </span>

                <span className="text-xs text-[#634f43]">→</span>

                <span className="rounded-lg border border-[#43291c] bg-[#1a0f0a] px-3 py-2 text-[10px] font-medium text-[#f8f3ed]">
                  Sales
                </span>
              </div>
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