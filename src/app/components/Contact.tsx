'use client'

import { useState } from 'react'
import { Typography, Card, CardContent, TextField, Button, Box } from '@mui/material'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log({ name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Box component="section" id="contact" sx={{ mb: 6 }}>
      <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
        Contact
      </Typography>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
            >
              Send
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
