const leadDetails = [
  { label: "Budget", value: "₹60L" },
  { label: "Property", value: "2BHK" },
  { label: "Location", value: "City Center" },
  { label: "Timeline", value: "3–6 Months" },
];

export default function LeadDetails() {
  return (
    <div className="rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.14em] text-[#927e70] sm:text-[10px] sm:tracking-[0.16em]">
            Lead Intelligence
          </p>

          <p className="mt-1 text-sm font-semibold text-[#f8f3ed]">
            Qualified Prospect
          </p>
        </div>

        <div className="w-fit rounded-full border border-[#43291c] px-3 py-1.5">
          <span className="text-[9px] font-medium text-[#f8f3ed] sm:text-[10px]">
            High Intent
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5">
        {leadDetails.map((detail) => (
          <div
            key={detail.label}
            className="min-w-0 rounded-xl border border-[#43291c] bg-[#24150e] p-3"
          >
            <p className="truncate text-[8px] uppercase tracking-[0.1em] text-[#927e70] sm:text-[9px] sm:tracking-[0.12em]">
              {detail.label}
            </p>

            <p className="mt-1.5 truncate text-[11px] font-medium text-[#c5b8ae] sm:text-xs">
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-xl border border-[#43291c] bg-[#24150e] p-3 sm:mt-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[8px] uppercase tracking-[0.1em] text-[#927e70] sm:text-[9px] sm:tracking-[0.12em]">
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

      <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-[#43291c] bg-[#24150e] p-3 sm:mt-3 sm:p-4">
        <div className="min-w-0">
          <p className="text-[8px] uppercase tracking-[0.1em] text-[#927e70] sm:text-[9px] sm:tracking-[0.12em]">
            Recommended action
          </p>

          <p className="mt-1 truncate text-[11px] font-medium text-[#c5b8ae] sm:text-xs">
            Sales follow-up
          </p>
        </div>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#43291c] text-xs text-[#f8f3ed]">
          →
        </span>
      </div>
    </div>
  );
}