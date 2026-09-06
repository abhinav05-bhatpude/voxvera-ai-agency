"use client";

import { useEffect, useState } from "react";

const workflowSteps = [
  {
    label: "Website Visitor",
    status: "New enquiry",
    message: '"Hi, I want to know your pricing."',
    icon: "U",
  },
  {
    label: "AI Agent",
    status: "Understanding request",
    message: "Analyzing intent and identifying the customer's requirements.",
    icon: "AI",
  },
  {
    label: "Lead Qualification",
    status: "Lead qualified",
    message: "Customer information captured and qualification completed.",
    icon: "✓",
  },
  {
    label: "Sales Team",
    status: "Notification sent",
    message: "The sales team has been notified for immediate follow-up.",
    icon: "→",
  },
];

export default function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % workflowSteps.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const step = workflowSteps[activeStep];

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e]/95 p-4 shadow-2xl shadow-black/30 sm:p-5">
        {/* Top bar */}
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

          <div className="flex items-center gap-2 rounded-full border border-[#43291c] px-2.5 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f8f3ed]" />

            <span className="text-[10px] font-medium uppercase tracking-wider text-[#c5b8ae]">
              Live System
            </span>
          </div>
        </div>

        {/* Workflow heading */}
        <div className="mb-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#927e70]">
            AI business workflow
          </p>

          <h2 className="mt-1 text-base font-medium text-[#f8f3ed]">
            From enquiry to qualified lead.
          </h2>
        </div>

        {/* Customer message */}
        <div
          key={activeStep}
          className="animate-[fadeIn_0.5s_ease-out]"
        >
          <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8f3ed] text-[10px] font-bold text-[#1a0f0a]">
                  {step.icon}
                </span>

                <div>
                  <p className="text-xs font-medium text-[#f8f3ed]">
                    {step.label}
                  </p>

                  <p className="text-[9px] uppercase tracking-wider text-[#927e70]">
                    {step.status}
                  </p>
                </div>
              </div>

              <span className="text-[9px] text-[#927e70]">
                Just now
              </span>
            </div>

            <p className="text-sm leading-6 text-[#c5b8ae]">
              {step.message}
            </p>
          </div>
        </div>

        {/* Workflow nodes */}
        <div className="my-5">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 -z-0 h-px bg-[#43291c]" />

            {workflowSteps.map((item, index) => {
              const completed = index <= activeStep;
              const active = index === activeStep;

              return (
                <div
                  key={item.label}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-medium transition-all duration-500 ${
                      active
                        ? "border-[#f8f3ed] bg-[#f8f3ed] text-[#1a0f0a] scale-110"
                        : completed
                          ? "border-[#c5b8ae] bg-[#2d1b12] text-[#f8f3ed]"
                          : "border-[#43291c] bg-[#1a0f0a] text-[#927e70]"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span
                    className={`mt-2 hidden max-w-16 text-center text-[8px] leading-3 sm:block ${
                      completed
                        ? "text-[#c5b8ae]"
                        : "text-[#927e70]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI analysis cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-3">
            <p className="text-[9px] uppercase tracking-wider text-[#927e70]">
              Intent
            </p>

            <p className="mt-1 text-xs font-medium text-[#f8f3ed]">
              {activeStep >= 1 ? "Pricing enquiry" : "Detecting..."}
            </p>
          </div>

          <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-3">
            <p className="text-[9px] uppercase tracking-wider text-[#927e70]">
              Lead status
            </p>

            <p className="mt-1 text-xs font-medium text-[#f8f3ed]">
              {activeStep >= 2 ? "Qualified ✓" : "Processing..."}
            </p>
          </div>
        </div>

        {/* Bottom status */}
        <div className="mt-5 flex items-center justify-between border-t border-[#43291c] pt-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.15em] text-[#927e70]">
              Automated workflow
            </p>

            <p className="mt-1 text-[10px] text-[#c5b8ae]">
              Lead capture system
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f8f3ed]" />

            <span className="text-[10px] font-medium text-[#f8f3ed]">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Depth layer */}
      <div
        aria-hidden="true"
        className="absolute -bottom-3 left-6 right-6 -z-10 h-10 rounded-2xl border border-[#342017] bg-[#24150e]/40"
      />
    </div>
  );
}