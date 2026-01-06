"use client";
import Project from './Project'
import { openSourceProjects } from '../data/openSource'
import { useState, useMemo } from 'react'
import { Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export default function OpenSource() {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'difficulty-desc'>('newest')
  
  const sortedProjects = useMemo(() => {
    if (sortOrder === 'newest') {
      return openSourceProjects
    } else if (sortOrder === 'oldest') {
      return [...openSourceProjects].reverse()
    } else if (sortOrder === 'difficulty-desc') {
      return [...openSourceProjects].sort((a, b) => (b.difficulty || 0) - (a.difficulty || 0))
    }
    return openSourceProjects
  }, [sortOrder])

  return (
    <Box component="section" id="opensource" sx={{ mb: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold' }}>
          Open Source
        </Typography>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="sort-label-opensource">Sort by</InputLabel>
          <Select
            labelId="sort-label-opensource"
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {sortedProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Box>
  )
}
