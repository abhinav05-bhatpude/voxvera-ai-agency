
"use client";

import { useEffect, useState } from "react";
import HumanHandoff from "./HumanHandOff";
import LeadDetails from "./LeadDetails";

const workflowSteps = [
  {
    number: "01",
    label: "Incoming Lead",
    value: "New enquiry detected",
  },
  {
    number: "02",
    label: "AI Analysis",
    value: "Intent & requirements",
  },
  {
    number: "03",
    label: "Qualification",
    value: "Lead scored automatically",
  },
];

export default function AIAgentSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % workflowSteps.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
              Service 03
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
              AI Agents That{" "}
              <span className="text-[#c5b8ae]">Do the Work.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
              AI agents can understand incoming requests, make decisions,
              collect information, qualify opportunities, and trigger the
              next action without requiring your team to handle every step.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Lead qualification",
                "Customer support",
                "Appointment booking",
                "Information collection",
                "Human handoff",
                "Business decisions",
              ].map((feature) => (
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
              Build My AI Agent
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 rounded-full bg-[#43291c]/10 blur-[90px]"
            />

            <div className="relative rounded-3xl border border-[#43291c] bg-[#1a0f0a] p-4 shadow-2xl sm:p-6">
              <div className="rounded-2xl border border-[#43291c] bg-[#24150e]">
                <div className="flex items-center justify-between border-b border-[#43291c] px-5 py-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#927e70]">
                      Autonomous Business Agent
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#f8f3ed]">
                      Lead Intelligence System
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#43291c] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f8f3ed]" />

                    <span className="text-[10px] text-[#c5b8ae]">
                      Processing
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="grid gap-3">
                    {workflowSteps.map((step, index) => {
                      const active = index === activeStep;
                      const completed = index < activeStep;

                      return (
                        <div
                          key={step.number}
                          className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-500 ${
                            active
                              ? "border-[#f8f3ed]/30 bg-[#1a0f0a]"
                              : "border-[#43291c] bg-[#1a0f0a]/50"
                          }`}
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-[10px] font-semibold transition-all duration-500 ${
                              active || completed
                                ? "border-[#f8f3ed] bg-[#f8f3ed] text-[#1a0f0a]"
                                : "border-[#43291c] text-[#634f43]"
                            }`}
                          >
                            {completed ? "✓" : step.number}
                          </div>

                          <div className="min-w-0">
                            <p
                              className={`text-xs font-semibold ${
                                active || completed
                                  ? "text-[#f8f3ed]"
                                  : "text-[#927e70]"
                              }`}
                            >
                              {step.label}
                            </p>

                            <p className="mt-1 text-[10px] text-[#634f43]">
                              {step.value}
                            </p>
                          </div>

                          {active && (
                            <div className="ml-auto flex gap-1">
                              <span className="h-1 w-1 animate-pulse rounded-full bg-[#f8f3ed]" />
                              <span className="h-1 w-1 animate-pulse rounded-full bg-[#c5b8ae]" />
                              <span className="h-1 w-1 animate-pulse rounded-full bg-[#927e70]" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="my-5 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#43291c]" />

                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#634f43]">
                      Extracted intelligence
                    </span>

                    <div className="h-px flex-1 bg-[#43291c]" />
                  </div>

                  <LeadDetails />

                  <div className="my-5 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#43291c]" />

                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#634f43]">
                      Human handoff
                    </span>

                    <div className="h-px flex-1 bg-[#43291c]" />
                  </div>

                  <HumanHandoff />

                  <div className="mt-4 rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
                          Next system action
                        </p>

                        <p className="mt-1 text-xs font-medium text-[#c5b8ae]">
                          Send qualified lead to automation
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <span className="hidden text-[9px] uppercase tracking-[0.12em] text-[#634f43] sm:block">
                          AI Agent
                        </span>

                        <span className="text-xs text-[#f8f3ed]">
                          →
                        </span>

                        <span className="rounded-full border border-[#43291c] px-3 py-1.5 text-[9px] font-medium text-[#f8f3ed]">
                          Automation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
