import { SyncOutlined } from "@mui/icons-material"
import { Box, Button, Divider, Typography } from "@mui/material"
import logoLabDesign from '../assets/images/logos/logo_labdesign.png'
import logoDefesaCivil from '../assets/images/logos/logo_defesa_civil.png'
import sparklesIcon from '../assets/images/icons/sparkles-sharp.png'
import checkIcon from '../assets/images/icons/check-icon.png'
import erroIcon from '../assets/images/icons/erro-icon.png'

const ResultPage = () => {

    const handleClickRevisarRespostas = (() => {
        
    });

    return (
        <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img width="64px" src={logoLabDesign} alt="Logotipo da Defesa Civil" />
                <img width="64px" src={logoDefesaCivil} alt="Logotipo da Defesa Civil" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '6px', width: '100%', textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '6px', width: '100%', textAlign: 'left' }} >
                    <Typography variant="h3" component="h1" sx={{ alignSelf: 'center', fontWeight: 700, fontSize: '32px', fontFamily: 'PixelifySans' }}>
                        Missão concluída
                    </Typography>
                </div>

                <Divider
                    sx={{
                        alignSelf: 'center',
                        height: '3px',
                        width: '30vw',
                        background: 'linear-gradient(90deg, #FF4F02 20%, #FFFFFF 50%, rgba(255, 79, 2, 0.5) 80%)',
                        borderRadius: '50%'
                    }}
                />

                <Typography sx={{ fontWeight: 500, fontSize: '18px' }}>
                    Parabéns, agente!
                </Typography>

                <Typography align="center" sx={{ fontWeight: 350, maxWidth: '80vw' }}>
                    Você concluiu o treinamento com sucesso.
                </Typography>
            </div>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    my: '48px',
                    height: '25vh',
                    width: '100vw',
                    backgroundColor: 'text.primary',

                    // Borda fina com o gradiente desejado
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    borderColor: 'primary.main',

                    // Efeito de brilho desfocado (Blur Glow)
                    filter: 'drop-shadow(0px 0px 48px rgba(255, 79, 2, 0.6))',
                }}
            >
                <Typography sx={{
                    color: 'background.paper',
                    fontWeight: 600,
                    fontSize: '18px'
                }}>
                    Seu desempenho:
                </Typography>
                <Typography className="texto-estilizado" sx={{
                    fontWeight: 700,
                    fontSize: '80px'
                }}>
                    90%
                </Typography>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: '24px',
                    color: 'success.main'
                }}>
                    Excelente!
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                backgroundColor: '#6886b363',
                padding: '28px',
                borderRadius: '16px'
            }}>
                <Box>
                    <img src={sparklesIcon} style={{ width: '36px' }} />
                    <Typography>20/20</Typography>
                    <Typography>RESPONDIDAS</Typography>
                </Box>
                <Box sx={{
                    height: '64',
                    width: '2px',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff46'
                }} />
                <Box>
                    <img src={checkIcon} style={{ width: '36px' }} />
                    <Typography>20/20</Typography>
                    <Typography>ACERTOS</Typography>
                </Box>
                <Box sx={{
                    height: '64',
                    width: '2px',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff46'
                }} />
                <Box>
                    <img src={erroIcon} style={{ width: '36px' }} />
                    <Typography>20/20</Typography>
                    <Typography>ERROS</Typography>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: '16px',
                backgroundColor: '#6886b363',
                padding: '28px',
                margin: '38px',
                borderRadius: '16px'
            }}>
                <img src={sparklesIcon} />
                <Typography>Você está cada vez mais preparado para proteger e agir com excelência!</Typography>
            </Box>

            <Button
                variant="contained"
                size="large"
                onClick={ handleClickRevisarRespostas }
                sx={{
                    maxWidth: '60vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '16px'
                }}
                >
                <SyncOutlined sx={{ mr: 1, height: '40px', width: '40px' }} />
                <Typography sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily: 'Inter'
                }}>
                    Revisar respostas
                </Typography>
            </Button>
        </Box>
    )
}

export default ResultPage