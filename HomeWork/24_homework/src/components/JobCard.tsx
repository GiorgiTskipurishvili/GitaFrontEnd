import type { Job } from "../types";

interface JobCardProps {
  job: Job;
  onTagClick: (tag: string) => void;
}

export default function JobCard({ job, onTagClick }: JobCardProps) {
  const tags = Array.from(
    new Set([job.role, job.level, ...job.languages, ...job.tools]),
  );

  return (
    <>
          <article
      className={`relative flex flex-col gap-4 rounded-lg border-l-4 bg-white p-6 pt-10 shadow-lg sm:flex-row sm:items-center sm:gap-8 sm:p-8 sm:pt-8 ${
        job.featured ? "border-teal" : "border-transparent"
      }`}
    >
      <div className="relative flex items-center gap-5 sm:flex-1">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="absolute -top-11 left-0 h-12 w-12 sm:static sm:h-14 sm:w-14"
        />

        <div className="min-w-0 pt-2 sm:pt-0">
          <div className="mb-1 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-teal">{job.company}</span>
            {job.new && (
              <span className="rounded-full bg-teal px-2 py-0.5 text-xs font-bold tracking-wide text-white">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className="rounded-full bg-navy px-2 py-0.5 text-xs font-bold tracking-wide text-white">
                FEATURED
              </span>
            )}
          </div>

          <h2 className="mb-2 mt-0.5 cursor-pointer text-lg font-bold hover:text-teal">
            {job.position}
          </h2>

          <ul className="flex flex-wrap gap-x-2 text-sm text-muted">
            {[job.postedAt, job.contract, job.location].map((item, i, arr) => (
              <li key={item} className="flex items-center gap-2">
                {item}
                {i < arr.length - 1 && <span aria-hidden="true">&bull;</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden h-14 w-px shrink-0 self-center bg-neutral-200 sm:block" />
      <div className="h-px w-full bg-neutral-200 sm:hidden" />

      <ul className="flex flex-wrap gap-3 sm:shrink-0">
        {tags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              className="rounded bg-tag-bg px-2.5 py-1.5 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white"
              onClick={() => onTagClick(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </article>
    </>
  );
}
