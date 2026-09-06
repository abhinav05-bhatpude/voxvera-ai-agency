"use client";

import { useEffect, useState } from "react";

const workflowSteps = [
  {
    label: "Website Visitor",
    status: "New enquiry",
    message: '"Hi, I want to know your pricing."',
  },
  {
    label: "AI Agent",
    status: "Understanding request",
    message: "Identifying the customer's intent and requirements.",
  },
  {
    label: "Lead Qualification",
    status: "Lead qualified",
    message: "Customer information captured successfully.",
  },
  {
    label: "Sales Team",
    status: "Notification sent",
    message: "Sales team has been notified for follow-up.",
  },
];

export default function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % workflowSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const step = workflowSteps[activeStep];

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e]/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-5">
        {/* Header */}
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

        {/* Current Interaction */}
        <div
          key={activeStep}
          className="animate-[fadeIn_0.5s_ease-out]"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#927e70]">
              Step {String(activeStep + 1).padStart(2, "0")}
            </span>

            <span className="flex items-center gap-1.5 text-[10px] text-[#c5b8ae]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f8f3ed]" />
              {step.status}
            </span>
          </div>

          {/* Main Card */}
          <div className="rounded-xl border border-[#43291c] bg-[#1a0f0a] p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f8f3ed] text-xs font-bold text-[#1a0f0a]">
                {activeStep === 0 ? "U" : activeStep === 1 ? "AI" : "✓"}
              </div>

              <div>
                <p className="text-sm font-medium text-[#f8f3ed]">
                  {step.label}
                </p>

                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[#927e70]">
                  {step.status}
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-[#c5b8ae]">
              {step.message}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 grid grid-cols-4 gap-1.5">
          {workflowSteps.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index <= activeStep
                  ? "bg-[#f8f3ed]"
                  : "bg-[#43291c]"
              }`}
            />
          ))}
        </div>

        {/* Bottom Status */}
        <div className="mt-5 flex items-center justify-between border-t border-[#43291c] pt-4">
          <span className="text-[10px] uppercase tracking-wider text-[#927e70]">
            Automated workflow
          </span>

          <span className="text-[10px] font-medium text-[#c5b8ae]">
            {activeStep + 1} / {workflowSteps.length}
          </span>
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