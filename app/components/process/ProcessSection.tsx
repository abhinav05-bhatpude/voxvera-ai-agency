"use client";

import { useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, identify bottlenecks, and find the areas where AI or automation can create the biggest impact.",
    label: "Understand the business",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
        <path d="M8.5 11h5" />
        <path d="M11 8.5v5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We map your requirements into a practical solution and decide what should be built, automated, integrated, or improved.",
    label: "Design the solution",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="M8 16h8" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop your website, AI system, integrations, and automation workflows around the requirements we identified.",
    label: "Build the system",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test the system, connect the required tools, deploy everything, and make sure the solution is ready for real business use.",
    label: "Go live",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
        <path d="M5 19h14" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Once the system is live, we identify opportunities to refine workflows, improve the experience, and expand automation.",
    label: "Keep getting better",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 17 9 12l4 4 7-8" />
        <path d="M16 8h4v4" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = processSteps[activeStep];

  return (
    <section
      id="process"
      className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
            From business problem to{" "}
            <span className="text-[#c5b8ae]">
              working system.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
            We keep the process simple. First we understand your business,
            then we build the technology around what actually matters.
          </p>
        </div>

        <div className="mt-14 hidden lg:block">
          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-[31px] h-px bg-[#43291c]" />

            <div className="relative grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => {
                const active = index === activeStep;
                const completed = index < activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="group text-left"
                  >
                    <div className="flex items-center">
                      <div
                        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          active || completed
                            ? "border-[#f8f3ed] bg-[#f8f3ed] text-[#1a0f0a] shadow-lg"
                            : "border-[#43291c] bg-[#24150e] text-[#927e70] group-hover:border-[#634331] group-hover:text-[#f8f3ed]"
                        }`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    <div className="mt-6">
                      <p
                        className={`text-[9px] font-medium uppercase tracking-[0.14em] transition-colors ${
                          active
                            ? "text-[#f8f3ed]"
                            : "text-[#634f43]"
                        }`}
                      >
                        {step.number}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[#f8f3ed]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-[#927e70]">
                        {step.description}
                      </p>

                      <p
                        className={`mt-4 text-[9px] font-medium uppercase tracking-[0.12em] transition-colors ${
                          active
                            ? "text-[#c5b8ae]"
                            : "text-[#634f43]"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-[#43291c] bg-[#24150e] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                  Current stage
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#f8f3ed]">
                  {currentStep.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#927e70]">
                  {currentStep.description}
                </p>
              </div>

              <div className="hidden shrink-0 items-center gap-2 sm:flex">
                {processSteps.map((step, index) => (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Show ${step.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? "w-7 bg-[#f8f3ed]"
                        : "w-1.5 bg-[#43291c] hover:bg-[#634331]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-3 lg:hidden">
          {processSteps.map((step, index) => {
            const active = index === activeStep;

            return (
              <div
                key={step.number}
                className={`rounded-2xl border transition-all duration-300 ${
                  active
                    ? "border-[#634331] bg-[#2a190f]"
                    : "border-[#43291c] bg-[#24150e]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
                  aria-expanded={active}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      active
                        ? "border-[#f8f3ed] bg-[#f8f3ed] text-[#1a0f0a]"
                        : "border-[#43291c] text-[#927e70]"
                    }`}
                  >
                    {step.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#634f43]">
                      Step {step.number}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-[#f8f3ed]">
                      {step.title}
                    </h3>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs transition-transform duration-300 ${
                      active
                        ? "rotate-90 border-[#634331] text-[#f8f3ed]"
                        : "border-[#43291c] text-[#927e70]"
                    }`}
                  >
                    →
                  </span>
                </button>

                {active && (
                  <div className="border-t border-[#43291c] px-4 pb-5 pt-4 sm:px-5">
                    <p className="text-xs leading-6 text-[#927e70]">
                      {step.description}
                    </p>

                    <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.12em] text-[#c5b8ae]">
                      {step.label}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                Start with a conversation
              </p>

              <h3 className="mt-2 text-base font-semibold text-[#f8f3ed] sm:text-lg">
                Not sure where AI fits in your business?
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-[#927e70] sm:text-sm">
                Tell us what is taking too much time, where leads are being
                lost, or what your team is repeatedly doing manually.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg px-5 py-3 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                backgroundColor: "#f8f3ed",
                color: "#1a0f0a",
              }}
            >
              Start a Conversation
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}