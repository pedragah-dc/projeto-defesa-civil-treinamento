import { PlayArrowRounded } from '@mui/icons-material'
import { Button, Divider, Typography } from '@mui/material'

export const Homepage = ({ onStart }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '36px' }}>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
        <img width="64px" src="src/assets/images/logos/logo_labdesign.png" alt="Logotipo da Defesa Civil" />
        <img width="64px" src="src/assets/images/logos/logo_defesa_civil.png" alt="Logotipo da Defesa Civil" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '6px', width: '100%', textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '6px', width: '100%', textAlign: 'left' }} >
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, fontSize: '32px', fontFamily: 'PixelifySans' }}>
            Defesa Civil
          </Typography>
          <Typography className='texto-estilizado' variant="h7" component="h2" sx={{ fontSize: '48px', fontFamily: 'Inter', fontStyle: 'SemiBold', fontWeight: 600, }}>
            TREINAMENTO
          </Typography>
          <Divider
            sx={{
              width: '100%',
              borderColor: '#FC4F0088'
            }}
          />

        </div>
        <Typography sx={{ color: '#eaf4ff', maxWidth: '560px', fontWeight: 400, fontSize: '22px', marginTop: '16px' }}>
          Torne-se um agente preparado para identificar riscos, responder emergências e proteger vidas.
        </Typography>
        <Typography sx={{ color: '#eaf4ff', fontSize: '19px', fontWeight: 600, marginTop: '16px' }}>
          Responda o quiz corretamente
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onStart}
          sx={{ marginTop: '64px', px: 2, py: 1, alignSelf: 'center' }}
        >
          <PlayArrowRounded sx={{ mr: 1, height: '40px', width: '40px' }} />
          <Typography sx={{ fontFamily: 'PixelifySans', fontSize: '24px' }}>
            Iniciar
          </Typography>
        </Button>
      </div>
    </div>
  )
}