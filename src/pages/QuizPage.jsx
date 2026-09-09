import { Alert, Box, Button, Card, CardContent, Chip, Divider, Stack, Typography, LinearProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { CheckCircle, Close } from '@mui/icons-material'
import { useMemo, useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { questions } from '../../data/questions'
import { useEnviarCapacitacao } from '../hooks/useEnviarCapacitacao'

const { quizQuestions } = questions();

const QuizPage = () => {
  const { enviarDados } = useEnviarCapacitacao();

  const savedState = (() => {
    try {
      const raw = localStorage.getItem('quizState')
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      console.error('Erro ao ler quizState do localStorage:', e)
      return null
    }
  })()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => savedState?.currentQuestionIndex ?? 0)
  const [selectedAnswerId, setSelectedAnswerId] = useState(() => savedState?.selectedAnswerId ?? null)
  const [showFeedback, setShowFeedback] = useState(() => savedState?.showFeedback ?? false)
  const [history, setHistory] = useState(() => savedState?.history ?? [])
  const [quizFinished, setQuizFinished] = useState(() => savedState?.quizFinished ?? false)

  const currentQuestion = quizQuestions[currentQuestionIndex]

  const theme = useTheme()
  const navigate = useNavigate()

  const score = useMemo(
    () => history.filter((item) => item.isCorrect).length,
    [history],
  )
  const handleAnswer = (option) => {
    if (showFeedback) return

    const isCorrect = option.correct
    const questionSummary = {
      idQuestion: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer: option.text,
      isCorrect,
    }

    // Calcula o novo histórico de forma síncrona, sem depender do setState
    const existingIndex = history.findIndex((item) => item.id === currentQuestion.id)
    let nextHistory = [...history]

    if (existingIndex >= 0) {
      nextHistory[existingIndex] = questionSummary
    } else {
      nextHistory.push(questionSummary)
    }

    // Atualiza os estados do React
    setHistory(nextHistory)
    setSelectedAnswerId(option.id)
    setShowFeedback(true)

    // Salva INSTANTANEAMENTE no localStorage, sem esperar o React renderizar
    try {
      localStorage.setItem('quizState', JSON.stringify({
        currentQuestionIndex,
        selectedAnswerId: option.id,
        showFeedback: true,
        history: nextHistory,
        quizFinished
      }))
    } catch (e) {
      console.error('Erro ao salvar quizState no localStorage:', e)
    }
  }
  const handleNext = async () => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      try {
        localStorage.setItem('quizState', JSON.stringify({
          currentQuestionIndex,
          selectedAnswerId,
          showFeedback,
          history,
          quizFinished: true,
        }))

        await enviarDados()
      } catch (e) {
        console.error('Erro ao finalizar quiz ou enviar dados:', e)
      }

      setQuizFinished(true)
      navigate('/results', { replace: true })
      return
    }

    const nextIndex = currentQuestionIndex + 1
    setCurrentQuestionIndex(nextIndex)
    setSelectedAnswerId(null)
    setShowFeedback(false)

    try {
      localStorage.setItem('quizState', JSON.stringify({
        currentQuestionIndex: nextIndex,
        selectedAnswerId: null,
        showFeedback: false,
        history,
        quizFinished
      }))
    } catch (e) {
      console.error('Erro ao salvar quizState no localStorage:', e)
    }
  }
  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswerId(null)
    setShowFeedback(false)
    setHistory([])
    setQuizFinished(false)
    try {
      localStorage.removeItem('quizState')
    } catch (e) {
      console.error('Erro ao remover quizState do localStorage:', e)
    }
  }

  // Persist quiz state on changes
  useEffect(() => {
    try {
      const toSave = {
        currentQuestionIndex,
        selectedAnswerId,
        showFeedback,
        history,
        quizFinished,
      }
      localStorage.setItem('quizState', JSON.stringify(toSave))
    } catch (e) {
      console.error('Erro ao salvar quizState no localStorage:', e)
    }
  }, [currentQuestionIndex, selectedAnswerId, showFeedback, history, quizFinished])

  // Removed in-page results display: results are shown in `ResultPage`.

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
      <Card sx={{ width: '100%', maxWidth: 760, borderRadius: 3, boxShadow: '0 16px 40px rgba(0,0,0,0.18)' }}>
        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="h5" sx={{ color: theme.palette.text.primary, fontWeight: 700 }}>
              Quiz de Defesa Civil
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 8, minHeight: '16px' }}>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>
              {currentQuestion?.level ?? ''}
            </Typography>
            <Chip sx={{ display: 'flex', maxHeight: '28px', alignItems: 'center' }} label={`${currentQuestionIndex + 1}/${quizQuestions.length}`} color="primary" />
          </Box>

          <Box sx={{ mb: 3, mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={((currentQuestionIndex + 1) / quizQuestions.length) * 100}
              sx={{ height: { xs: 10, sm: 12, md: 16 }, borderRadius: 2, backgroundColor: theme.palette.action.hover, '& .MuiLinearProgress-bar': { backgroundColor: theme.palette.primary.main } }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ mb: 3, color: theme.palette.text.primary, fontWeight: 600, textAlign: 'left', fontSize: { xs: '1rem', sm: '1.05rem', md: '1.15rem' } }}
          >
            {currentQuestion.id}. {currentQuestion.question}
          </Typography>

          {currentQuestion.image && (
            <Box
              component="img"
              src={currentQuestion.image}
              alt={`Imagem da pergunta ${currentQuestion.id}`}
              sx={{ width: '100%', maxHeight: { xs: 120, sm: 220, md: 360 }, objectFit: 'contain', mb: 3, borderRadius: 2 }}
            />
          )}

          <Stack spacing={2}>
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswerId === option.id
              const isCorrectOption = option.correct
              const showCorrectState = showFeedback && isCorrectOption
              const showWrongState = showFeedback && isSelected && !option.correct

              return (
                <Button
                  key={option.id}
                  variant={isSelected ? 'contained' : 'outlined'}
                  color={showCorrectState ? 'success' : showWrongState ? 'error' : 'text.primary'}
                  onClick={() => handleAnswer(option)}
                  sx={{
                    justifyContent: 'flex-start',
                    py: { xs: 1, sm: 1.4 },
                    px: { xs: 1.25, sm: 2 },
                    textTransform: 'none',
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: { xs: '0.95rem', sm: '1rem' }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    {showCorrectState && <CheckCircle />}
                    {showWrongState && <Close />}

                    <Typography>{option.id.toUpperCase()}</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        borderColor: 'grey.600',
                      }}
                    />
                    <Typography sx={{ display: 'flex', alignSelf: 'center' }}>{option.text}</Typography>
                  </Box>
                </Button>
              )
            })}
          </Stack>

          <Dialog
            open={Boolean(showFeedback)}
            onClose={() => { }}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: '16px',
                p: 1.5
              }
            }}
          >
            <DialogTitle sx={{ fontWeight: 700, pb: 0, color: history[history.length - 1]?.isCorrect ? 'success.main' : 'error.main' }}>
              {history[history.length - 1]?.isCorrect
                ? ' Resposta Correta!' : ' Resposta Incorreta'}!!
            </DialogTitle>

            <DialogContent>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, my: 1 }}>
                {history[history.length - 1]?.isCorrect
                  ? 'Parabéns! Você escolheu a alternativa certa.'
                  : 'Veja abaixo a explicação das alternativas para entender melhor.'}
              </Typography>

              <Divider sx={{ my: 1.5 }} />

              {/* Explicação da Resposta Correta */}
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 700, color: theme.palette.success.main, mb: 0.5 }}>
                  Por que a resposta certa está correta:
                </Typography>
                {currentQuestion.options
                  .filter((option) => option.correct)
                  .map((option) => (
                    <Box key={option.id} sx={{ pl: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                        {option.id.toUpperCase()}) {option.text}
                      </Typography>
                      {currentQuestion.explanation?.correct && (
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
                          • {currentQuestion.explanation.correct}
                        </Typography>
                      )}
                    </Box>
                  ))}
              </Box>

              {/* Explicação das Respostas Incorretas */}
              <Box>
                <Typography sx={{ fontWeight: 700, color: theme.palette.error.main, mb: 0.5 }}>
                  Por que as outras estão erradas:
                </Typography>
                <Stack spacing={1} sx={{ pl: 1 }}>
                  {currentQuestion.options
                    .filter((option) => !option.correct)
                    .map((option) => (
                      <Box key={option.id}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {option.id.toUpperCase()}) {option.text}
                        </Typography>
                        {currentQuestion.explanation?.incorrect?.[option.id] && (
                          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                            • {currentQuestion.explanation.incorrect[option.id]}
                          </Typography>
                        )}
                      </Box>
                    ))}
                </Stack>
              </Box>
            </DialogContent>

            <DialogActions sx={{ p: 2, pt: 1 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                fullWidth
                sx={{ minHeight: { xs: 40, sm: 46 } }}
              >
                {currentQuestionIndex === quizQuestions.length - 1 ? 'Ver resultado' : 'Próxima pergunta'}
              </Button>
            </DialogActions>
          </Dialog>

        </CardContent>
      </Card>
    </Box>
  )
}

export default QuizPage