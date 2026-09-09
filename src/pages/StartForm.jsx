import { PlayArrowRounded } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useState } from 'react'

const getInitialForm = () => {
  try {
    const raw = localStorage.getItem('startForm')
    if (!raw) {
      return { name: '', date: new Date().toISOString() }
    }

    const parsed = JSON.parse(raw)
    return {
      name: parsed?.name || '',
      date: parsed?.date || new Date().toISOString(),
    }
  } catch (e) {
    return { name: '', date: new Date().toISOString() }
  }
}

const StartForm = ({ onStart }) => {
  const [form, setForm] = useState(getInitialForm)

  const handleNameChange = (event) => {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
    }))
  }

  const handleStart = () => {
    const trimmedName = form.name.trim()
    if (!trimmedName) return

    const savedForm = {
      name: trimmedName,
      date: form.date || new Date().toISOString(),
    }

    try {
      localStorage.setItem('startForm', JSON.stringify(savedForm))
    } catch (e) {
      // ignore
    }

    onStart?.()
  }

  const isReadyToStart = form.name.trim().length > 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '24px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: 520,
          backgroundColor: 'rgba(255,255,255,0.96)',
          borderRadius: 3,
          p: 4,
          boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
        }}
      >
        <Typography variant="h5" sx={{ color: '#12325c', fontWeight: 700, textAlign: 'center' }}>
          Cadastro do Treinamento
        </Typography>

        <TextField
          label="Nome Completo"
          value={form.name}
          onChange={handleNameChange}
          fullWidth
        />

      <Typography sx={{ marginTop: '-2px', textAlign: 'center', color: '#494e55c7', fontWeight: 400, fontSize: '12px' }}>
          Data da capacitação: {dayjs(form.date).format('DD/MM/YYYY HH:mm')}
        </Typography>

        <Button
          variant="contained"
          size="large"
          disabled={!isReadyToStart}
          onClick={handleStart}
          sx={{
            mt: 1,
            maxWidth: '80vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
          }}
        >
          <PlayArrowRounded sx={{ mr: 1, height: '40px', width: '40px' }} />
          <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px' }}>
            Iniciar Quiz
          </Typography>
        </Button>
      </Box>
    </div>
  )
}

export default StartForm