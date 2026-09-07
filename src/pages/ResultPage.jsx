import { SyncOutlined } from "@mui/icons-material"
import { Box, Button, Divider, Typography } from "@mui/material"
import logoLabDesign from '../assets/images/logos/logo_labdesign.png'
import logoDefesaCivil from '../assets/images/logos/logo_defesa_civil.png'
import shieldCheckIcon from '../assets/images/icons/icon-shield-check.png'
import respondidasIcon from '../assets/images/icons/icon-respondidas.png'
import checkIcon from '../assets/images/icons/check-icon.png'
import erroIcon from '../assets/images/icons/erro-icon.png'
import { questions } from '../../data/questions'
import { getPerformanceLabel } from "../../data/labelsPerformances"

const { quizQuestions } = questions()

const ResultPage = ({ onReviewAnswers }) => {
    const savedState = (() => {
        try {
            const raw = localStorage.getItem('quizState')
            return raw ? JSON.parse(raw) : null
        } catch (e) {
            console.error('Erro ao recuperar o estado do quiz do localStorage:', e)
            return null
        }
    })()

    const history = savedState?.history ?? []
    const totalQuestions = quizQuestions.length
    const correctAnswers = history.filter((item) => item.isCorrect).length
    const answeredCount = history.length
    const wrongAnswers = Math.max(answeredCount - correctAnswers, 0)

    const performance = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
    const performanceLabel = getPerformanceLabel(performance);

    const handleClickRevisarRespostas = (() => {
        onReviewAnswers();
    });

    return (
        <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '18px' }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img width="64px" src={logoLabDesign} alt="Logotipo da Defesa Civil" />
                <img width="64px" src={logoDefesaCivil} alt="Logotipo da Defesa Civil" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '6px', width: '100%', textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '6px', width: '100%', textAlign: 'left' }} >
                    <Typography variant="h3" sx={{ alignSelf: 'center', fontWeight: 700, fontSize: '32px', fontFamily: 'Inter' }}>
                        Missão concluída
                    </Typography>
                </div>

                <Divider
                    sx={{
                        alignSelf: 'center',
                        height: '4px',
                        borderRadius: '16px',
                        width: '15vw',
                        backgroundColor: '#FF4F02',
                        border: 'none'
                    }}
                />

                <Typography variant="h2" sx={{ alignSelf: 'center', fontWeight: 700, fontSize: '28px', fontFamily: 'Inter' }}>
                    {performanceLabel?.title || 'Parabéns, agente!'}
                </Typography>
                {(performanceLabel?.subtitle && (
                    <Typography align="center" sx={{ fontWeight: 350, maxWidth: '80vw' }}>
                        {performanceLabel?.subtitle}
                    </Typography>
                ))}
            </div>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    my: '28px',
                    maxWidth: '75vw',
                    padding: '16px',
                    borderWidth: '2px',
                    borderRadius: '8px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
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
                    fontSize: '76px',
                    lineHeight: 1,
                    '@media (max-width: 600px)': {
                        fontSize: '76px'
                    }
                }}>
                    {performance}%
                </Typography>

                <Box sx={{
                    mt: 1,
                    padding: '4px',
                    color: performanceLabel?.color || 'primary.main',
                    fontWeight: 700,
                    fontSize: '24px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: alpha(performanceLabel?.color || theme.palette.primary.main, 0.1),
                    borderRadius: '8px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: performanceLabel?.color
                }}>

                    {performanceLabel?.icon && (
                        <img src={performanceLabel.icon} alt="Ícone de desempenho" style={{ width: '48px', height: '48px', display: 'flex', alignSelf: 'center' }} />
                    )}

                    {performanceLabel?.label || 'Continue treinando!'}

                </Box>

                <Typography sx={{ mt: 2, fontWeight: 400, fontSize: '16px', textAlign: 'center', maxWidth: '75%' }}>
                    {performanceLabel?.description || 'Continue treinando para melhorar seu desempenho!'}
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                padding: '8px',
                borderRadius: '16px'
            }}>
                <Box>
                    <img src={respondidasIcon} style={{ width: '36px' }} />
                    <Typography>{answeredCount}/{totalQuestions}</Typography>
                    <Typography>RESPONDIDAS</Typography>
                </Box>
                <Box sx={{
                    height: '64',
                    width: '2px',
                    borderRadius: '16px',
                    backgroundColor: '#ffffffee'
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
                    backgroundColor: '#ffffffee'
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
                alignItems: 'center',
                flexDirection: 'row',
                borderColor: '#6886b363',
                // // maxWidth: '75%',
                maxHeight: '70%',
                borderStyle: 'solid',
                borderWidth: '1px',
                margin: '32px',
                borderRadius: '16px'
            }}>
                <img src={shieldCheckIcon} width='86px' height='86px' />
                <Typography sx={{
                    maxWidth: '50%',
                    textAlign: 'left',
                    fontSize: '18px'
                }}>
                    Seu conhecimento fortalece comunidades mais seguras.
                </Typography>
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
                    borderRadius: '12px'
                }}
            >
                <SyncOutlined sx={{ mr: 1, height: '28px', width: '28px' }} />
                <Typography sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily: 'Inter'
                }}>
                    Revisar respostas
                </Typography>
            </Button>

            <Box sx={{
                margin: '16px',
                color: '#ffffffaa',
            }}>
                <Typography sx={{
                    fontWeight: 700
                }}>
                    DEFESA CIVIL
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                }}>

                    <Divider sx={{ width: '32px', opacity: 0.5, backgroundColor: '#ffffffaa' }} />
                    <Typography>
                        Prevenção salva vidas
                    </Typography>
                    <Divider sx={{ width: '32px', opacity: 0.5, backgroundColor: '#ffffffaa' }} />

                </Box>
            </Box>
        </Box>
    )
}

export default ResultPage