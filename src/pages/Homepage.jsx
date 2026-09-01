import { PlayArrowRounded } from '@mui/icons-material'
import { Box, Button, Divider, Typography } from '@mui/material'
import logoLabDesign from '../assets/images/logos/logo_labdesign.png'
import logoDefesaCivil from '../assets/images/logos/logo_defesa_civil.png'

export const Homepage = ({ onStart }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '720px',
        boxSizing: 'border-box',
        px: { xs: 2.5, sm: 3, md: 4 },
        py: { xs: 3, sm: 4, md: 5 },
        margin: '0 auto'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
        <img width="64px" src={logoLabDesign} alt="Logotipo da Defesa Civil" />
        <img width="64px" src={logoDefesaCivil} alt="Logotipo da Defesa Civil" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '6px', width: '100%', textAlign: 'left', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '6px', width: '100%', textAlign: 'left', boxSizing: 'border-box' }} >
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, fontSize: { xs: '26px', sm: '32px' }, fontFamily: 'PixelifySans', lineHeight: 1.1 }}>
            Defesa Civil
          </Typography>
          <Typography
            className='texto-estilizado'
            variant="h7"
            component="h2"
            sx={{
              fontSize: { xs: '38px', sm: '48px' },
              fontFamily: 'Inter',
              fontStyle: 'SemiBold',
              fontWeight: 600,
              lineHeight: 1,
              wordBreak: 'break-word',
              overflowWrap: 'anywhere'
            }}
          >
            TREINAMENTO
          </Typography>
          <Divider
            sx={{
              width: '100%',
              borderColor: '#FC4F0088'
            }}
          />

        </div>
        <Typography sx={{ color: '#eaf4ff', maxWidth: '560px', fontWeight: 400, fontSize: { xs: '18px', sm: '22px' }, marginTop: '16px', lineHeight: 1.4, wordBreak: 'break-word' }}>
          Torne-se um agente preparado para identificar riscos, responder emergências e proteger vidas.
        </Typography>
        <Typography sx={{ color: '#eaf4ff', fontSize: { xs: '17px', sm: '19px' }, fontWeight: 600, marginTop: '16px', lineHeight: 1.4 }}>
          Responda o quiz corretamente
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onStart}
          sx={{ marginTop: { xs: '32px', sm: '64px' }, px: 2, py: 1, alignSelf: 'center' }}
        >
          <PlayArrowRounded sx={{ mr: 1, height: '40px', width: '40px' }} />
          <Typography sx={{ fontFamily: 'PixelifySans', fontSize: { xs: '20px', sm: '24px' } }}>
            Iniciar
          </Typography>
        </Button>
      </div>
    </Box>
  )
}