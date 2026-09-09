
"use client";

import { useEffect, useState } from "react";

const messages = [
  {
    type: "customer",
    text: "Hi, I want to know more about your services.",
  },
  {
    type: "ai",
    text: "Absolutely. What are you looking to improve in your business?",
  },
  {
    type: "customer",
    text: "We want to get more leads and respond faster.",
  },
  {
    type: "ai",
    text: "Got it. We can help with AI lead capture, customer conversations, and automated follow-ups.",
  },
];

export default function AIChatbotSection() {
  const [visibleMessages, setVisibleMessages] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((current) =>
        current < messages.length ? current + 1 : 1
      );
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-[#43291c] bg-[#1a0f0a] p-4 shadow-2xl sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e]">
                <div className="flex items-center justify-between border-b border-[#43291c] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f3ed] text-xs font-bold text-[#1a0f0a]">
                      V
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#f8f3ed]">
                        Voxvera AI
                      </p>

                      <div className="mt-0.5 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />
                        <span className="text-[10px] text-[#927e70]">
                          Online
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-[#927e70]">
                    AI Assistant
                  </span>
                </div>

                <div className="min-h-[360px] space-y-4 p-5 sm:p-6">
                  {messages
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

                  {visibleMessages === messages.length && (
                    <div className="mt-6 rounded-xl border border-[#43291c] bg-[#1a0f0a] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.14em] text-[#927e70]">
                          Lead captured
                        </span>

                        <span className="text-xs font-semibold text-[#f8f3ed]">
                          ✓ Qualified
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="rounded-lg border border-[#43291c] p-3">
                          <p className="text-[9px] text-[#927e70]">
                            Intent
                          </p>

                          <p className="mt-1 text-xs text-[#c5b8ae]">
                            More leads
                          </p>
                        </div>

                        <div className="rounded-lg border border-[#43291c] p-3">
                          <p className="text-[9px] text-[#927e70]">
                            Status
                          </p>

                          <p className="mt-1 text-xs text-[#c5b8ae]">
                            Sales ready
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#43291c] p-4">
                  <div className="flex items-center justify-between rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-3">
                    <span className="text-xs text-[#634f43]">
                      Type a message...
                    </span>

                    <span className="text-sm text-[#927e70]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
              Service 02
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
              AI Chatbots That{" "}
              <span className="text-[#c5b8ae]">
                Never Miss a Question.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
              Give customers instant answers while your business collects
              useful information and identifies high-intent leads.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "FAQ handling",
                "Business knowledge",
                "Lead collection",
                "Customer enquiries",
                "Appointment assistance",
                "Human handoff",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-[#43291c] bg-[#24150e] px-4 py-3"
                >
                  <span className="text-xs text-[#f8f3ed]">
                    ✓
                  </span>

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
              Build My Chatbot
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

