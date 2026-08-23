import { PlayArrowRounded } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useState } from 'react'

const StartForm = ({ onStart }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState(null)

  const isReadyToStart = name.trim().length > 0 && dayjs(date).isValid()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '24px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
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
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
        />

        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <DatePicker
            label="Data da Capacitação"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          size="large"
          disabled={!isReadyToStart}
          onClick={onStart}
          sx={{
            mt: 1,
            maxWidth: '80vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto' // Centraliza o botão horizontalmente no container
          }}
        >
          <PlayArrowRounded sx={{ mr: 1, height: '40px', width: '40px' }} />
          <Typography sx={{ fontFamily: 'PixelifySans', fontSize: '24px' }}>
            Iniciar Quiz
          </Typography>
        </Button>
      </Box>
    </div>
  )
}

export default StartForm