
const leadDetails = [
  {
    label: "Budget",
    value: "₹60L",
  },
  {
    label: "Property",
    value: "2BHK",
  },
  {
    label: "Location",
    value: "City Center",
  },
  {
    label: "Timeline",
    value: "3–6 Months",
  },
];

export default function LeadDetails() {
  return (
    <div className="rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#927e70]">
            Lead Intelligence
          </p>

          <p className="mt-1 text-sm font-semibold text-[#f8f3ed]">
            Qualified Prospect
          </p>
        </div>

        <div className="rounded-full border border-[#43291c] px-3 py-1.5">
          <span className="text-[10px] font-medium text-[#f8f3ed]">
            High Intent
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {leadDetails.map((detail) => (
          <div
            key={detail.label}
            className="rounded-xl border border-[#43291c] bg-[#24150e] p-3"
          >
            <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
              {detail.label}
            </p>

            <p className="mt-1.5 text-xs font-medium text-[#c5b8ae]">
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-[#43291c] bg-[#24150e] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
            Lead Score
          </span>

          <span className="text-sm font-semibold text-[#f8f3ed]">
            86/100
          </span>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#43291c]">
          <div className="h-full w-[86%] rounded-full bg-[#f8f3ed]" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl border border-[#43291c] bg-[#24150e] p-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.12em] text-[#927e70]">
            Recommended action
          </p>

          <p className="mt-1 text-xs font-medium text-[#c5b8ae]">
            Sales follow-up
          </p>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#43291c] text-xs text-[#f8f3ed]">
          →
        </span>
      </div>
    </div>
  );
}

