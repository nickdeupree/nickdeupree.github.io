'use client'

import Link from 'next/link'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import DarkModeToggle from '../widgets/DarkModeToggle';

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h5" component="h1" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Nick Deupree
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button 
            color="inherit" 
            component={Link} 
            href="#about"
            sx={{ '&:hover': { textDecoration: 'underline' } }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="#experience"
            sx={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Experience
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="#opensource"
            sx={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Open Source
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="#projects"
            sx={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Projects
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            href="#contact"
            sx={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Contact
          </Button>
          <DarkModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  )
}