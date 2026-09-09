
const features = [
  "Modern UI",
  "Mobile responsive",
  "Lead capture",
  "WhatsApp integration",
  "Booking systems",
  "AI features",
];

export default function AIWebsitesSection() {
  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#927e70]">
              Service 01
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f8f3ed] sm:text-4xl lg:text-5xl">
              AI Websites That{" "}
              <span className="text-[#c5b8ae]">
                Generate Leads.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#927e70] sm:text-base">
              Your website should do more than look good. We build fast,
              modern websites designed to turn visitors into conversations,
              enquiries, and customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-[#43291c] bg-[#24150e] px-3 py-1.5 text-xs text-[#c5b8ae]"
                >
                  {feature}
                </span>
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
              Build My Website
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="rounded-3xl border border-[#43291c] bg-[#1a0f0a] p-4 shadow-2xl sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-[#43291c] bg-[#24150e]">
              <div className="flex items-center gap-2 border-b border-[#43291c] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#5a3827]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5a3827]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5a3827]" />

                <div className="ml-3 flex-1 rounded-md border border-[#43291c] px-3 py-1.5 text-[10px] text-[#927e70]">
                  yourbusiness.com
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="max-w-sm">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#927e70]">
                    Your Business
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#f8f3ed] sm:text-3xl">
                    Turn more visitors into customers.
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-[#927e70]">
                    A website built around your customers, services, and
                    business goals.
                  </p>

                  <div className="mt-6 flex gap-2">
                    <span className="rounded-md bg-[#f8f3ed] px-3 py-2 text-[10px] font-semibold text-[#1a0f0a]">
                      Get Started
                    </span>

                    <span className="rounded-md border border-[#43291c] px-3 py-2 text-[10px] font-semibold text-[#c5b8ae]">
                      Learn More
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-2">
                  <div className="h-20 rounded-xl border border-[#43291c] bg-[#1a0f0a]" />
                  <div className="h-20 rounded-xl border border-[#43291c] bg-[#1a0f0a]" />
                  <div className="h-20 rounded-xl border border-[#43291c] bg-[#1a0f0a]" />
                </div>

                <div className="mt-3 h-2 w-2/3 rounded-full bg-[#43291c]" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-[#43291c]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

