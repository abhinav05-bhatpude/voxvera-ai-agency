const steps = [
{
number: "01",
title: "Traffic",
description: "Bring potential customers to your business.",
},
{
number: "02",
title: "AI Website",
description: "Turn visitors into conversations and enquiries.",
},
{
number: "03",
title: "AI Agent",
description: "Understand customers and qualify their needs.",
},
{
number: "04",
title: "Automation",
description: "Move qualified leads into your business workflow.",
},
{
number: "05",
title: "Sales Team",
description: "Give your team the information they need to close.",
},
];

export default function SolutionSection() {
return (
<section
   id="solutions"
   className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8"
 >
<div className="mx-auto max-w-7xl">
<div className="max-w-3xl">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
The solution
</p>

```
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
        Turn Those Problems Into{" "}
        <span className="text-[#c5b8ae]">Automated Systems.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-[#927e70] sm:text-base">
        We connect websites, AI agents, chatbots, and automation into one
        practical system that helps your business capture and manage
        customer opportunities.
      </p>
    </div>

    <div className="mt-14 overflow-hidden rounded-3xl border border-[#43291c] bg-[#1a0f0a]">
      <div className="border-b border-[#43291c] px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#927e70]">
            Business System
          </span>

          <span className="flex items-center gap-2 text-xs text-[#927e70]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />
            Connected workflow
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="grid gap-3 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-center md:block"
            >
              <div className="group w-full rounded-2xl border border-[#43291c] bg-[#24150e] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#634331]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.12em] text-[#927e70]">
                    {step.number}
                  </span>

                  <span className="text-[#927e70] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-base font-semibold text-[#f8f3ed]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#927e70]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#43291c] bg-[#24150e]/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-sm font-medium text-[#f8f3ed]">
              Less manual work. Better customer flow.
            </p>

            <p className="mt-1 text-xs leading-5 text-[#927e70]">
              Every part of the system is designed around a real business
              workflow.
            </p>
          </div>

          <a
            href="#services"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#634331] px-5 py-2.5 text-xs font-semibold text-[#f8f3ed] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2d1b12]"
          >
            Explore Services →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
