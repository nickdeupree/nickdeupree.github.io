"use client";
import Project from './Project'
import { projects } from '../data/projects'
import { useState, useMemo } from 'react'

export default function Projects() {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  // Sort by array order: "newest" = original order, "oldest" = reversed
  const sortedProjects = useMemo(() => {
    if (sortOrder === 'newest') {
      return projects
    } else {
      return [...projects].reverse()
    }
  }, [sortOrder, projects])

  return (
    <section id="projects" className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-text">Projects</h2>
        <div>
          <label htmlFor="sort" className="mr-2 text-sm text-text-muted">Sort by:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value as 'newest' | 'oldest')}
            className="border rounded px-2 py-1 text-sm text-text-muted "
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="bg-background grid grid-cols-1 gap-6">
        {sortedProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}