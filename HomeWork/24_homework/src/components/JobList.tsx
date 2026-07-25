import type { Job } from "../types";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: Job[];
  onTagClick: (tag: string) => void;
}
export default function JobList({ jobs, onTagClick }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <p className="py-10 text-center text-muted">
        No job postings match your selected filters.
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onTagClick={onTagClick} />
        ))}
      </div>
    </>
  );
}
