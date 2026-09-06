import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 sm:pt-40 lg:px-8">
          {/* Background atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[#43291c]/20 blur-[140px]" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Hero Content */}
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#43291c] bg-[#24150e]/70 px-3 py-1.5">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#c5b8ae]">
                  AI Automation • AI Agents • AI Websites
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#f8f3ed] sm:text-6xl lg:text-7xl xl:text-8xl">
                AI Systems Built to{" "}
                <span className="text-[#c5b8ae]">Grow Your Business.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#c5b8ae] sm:text-lg sm:leading-8">
                We build AI-powered websites, agents, chatbots, and
                automations that help businesses capture leads, convert
                customers, and reduce repetitive work.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#f8f3ed] px-6 py-3.5 text-sm font-semibold text-[#1a0f0a] transition-all duration-200 hover:bg-white hover:-translate-y-0.5"
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

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#927e70]">
                <span>Built for modern businesses</span>
                <span className="hidden h-1 w-1 rounded-full bg-[#5a3827] sm:block" />
                <span>Practical AI systems</span>
                <span className="hidden h-1 w-1 rounded-full bg-[#5a3827] sm:block" />
                <span>Designed for growth</span>
              </div>
            </div>

            {/* AI System Visual */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e]/80 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-5">
                {/* Window Header */}
                <div className="mb-5 flex items-center justify-between border-b border-[#43291c] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#5a3827]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#5a3827]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#5a3827]" />
                    </div>

                    <span className="ml-2 text-xs text-[#927e70]">
                      voxvera / ai-system
                    </span>
                  </div>

                  <span className="rounded-full border border-[#43291c] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#c5b8ae]">
                    Live System
                  </span>
                </div>

                {/* Workflow */}
                <div className="space-y-3">
                  {/* Visitor */}
                  <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[#927e70]">
                        Website Visitor
                      </span>

                      <span className="text-[10px] text-[#927e70]">
                        Just now
                      </span>
                    </div>

                    <p className="text-sm text-[#f8f3ed]">
                      "Hi, I want to know your pricing."
                    </p>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="h-5 w-px bg-[#5a3827]" />
                  </div>

                  {/* AI Agent */}
                  <div className="rounded-xl border border-[#5a3827] bg-[#2d1b12] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f8f3ed] text-[10px] font-bold text-[#1a0f0a]">
                          AI
                        </span>

                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#c5b8ae]">
                          AI Agent
                        </span>
                      </div>

                      <span className="flex items-center gap-1.5 text-[10px] text-[#c5b8ae]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f8f3ed]" />
                        Processing
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-[#f8f3ed]">
                      Understanding the request and identifying the right
                      response.
                    </p>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="h-5 w-px bg-[#5a3827]" />
                  </div>

                  {/* Qualified Lead */}
                  <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#927e70]">
                          Lead Status
                        </span>

                        <p className="mt-1 text-sm font-medium text-[#f8f3ed]">
                          Qualified Lead
                        </p>
                      </div>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#5a3827] text-sm text-[#f8f3ed]">
                        ✓
                      </span>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="h-5 w-px bg-[#5a3827]" />
                  </div>

                  {/* Sales Team */}
                  <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#43291c] text-xs">
                        →
                      </span>

                      <span className="text-[11px] font-medium uppercase tracking-wider text-[#927e70]">
                        Sales Team
                      </span>
                    </div>

                    <p className="text-sm text-[#f8f3ed]">
                      Customer details ready for follow-up.
                    </p>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="mt-5 flex items-center justify-between border-t border-[#43291c] pt-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#927e70]">
                    System Status
                  </span>

                  <span className="text-[10px] font-medium text-[#c5b8ae]">
                    Operational
                  </span>
                </div>
              </div>

              {/* Decorative depth layer */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 left-6 right-6 -z-10 h-10 rounded-2xl border border-[#342017] bg-[#24150e]/40"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}