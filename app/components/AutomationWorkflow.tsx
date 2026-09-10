"use client";

import { useState } from "react";

const workflowNodes = [
  {
    number: "01",
    title: "Trigger",
    subtitle: "New lead arrives",
    description:
      "A new enquiry enters through your website, landing page, WhatsApp, or another connected channel.",
    action: "Capture incoming lead",
  },
  {
    number: "02",
    title: "AI Processing",
    subtitle: "Understand & qualify",
    description:
      "AI analyzes the lead, extracts important information, identifies intent, and determines the next best action.",
    action: "Analyze lead automatically",
  },
  {
    number: "03",
    title: "Action",
    subtitle: "Execute workflow",
    description:
      "The system sends the right message, updates your CRM, creates a task, or triggers another business process.",
    action: "Execute automated action",
  },
  {
    number: "04",
    title: "Outcome",
    subtitle: "Sales-ready lead",
    description:
      "Your team receives the relevant information and can focus on the opportunity instead of manual administration.",
    action: "Notify sales team",
  },
];

export default function AutomationWorkflow() {
  const [activeNode, setActiveNode] = useState(0);

  const currentNode = workflowNodes[activeNode];

  return (
    <div className="w-full rounded-3xl border border-[#43291c] bg-[#1a0f0a] p-3 shadow-2xl transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-5 lg:p-6">
      <div className="rounded-2xl border border-[#43291c] bg-[#24150e]">
        <div className="flex items-center justify-between gap-3 border-b border-[#43291c] px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.14em] text-[#927e70] sm:text-[10px] sm:tracking-[0.16em]">
              Workflow Builder
            </p>

            <p className="mt-1 truncate text-sm font-semibold text-[#f8f3ed]">
              Lead Automation
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#43291c] px-2.5 py-1.5 sm:px-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f3ed] opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />
            </span>

            <span className="text-[9px] text-[#c5b8ae] sm:text-[10px]">
              Running
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 lg:p-6">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {workflowNodes.map((node, index) => {
              const active = index === activeNode;
              const completed = index < activeNode;

              return (
                <button
                  key={node.number}
                  type="button"
                  onClick={() => setActiveNode(index)}
                  className={`group flex min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 sm:h-full sm:flex-col sm:items-start ${
                    active
                      ? "border-[#f8f3ed]/30 bg-[#1a0f0a] shadow-lg"
                      : "border-[#43291c] bg-[#1a0f0a]/50 hover:border-[#634331] hover:bg-[#1f120c]"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-[9px] font-semibold transition-all duration-300 ${
                      active || completed
                        ? "scale-105 border-[#f8f3ed] bg-[#f8f3ed] text-[#1a0f0a]"
                        : "border-[#43291c] text-[#634f43]"
                    }`}
                  >
                    {completed ? "✓" : node.number}
                  </span>

                  <span className="min-w-0">
                    <span
                      className={`block text-[10px] font-semibold sm:text-[11px] ${
                        active || completed
                          ? "text-[#f8f3ed]"
                          : "text-[#927e70]"
                      }`}
                    >
                      {node.title}
                    </span>

                    <span className="mt-1 block text-[9px] leading-4 text-[#634f43]">
                      {node.subtitle}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="my-4 h-px bg-[#43291c] sm:my-5" />

          <div
            key={currentNode.number}
            className="animate-[fadeIn_300ms_ease-out] rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-4 sm:p-5 lg:p-6"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 max-w-xl">
                <p className="text-[9px] uppercase tracking-[0.16em] text-[#927e70]">
                  Step {currentNode.number}
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#f8f3ed] sm:text-lg">
                  {currentNode.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#927e70] sm:text-sm">
                  {currentNode.description}
                </p>
              </div>

              <div className="w-full shrink-0 rounded-xl border border-[#43291c] bg-[#24150e] px-4 py-3 lg:w-auto lg:min-w-[190px]">
                <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
                  Automated action
                </p>

                <p className="mt-1 text-xs font-medium text-[#c5b8ae]">
                  {currentNode.action}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[8px] uppercase tracking-[0.12em] text-[#634f43] sm:text-[9px] sm:tracking-[0.14em]">
              Select a workflow stage
            </p>

            <div className="flex shrink-0 gap-1.5">
              {workflowNodes.map((node, index) => (
                <button
                  key={node.number}
                  type="button"
                  onClick={() => setActiveNode(index)}
                  aria-label={`Show ${node.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeNode
                      ? "w-6 bg-[#f8f3ed]"
                      : "w-1.5 bg-[#43291c] hover:bg-[#634331]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}