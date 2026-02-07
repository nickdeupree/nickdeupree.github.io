import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, Typography, Box, Button, Stack, Rating, Tooltip, Chip } from '@mui/material'

interface ProjectProps {
  title: string;
  github: string;
  link?: string;
  download?: string;
  description: string;
  image?: string;
  difficulty: number;
  skills?: string[];
}

export default function Project({ title, github, link, download, description, image, difficulty, skills }: ProjectProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        transformOrigin: 'center center',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.01)',
        }
      }}
    >
      <CardContent sx={{ flex: 1, p: 3 }}>
        <Link href={link || github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 'semibold', color: 'text.primary' }}>
            {title}
          </Typography>
        </Link>
        <Box sx={{ mb: 1 }}>
          <Tooltip title={`${difficulty}/5 difficulty`} arrow placement="right">
            <Box sx={{ display: 'inline-flex' }}>
              <Rating value={difficulty} readOnly max={5} size="small" />
            </Box>
          </Tooltip>
        </Box>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          {link && (
            <Button
              size="small"
              component={Link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: 'none' }}
            >
              Visit Site
            </Button>
          )}
          {download && (
            <Button
              size="small"
              component={Link}
              href={download}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: 'none' }}
            >
              Download
            </Button>
          )}
          <Button
            size="small"
            component={Link}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none' }}
          >
            Repo
          </Button>
        </Stack>

        {skills && skills.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'nowrap', overflowX: 'auto', pb: 1, mb: 2 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} size="small" variant="outlined" />
            ))}
          </Box>
        )}

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {image && (
        <Box sx={{ width: { xs: '100%', md: '33%' }, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, overflow: 'hidden' }}>
          <Link href={link || github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box component="span" className="project-image" sx={{ display: 'inline-block', transition: 'transform 300ms ease', transformOrigin: 'center center', '&:hover': { transform: 'scale(1.1)' } }}>
              <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '200px' }}
              />
            </Box>
          </Link>
        </Box>
      )}
    </Card>
  )
}