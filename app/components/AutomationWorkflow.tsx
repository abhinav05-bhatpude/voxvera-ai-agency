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
    <div className="rounded-3xl border border-[#43291c] bg-[#1a0f0a] p-4 shadow-2xl transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-6">
      <div className="rounded-2xl border border-[#43291c] bg-[#24150e]">
        <div className="flex items-center justify-between border-b border-[#43291c] px-5 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#927e70]">
              Workflow Builder
            </p>

            <p className="mt-1 text-sm font-semibold text-[#f8f3ed]">
              Lead Automation
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#43291c] px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f8f3ed] opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />
            </span>

            <span className="text-[10px] text-[#c5b8ae]">
              Running
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid gap-2 sm:grid-cols-4">
            {workflowNodes.map((node, index) => {
              const active = index === activeNode;
              const completed = index < activeNode;

              return (
                <div key={node.number} className="flex items-center sm:block">
                  <button
                    type="button"
                    onClick={() => setActiveNode(index)}
                    className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 sm:h-full sm:flex-col sm:items-start ${
                      active
                        ? "border-[#f8f3ed]/30 bg-[#1a0f0a] shadow-lg"
                        : "border-[#43291c] bg-[#1a0f0a]/50 hover:border-[#634331] hover:bg-[#1f120c]"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-[9px] font-semibold transition-all duration-300 ${
                        active || completed
                          ? "border-[#f8f3ed] bg-[#f8f3ed] text-[#1a0f0a] scale-105"
                          : "border-[#43291c] text-[#634f43]"
                      }`}
                    >
                      {completed ? "✓" : node.number}
                    </span>

                    <span className="min-w-0">
                      <span
                        className={`block text-[11px] font-semibold transition-colors duration-300 ${
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

                  {index < workflowNodes.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-2 hidden text-xs text-[#634f43] sm:block sm:text-center"
                    >
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="my-5 h-px bg-[#43291c]" />

          <div
            key={currentNode.number}
            className="animate-[fadeIn_300ms_ease-out] rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-5 sm:p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <p className="text-[9px] uppercase tracking-[0.16em] text-[#927e70]">
                  Step {currentNode.number}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[#f8f3ed]">
                  {currentNode.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#927e70] sm:text-sm">
                  {currentNode.description}
                </p>
              </div>

              <div className="shrink-0 rounded-xl border border-[#43291c] bg-[#24150e] px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5">
                <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
                  Automated action
                </p>

                <p className="mt-1 text-xs font-medium text-[#c5b8ae]">
                  {currentNode.action}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.14em] text-[#634f43]">
              Select a workflow stage
            </p>

            <div className="flex gap-1.5">
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