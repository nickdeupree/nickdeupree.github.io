"use client";
import { Typography, Box, Card, CardContent } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab'
import { experiences } from '../data/experience'
import WorkIcon from '@mui/icons-material/Work'

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ mb: 6 }}>
      <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
        Experience
      </Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary" sx={{ py: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {exp.period}
              </Typography>
              <Typography variant="body2">
                {exp.location}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 3 }}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
                    {exp.company}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {exp.responsibilities.map((resp, idx) => (
                      <Typography key={idx} component="li" variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                        {resp}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  )
}
