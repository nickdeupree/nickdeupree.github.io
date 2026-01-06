'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Typography, Card, CardContent, Box, Chip, Stack, Button, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DownloadIcon from '@mui/icons-material/Download'
import { languages, frameworks, practices, coursework } from '../data/skills'

export default function About() {
  const [expandedSkills, setExpandedSkills] = useState(false)

  return (
    <Box component="section" id="about" sx={{ mb: 6 }}>
      <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            Hi, I&apos;m Nick Deupree &amp; I'm a recent graduate from the University of California, Santa Cruz, pursuing a career in software engineering.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            I'm passionate about building software that solves real problems, and I'm actively developing personal projects to hone my skills and explore new technologies.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            When I&apos;m not at the computer I enjoy wilderness camping, basketball, and staying fit.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Find me at{' '}
            <Link href="https://linkedin.com/in/nicholasdeupree/" style={{ color: '#1976d2', textDecoration: 'none' }}>
              LinkedIn
            </Link>
            {' '}&amp;{' '}
            <Link href="https://github.com/nicholasdeupree/" style={{ color: '#1976d2', textDecoration: 'none' }}>
              GitHub
            </Link>
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              component="a"
              href="/Nicholas Deupree Resume.pdf"
              download
              sx={{ textTransform: 'none' }}
            >
              Download Resume
            </Button>
          </Box>
          <Typography variant="h4" component="h3" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
            Skills
          </Typography>
          <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 'semibold' }}>
            Languages
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {languages.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" />
            ))}
          </Stack>

          <Collapse in={expandedSkills}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 'semibold' }}>
                Frameworks & Tools
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {frameworks.map((skill, index) => (
                  <Chip key={index} label={skill} variant="outlined" />
                ))}
              </Stack>

              <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 'semibold' }}>
                Practices
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {practices.map((skill, index) => (
                  <Chip key={index} label={skill} variant="outlined" />
                ))}
              </Stack>

              <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 'semibold' }}>
                Relevant Coursework
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {coursework.map((skill, index) => (
                  <Chip key={index} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Box>
          </Collapse>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              onClick={() => setExpandedSkills(!expandedSkills)}
              endIcon={<ExpandMoreIcon sx={{ transform: expandedSkills ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />}
              sx={{ textTransform: 'none' }}
            >
              {expandedSkills ? 'Hide' : 'Show'} More Skills
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
