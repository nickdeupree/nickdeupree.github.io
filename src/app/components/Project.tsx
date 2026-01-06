import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, Typography, Box, Button, Stack, Rating } from '@mui/material'

interface ProjectProps {
  title: string;
  github: string;
  link?: string;
  download?: string;
  description: string;
  image: string;
  difficulty: number;
}

export default function Project({ title, github, link, download, description, image, difficulty }: ProjectProps) {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 6
        }
      }}
    >
      <CardContent sx={{ flex: 1, p: 3 }}>
        <Link href={link || github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 'semibold', color: 'text.primary' }}>
            {title}
          </Typography>
        </Link>
        <Box>
          <Rating value={difficulty} readOnly max={5} size="small" />
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
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {image && (
        <Box sx={{ width: { xs: '100%', md: '33%' }, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
          <Link href={link || github} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '200px' }}
            />
          </Link>
        </Box>
      )}
    </Card>
  )
}