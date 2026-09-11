
"use client";

import { FormEvent, useState } from "react";

const packages = ["Starter", "Medium", "Pro", "Not sure"];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
              Tell us what your{" "}
              <span className="text-[#c5b8ae]">
                business needs.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
              Whether you need a professional website, your own AI chatbot,
              or a complete automated workflow, tell us what you want to
              improve and we will figure out the right solution.
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-[#43291c] bg-[#24150e] p-4 sm:p-5">
                <p className="text-[9px] uppercase tracking-[0.14em] text-[#927e70]">
                  Starter
                </p>
                <p className="mt-1 text-sm font-medium text-[#f8f3ed]">
                  Professional Website
                </p>
                <p className="mt-1 text-xs text-[#634f43]">
                  ₹15,000
                </p>
              </div>

              <div className="rounded-2xl border border-[#43291c] bg-[#24150e] p-4 sm:p-5">
                <p className="text-[9px] uppercase tracking-[0.14em] text-[#927e70]">
                  Medium
                </p>
                <p className="mt-1 text-sm font-medium text-[#f8f3ed]">
                  Website + AI Chatbot
                </p>
                <p className="mt-1 text-xs text-[#634f43]">
                  ₹20,000
                </p>
              </div>

              <div className="rounded-2xl border border-[#43291c] bg-[#24150e] p-4 sm:p-5">
                <p className="text-[9px] uppercase tracking-[0.14em] text-[#927e70]">
                  Pro
                </p>
                <p className="mt-1 text-sm font-medium text-[#f8f3ed]">
                  Website + AI + Automation
                </p>
                <p className="mt-1 text-xs text-[#634f43]">
                  ₹25,000
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#43291c] bg-[#24150e] p-5 shadow-2xl sm:p-7 lg:p-8">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#634331] bg-[#2a190f] text-xl text-[#f8f3ed]">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#f8f3ed]">
                  Thanks for reaching out.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#927e70]">
                  Your enquiry has been received. We will review your
                  requirements and get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-lg border border-[#43291c] px-5 py-3 text-xs font-semibold text-[#f8f3ed] transition-all duration-300 hover:border-[#634331] hover:bg-[#2a190f]"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927e70]">
                    Start a conversation
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#f8f3ed]">
                    Let's build something useful.
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#927e70]">
                    Share a few details about your business and what you want
                    to improve.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]"
                      >
                        Your name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="mt-2 w-full rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-3 text-xs text-[#f8f3ed] outline-none transition-colors placeholder:text-[#634f43] focus:border-[#634331]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]"
                      >
                        Business name
                      </label>

                      <input
                        id="business"
                        name="business"
                        type="text"
                        required
                        placeholder="Your business"
                        className="mt-2 w-full rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-3 text-xs text-[#f8f3ed] outline-none transition-colors placeholder:text-[#634f43] focus:border-[#634331]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@business.com"
                        className="mt-2 w-full rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-3 text-xs text-[#f8f3ed] outline-none transition-colors placeholder:text-[#634f43] focus:border-[#634331]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]"
                      >
                        WhatsApp / Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-3 text-xs text-[#f8f3ed] outline-none transition-colors placeholder:text-[#634f43] focus:border-[#634331]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="businessType"
                      className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]"
                    >
                      Business type
                    </label>

                    <input
                      id="businessType"
                      name="businessType"
                      type="text"
                      placeholder="e.g. Real estate, clinic, restaurant"
                      className="mt-2 w-full rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-3 text-xs text-[#f8f3ed] outline-none transition-colors placeholder:text-[#634f43] focus:border-[#634331]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]">
                      Interested in
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {packages.map((packageName) => (
                        <label
                          key={packageName}
                          className="group flex cursor-pointer items-center gap-2 rounded-xl border border-[#43291c] bg-[#1a0f0a] px-3 py-3 transition-colors has-[:checked]:border-[#634331] has-[:checked]:bg-[#2a190f]"
                        >
                          <input
                            type="radio"
                            name="package"
                            value={packageName}
                            required
                            className="accent-[#f8f3ed]"
                          />

                          <span className="text-[10px] text-[#c5b8ae]">
                            {packageName}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#927e70]"
                    >
                      Tell us about your requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What do you want your website, AI chatbot, or automation system to do?"
                      className="mt-2 w-full resize-none rounded-xl border border-[#43291c] bg-[#1a0f0a] px-4 py-3 text-xs leading-6 text-[#f8f3ed] outline-none transition-colors placeholder:text-[#634f43] focus:border-[#634331]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg px-5 py-3.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{
                      backgroundColor: "#f8f3ed",
                      color: "#1a0f0a",
                    }}
                  >
                    Start a Conversation
                    <span className="ml-2">→</span>
                  </button>

                  <p className="text-center text-[9px] leading-5 text-[#634f43]">
                    No pressure. Tell us what you need and we will help you
                    understand the right solution.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

