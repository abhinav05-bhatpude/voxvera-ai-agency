
"use client";

import { useEffect, useState } from "react";

const conversation = [
  {
    type: "customer",
    text: "I'm looking for a 2BHK under ₹60 lakh.",
  },
  {
    type: "ai",
    text: "Got it. Which location are you interested in?",
  },
  {
    type: "customer",
    text: "Around the city center.",
  },
  {
    type: "ai",
    text: "Perfect. What's your preferred possession timeline?",
  },
];

export default function AIAgentSection() {
  const [visibleMessages, setVisibleMessages] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((current) =>
        current < conversation.length ? current + 1 : 1
      );
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
              Service 03
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
              AI Agents That{" "}
              <span className="text-[#c5b8ae]">
                Do More Than Chat.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
              AI agents can understand customer conversations, ask the right
              questions, qualify leads, collect information, and hand
              high-intent opportunities to your team.
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
              className="mt-9 inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
              style={{
                backgroundColor: "#f8f3ed",
                color: "#1a0f0a",
              }}
            >
              Build My AI Agent
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="rounded-3xl border border-[#43291c] bg-[#1a0f0a] p-4 shadow-2xl sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e]">
              <div className="flex items-center justify-between border-b border-[#43291c] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f3ed] text-xs font-bold text-[#1a0f0a]">
                    AI
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#f8f3ed]">
                      Property Agent
                    </p>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />

                      <span className="text-[10px] text-[#927e70]">
                        Qualifying lead
                      </span>
                    </div>
                  </div>
                </div>

                <span className="rounded-full border border-[#43291c] px-2.5 py-1 text-[10px] text-[#927e70]">
                  Live
                </span>
              </div>

              <div className="min-h-[390px] space-y-4 p-5 sm:p-6">
                {conversation
                  .slice(0, visibleMessages)
                  .map((message, index) => (
                    <div
                      key={`${message.type}-${index}`}
                      className={`flex ${
                        message.type === "customer"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs leading-5 ${
                          message.type === "customer"
                            ? "rounded-br-md bg-[#f8f3ed] text-[#1a0f0a]"
                            : "rounded-bl-md border border-[#43291c] bg-[#1a0f0a] text-[#c5b8ae]"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}

                {visibleMessages === conversation.length && (
                  <div className="rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#927e70]">
                        Lead qualification
                      </span>

                      <span className="text-xs font-semibold text-[#f8f3ed]">
                        In progress
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#927e70]">
                          Budget
                        </span>

                        <span className="text-xs text-[#c5b8ae]">
                          ₹60L
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-[#43291c]">
                        <div className="h-full w-[78%] rounded-full bg-[#f8f3ed]" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#927e70]">
                          Property
                        </span>

                        <span className="text-xs text-[#c5b8ae]">
                          2BHK
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#927e70]">
                          Location
                        </span>

                        <span className="text-xs text-[#c5b8ae]">
                          City Center
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-[#43291c] px-5 py-4">
                <div className="flex items-center justify-between text-[10px] text-[#927e70]">
                  <span>Agent is analyzing conversation</span>

                  <span>● ● ●</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

