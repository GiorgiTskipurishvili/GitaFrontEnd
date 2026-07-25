interface FilterBarProps {
  filters: string[];
  onRemove: (filter: string) => void;
  onClear: () => void;
}

export default function FilterBar({
  filters,
  onRemove,
  onClear,
}: FilterBarProps) {
  if (filters.length === 0) return null;
  return (
    <>
    <div className="-mt-7 mb-10 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-5 shadow-lg sm:px-8">
      <ul className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <li key={filter} className="flex overflow-hidden rounded-md text-sm font-bold">
            <span className="bg-tag-bg px-2.5 py-1.5 text-teal">{filter}</span>
            <button
              type="button"
              className="px-3 text-white transition-colors bg-teal hover:bg-navy"
              aria-label={`Remove ${filter} filter`}
              onClick={() => onRemove(filter)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="font-semibold text-muted underline transition-colors hover:text-teal"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
    </>
  );
}
