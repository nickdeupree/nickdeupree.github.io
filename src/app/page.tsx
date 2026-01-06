'use client'

import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import OpenSource from './components/OpenSource'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Container, Box } from '@mui/material'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <About />
        <Experience />
        <OpenSource />
        <Projects />
        <Contact />
      </Container>
    </Box>
  )
}