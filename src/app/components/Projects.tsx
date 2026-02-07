"use client";
import Project from './Project'
import { projects } from '../data/projects'
import { useState, useMemo } from 'react'
import { Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export default function Projects() {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'difficulty-desc'>('newest')
  // Sort by array order: "newest" = original order, "oldest" = reversed, "difficulty-desc" = highest difficulty first
  const sortedProjects = useMemo(() => {
    if (sortOrder === 'newest') {
      return projects
    } else if (sortOrder === 'oldest') {
      return [...projects].reverse()
    } else if (sortOrder === 'difficulty-desc') {
      return [...projects].sort((a, b) => (b.difficulty || 0) - (a.difficulty || 0))
    }
    return projects
  }, [sortOrder])

  // Only allow filtering by these languages
  const languagesList = ['JavaScript', 'TypeScript', 'Java', 'Python', 'Swift']

  const [selectedLanguage, setSelectedLanguage] = useState<string>('All')

  const availableLanguages = useMemo(() => {
    const present = languagesList.filter((lang) => projects.some((p) => (p.skills || []).includes(lang)))
    return ['All', ...present]
  }, [projects])

  const visibleProjects = useMemo(() => {
    return sortedProjects.filter((p) => selectedLanguage === 'All' || (p.skills || []).includes(selectedLanguage))
  }, [sortedProjects, selectedLanguage])

  return (
    <Box component="section" id="projects" sx={{ mb: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, gap: 2 }}>
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold' }}>
          Projects
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="filter-label">Filter language</InputLabel>
            <Select
              labelId="filter-label"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as string)}
              label="Filter language"
            >
              {availableLanguages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="sort-label">Sort by</InputLabel>
            <Select
              labelId="sort-label"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest' | 'difficulty-desc')}
              label="Sort by"
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
              <MenuItem value="difficulty-desc">Difficulty (High to Low)</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {visibleProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Box>
  )
}