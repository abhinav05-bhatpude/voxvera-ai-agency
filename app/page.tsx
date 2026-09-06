
import AIWorkflow from "./components/AIWorkflow";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 sm:pt-40 lg:px-8">
          {/* Background Atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#43291c]/20 blur-[140px]" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Hero Content */}
            <div className="max-w-3xl">
              {/* Positioning Label */}
              <div className="mb-6 inline-flex items-center rounded-full border border-[#43291c] bg-[#24150e]/70 px-3 py-1.5">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />

                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#c5b8ae]">
                  AI Automation • AI Agents • AI Websites
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#f8f3ed] sm:text-6xl lg:text-7xl xl:text-8xl">
                AI Systems Built to{" "}
                <span className="text-[#c5b8ae]">
                  Grow Your Business.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-7 text-[#c5b8ae] sm:text-lg sm:leading-8">
                We build AI-powered websites, agents, chatbots, and
                automations that help businesses capture leads, convert
                customers, and reduce repetitive work.
              </p>

              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#f8f3ed] px-6 py-3.5 text-sm font-semibold text-[#1a0f0a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-lg border border-[#43291c] bg-[#24150e]/50 px-6 py-3.5 text-sm font-semibold text-[#f8f3ed] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5a3827] hover:bg-[#2d1b12]"
                >
                  View Our Solutions
                </a>
              </div>

              {/* Supporting Points */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#927e70]">
                <span>Built for modern businesses</span>

                <span className="hidden h-1 w-1 rounded-full bg-[#5a3827] sm:block" />

                <span>Practical AI systems</span>

                <span className="hidden h-1 w-1 rounded-full bg-[#5a3827] sm:block" />

                <span>Designed for growth</span>
              </div>
            </div>

            {/* Interactive AI Workflow */}
            <div className="relative mx-auto w-full max-w-xl">
              <AIWorkflow />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

