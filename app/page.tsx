import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#c5b8ae]">
              AI Automation • AI Agents • AI Websites
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#f8f3ed] sm:text-6xl lg:text-7xl">
              AI Systems Built to Grow Your Business.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#c5b8ae] sm:text-lg">
              We build AI-powered websites, agents, chatbots, and automations
              that help businesses capture leads, convert customers, and reduce
              repetitive work.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-[#f8f3ed] px-6 py-3 text-sm font-semibold text-[#1a0f0a] transition-colors duration-200 hover:bg-white"
              >
                Get Started
              </a>

              <a
                href="#solutions"
                className="rounded-lg border border-[#43291c] px-6 py-3 text-sm font-semibold text-[#f8f3ed] transition-colors duration-200 hover:border-[#5a3827] hover:bg-[#24150e]"
              >
                View Our Solutions
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}