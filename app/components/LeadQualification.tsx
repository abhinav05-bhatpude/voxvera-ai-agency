
"use client";

import { useEffect, useState } from "react";

const stages = [
  "Conversation started",
  "Understanding requirements",
  "Collecting lead details",
  "Lead qualified",
];

export default function LeadQualification() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((current) => (current + 1) % stages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#927e70]">
            AI Lead Qualification
          </p>

          <p className="mt-1 text-sm font-semibold text-[#f8f3ed]">
            {stages[stage]}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#43291c]">
          <span className="text-xs text-[#f8f3ed]">
            {stage + 1}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {stages.map((item, index) => {
          const completed = index < stage;
          const active = index === stage;

          return (
            <div key={item} className="flex items-center gap-3">
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                  completed || active
                    ? "border-[#f8f3ed] bg-[#f8f3ed] text-[#1a0f0a]"
                    : "border-[#43291c] text-[#634f43]"
                }`}
              >
                {completed ? "✓" : index + 1}
              </div>

              <span
                className={`text-xs ${
                  active || completed
                    ? "text-[#c5b8ae]"
                    : "text-[#634f43]"
                }`}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-7 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-[#43291c] bg-[#24150e] p-3">
          <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
            Budget
          </p>

          <p className="mt-1 text-xs font-medium text-[#f8f3ed]">
            ₹60L
          </p>
        </div>

        <div className="rounded-xl border border-[#43291c] bg-[#24150e] p-3">
          <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
            Property
          </p>

          <p className="mt-1 text-xs font-medium text-[#f8f3ed]">
            2BHK
          </p>
        </div>

        <div className="rounded-xl border border-[#43291c] bg-[#24150e] p-3">
          <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
            Location
          </p>

          <p className="mt-1 text-xs font-medium text-[#f8f3ed]">
            City Center
          </p>
        </div>

        <div className="rounded-xl border border-[#43291c] bg-[#24150e] p-3">
          <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
            Intent
          </p>

          <p className="mt-1 text-xs font-medium text-[#f8f3ed]">
            High
          </p>
        </div>
      </div>
    </div>
  );
}

