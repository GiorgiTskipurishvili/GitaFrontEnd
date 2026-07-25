import { useMemo, useState } from 'react';
import './App.css'

import JobList from './components/JobList'
import FilterBar from './components/FilterBar';
import jobsData from './data.json'
import type { Job } from './types';
import Header from './components/Header';

const jobs = jobsData as Job[];

function App() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev : [...prev, filter]));
  };

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  const clearFilters = () => setActiveFilters([]);


  const filteredJobs = useMemo(() => {
    if (activeFilters.length === 0) return jobs;

    return jobs.filter((job) => {
      const jobTags = new Set([job.role, job.level, ...job.languages, ...job.tools]);
      return activeFilters.every((filter) => jobTags.has(filter));
    });
  }, [activeFilters]);
  return (
    <>
    <div className="min-h-screen">
      <Header />
      <main className="max-w-270 mx-auto px-6 sm:px-8 pb-16 relative z-10">
        <FilterBar filters={activeFilters} onRemove={removeFilter} onClear={clearFilters} />
        <JobList jobs={filteredJobs} onTagClick={addFilter} />
      </main>
    </div>
    </>
  )
}

export default App
