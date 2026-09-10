
import AIAgentSection from "./components/AIAgentSection";
import AIAutomationSection from "./components/AIAutomationSection";
import AIChatbotSection from "./components/AIChatbotSection";
import AIWebsitesSection from "./components/AIWebsitesSection";
import Navbar from "./components/Navbar";
import ProblemSection from "./components/ProblemSection";
import ServicesSection from "./components/ServicesSection";
import SolutionSection from "./components/SolutionSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#1a0f0a] text-[#f8f3ed]">
      <Navbar />

      <section className="relative px-5 pb-24 pt-36 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#43291c]/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center rounded-full border border-[#43291c] bg-[#24150e] px-4 py-2">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#c5b8ae]">
              AI Systems for Modern Businesses
            </span>
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#f8f3ed] sm:text-5xl md:text-6xl lg:text-7xl">
            Build a Business That{" "}
            <span className="text-[#c5b8ae]">Runs Smarter.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#927e70] sm:text-base sm:leading-8">
            We build AI-powered systems that help businesses capture leads,
            convert customers, and automate repetitive work.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              style={{
                backgroundColor: "#f8f3ed",
                color: "#1a0f0a",
              }}
            >
              <span style={{ color: "#1a0f0a" }}>Get Started</span>
              <span className="ml-2" style={{ color: "#1a0f0a" }}>
                →
              </span>
            </a>

            <a
              href="#solutions"
              className="inline-flex w-full items-center justify-center rounded-lg border border-[#43291c] bg-[#24150e] px-6 py-3 text-sm font-medium text-[#c5b8ae] transition-all duration-200 hover:border-[#634331] hover:text-[#f8f3ed] sm:w-auto"
            >
              View Our Solutions
              <span className="ml-2">↓</span>
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              {
                label: "Capture",
                value: "More opportunities",
              },
              {
                label: "Convert",
                value: "Faster responses",
              },
              {
                label: "Automate",
                value: "Less manual work",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#43291c] bg-[#24150e]/70 px-5 py-4 text-left"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                  {item.label}
                </p>

                <p className="mt-1.5 text-sm font-medium text-[#c5b8ae]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProblemSection />

      <SolutionSection />

      <ServicesSection />

      <AIWebsitesSection />

      <AIChatbotSection />

      <AIAgentSection />

      <AIAutomationSection />

      <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-[#43291c] bg-[#24150e] px-6 py-14 text-center sm:px-10 lg:px-16">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
              Ready to build smarter?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
              Turn repetitive business work into{" "}
              <span className="text-[#c5b8ae]">automated systems.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#927e70] sm:text-base">
              Tell us what is slowing your business down. We will identify
              where AI can create the biggest operational advantage.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor: "#f8f3ed",
                  color: "#1a0f0a",
                }}
              >
                <span style={{ color: "#1a0f0a" }}>
                  Book a Free Strategy Call
                </span>

                <span className="ml-2" style={{ color: "#1a0f0a" }}>
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-[#43291c] px-6 py-3 text-sm font-medium text-[#c5b8ae] transition-colors duration-200 hover:border-[#634331] hover:text-[#f8f3ed]"
              >
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-[#43291c] px-5 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em] text-[#f8f3ed]">
              VOXVERA
            </p>

            <p className="mt-2 max-w-md text-xs leading-6 text-[#927e70]">
              AI-powered systems for businesses that want to capture more
              opportunities, convert faster, and automate repetitive work.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-[#927e70]">
            <a
              href="#services"
              className="transition-colors hover:text-[#f8f3ed]"
            >
              Services
            </a>

            <a
              href="#solutions"
              className="transition-colors hover:text-[#f8f3ed]"
            >
              Solutions
            </a>

            <a
              href="#process"
              className="transition-colors hover:text-[#f8f3ed]"
            >
              Process
            </a>

            <a
              href="#pricing"
              className="transition-colors hover:text-[#f8f3ed]"
            >
              Pricing
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-[#f8f3ed]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-[#43291c] pt-6 text-[10px] text-[#634f43] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Voxvera AI Agency. All rights reserved.</span>
          <span>Built for smarter business operations.</span>
        </div>
      </footer>
    </main>
  );
}

