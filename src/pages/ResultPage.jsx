import { SyncOutlined } from "@mui/icons-material"
import { alpha, Box, Button, Divider, Typography } from "@mui/material"
import logoLabDesign from '../assets/images/logos/logo_labdesign.png'
import logoDefesaCivil from '../assets/images/logos/logo_defesa_civil.png'
import sparklesIcon from '../assets/images/icons/sparkles-sharp.png'
import checkIcon from '../assets/images/icons/check-icon.png'
import erroIcon from '../assets/images/icons/erro-icon.png'
import { questions } from '../../data/questions'

const { quizQuestions } = questions()

const ResultPage = ({ onReviewAnswers }) => {
    const savedState = (() => {
        try {
            const raw = localStorage.getItem('quizState')
            return raw ? JSON.parse(raw) : null
        } catch (e) {
            return null
        }
    })()

    const history = savedState?.history ?? []
    const totalQuestions = quizQuestions.length
    const correctAnswers = history.filter((item) => item.isCorrect).length
    const answeredCount = history.length
    const wrongAnswers = Math.max(answeredCount - correctAnswers, 0)
    const performance = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0

    const performanceLabel = performance >= 80 ? 'Excelente!' : performance >= 60 ? 'Muito bom!' : performance >= 40 ? 'Bom esforço!' : 'Continue treinando!'

    const handleClickRevisarRespostas = (() => {
        onReviewAnswers();
    });

    return (
        <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img width="64px" src={logoLabDesign} alt="Logotipo da Defesa Civil" />
                <img width="64px" src={logoDefesaCivil} alt="Logotipo da Defesa Civil" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '6px', width: '100%', textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '6px', width: '100%', textAlign: 'left' }} >
                    <Typography variant="h3" sx={{ alignSelf: 'center', fontWeight: 700, fontSize: '32px', fontFamily: 'PixelifySans' }}>
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
                sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    my: '36px',
                    height: '25vh',
                    width: '100vw',
                    backgroundColor: 'text.primary',
                    // Borda apenas no topo e na base
                    borderTop: '2px solid',
                    borderBottom: '2px solid',
                    borderColor: 'primary.main',
                    // Efeito Blur/Degradê partindo do topo e da base para o interior
                    boxShadow: `inset 0 16px 20px -10px ${alpha(theme.palette.primary.main, 0.6)}, 
                    inset 0 -16px 20px -10px ${alpha(theme.palette.primary.main, 0.6)}`,
                })}
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
                    fontSize: '76px',
                    lineHeight: 1,
                    '@media (max-width: 600px)': {
                        fontSize: '76px'
                    }
                }}>
                    {performance}%
                </Typography>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: '24px',
                    color: 'success.main'
                }}>
                    {performanceLabel}
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                backgroundColor: '#6886b363',
                padding: '18px',
                borderRadius: '16px'
            }}>
                <Box>
                    <img src={sparklesIcon} style={{ width: '36px' }} />
                    <Typography>{answeredCount}/{totalQuestions}</Typography>
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
                    <Typography>{correctAnswers}/{totalQuestions}</Typography>
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
                    <Typography>{wrongAnswers}/{totalQuestions}</Typography>
                    <Typography>ERROS</Typography>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: '16px',
                backgroundColor: '#6886b363',
                padding: '24px',
                margin: '24px',
                borderRadius: '16px'
            }}>
                <img src={sparklesIcon} />
                <Typography>Você está cada vez mais preparado para proteger e agir com excelência!</Typography>
            </Box>

            <Button
                variant="contained"
                size="large"
                onClick={handleClickRevisarRespostas}
                sx={{
                    maxWidth: '50vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '6px'
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