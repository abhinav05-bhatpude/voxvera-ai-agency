const handoffDetails = [
  {
    label: "Trigger",
    value: "High-intent lead",
  },
  {
    label: "Reason",
    value: "Ready for sales",
  },
  {
    label: "Priority",
    value: "High",
  },
];

export default function HumanHandoff() {
  return (
    <div className="rounded-2xl border border-[#43291c] bg-[#1a0f0a] p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.14em] text-[#927e70] sm:text-[10px] sm:tracking-[0.16em]">
            Human Handoff
          </p>

          <p className="mt-1 text-sm font-semibold text-[#f8f3ed]">
            Sales team notified
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-[#43291c] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f8f3ed]" />

          <span className="text-[9px] font-medium text-[#c5b8ae] sm:text-[10px]">
            Ready
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-3">
        {handoffDetails.map((detail) => (
          <div
            key={detail.label}
            className="min-w-0 rounded-xl border border-[#43291c] bg-[#24150e] p-3"
          >
            <p className="text-[8px] uppercase tracking-[0.1em] text-[#927e70] sm:text-[9px] sm:tracking-[0.12em]">
              {detail.label}
            </p>

            <p className="mt-1.5 truncate text-[11px] font-medium text-[#c5b8ae] sm:text-xs">
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-xl border border-[#43291c] bg-[#24150e] p-3 sm:mt-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#43291c] text-sm text-[#f8f3ed]">
            →
          </div>

          <div className="min-w-0">
            <p className="text-[8px] uppercase tracking-[0.1em] text-[#927e70] sm:text-[9px] sm:tracking-[0.12em]">
              Automated action
            </p>

            <p className="mt-1 truncate text-[11px] font-medium text-[#c5b8ae] sm:text-xs">
              Lead summary sent to sales
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-[#43291c] bg-[#24150e] px-3 py-3 sm:mt-3 sm:px-4">
        <div className="min-w-0">
          <p className="text-[8px] uppercase tracking-[0.1em] text-[#927e70] sm:text-[9px] sm:tracking-[0.12em]">
            Handoff status
          </p>

          <p className="mt-1 truncate text-[11px] font-medium text-[#f8f3ed] sm:text-xs">
            Human follow-up required
          </p>
        </div>

        <span className="shrink-0 text-xs text-[#f8f3ed]">✓</span>
      </div>
    </div>
  );
}