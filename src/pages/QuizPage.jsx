import { Alert, Box, Button, Card, CardContent, Chip, Divider, Stack, Typography, LinearProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { CheckCircle, Close } from '@mui/icons-material'
import { useMemo, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { questions } from '../../data/questions'

const { quizQuestions } = questions();

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswerId, setSelectedAnswerId] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [history, setHistory] = useState([])
  const [quizFinished, setQuizFinished] = useState(false)

  const currentQuestion = quizQuestions[currentQuestionIndex]

  const theme = useTheme()

  const score = useMemo(
    () => history.filter((item) => item.isCorrect).length,
    [history],
  )

  const handleAnswer = (option) => {
    if (showFeedback) return

    const isCorrect = option.correct
    const questionSummary = {
      question: currentQuestion.question,
      selectedAnswer: option.text,
      isCorrect,
      correctAnswers: currentQuestion.options
        .filter((item) => item.correct)
        .map((item) => item.text),
      allOptions: currentQuestion.options,
    }

    setSelectedAnswerId(option.id)
    setShowFeedback(true)
    setHistory((previous) => [...previous, questionSummary])
  }

  const handleNext = () => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      setQuizFinished(true)
      return
    }

    setCurrentQuestionIndex((previous) => previous + 1)
    setSelectedAnswerId(null)
    setShowFeedback(false)
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswerId(null)
    setShowFeedback(false)
    setHistory([])
    setQuizFinished(false)
  }

  if (quizFinished) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <Card sx={{ width: '100%', maxWidth: 760, p: 2, borderRadius: 3, boxShadow: '0 16px 40px rgba(0,0,0,0.18)' }}>
          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary }}>
              Resultado do Quiz
            </Typography>

            <Alert severity={score === quizQuestions.length ? 'success' : 'info'} sx={{ mb: 3 }}>
              Você acertou {score} de {quizQuestions.length} perguntas.
            </Alert>

            <Stack spacing={2} sx={{ textAlign: 'left' }}>
              {history.map((item, index) => (
                <Box key={`${item.question}-${index}`} sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2, p: 2, backgroundColor: theme.palette.background.default }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 1 }}>
                    {index + 1}. {item.question}
                  </Typography>
                  <Typography sx={{ color: item.isCorrect ? theme.palette.success.main : theme.palette.error.main }}>
                    Sua resposta: {item.selectedAnswer}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>Resposta correta: {item.correctAnswers.join(', ')}</Typography>
                  <Chip
                    label={item.isCorrect ? 'Correto' : 'Incorreto'}
                    color={item.isCorrect ? 'success' : 'error'}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              ))}
            </Stack>

            <Button variant="contained" onClick={resetQuiz} sx={{ mt: 4 }}>
              Refazer Quiz
            </Button>
          </CardContent>
        </Card>
      </Box>
    )
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
      <Card sx={{ width: '100%', maxWidth: 760, borderRadius: 3, boxShadow: '0 16px 40px rgba(0,0,0,0.18)' }}>
        <CardContent sx={{ p: 4 }}>
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
              sx={{ height: 16, borderRadius: 2, backgroundColor: theme.palette.action.hover, '& .MuiLinearProgress-bar': { backgroundColor: theme.palette.primary.main } }}
            />
          </Box>

          <Typography variant="h6" sx={{ mb: 3, color: theme.palette.text.primary, fontWeight: 600, textAlign: 'left' }}>
            {currentQuestion.id}. {currentQuestion.question}
          </Typography>

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
                    py: 1.8,
                    px: 2,
                    textTransform: 'none',
                    borderRadius: 2,
                    fontWeight: 600,
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
                    <Typography sx={{ display: 'flex', alignSelf: 'center' }} >{option.text}</Typography>
                  </Box>
                </Button>
              )
            })}
          </Stack>
          <Dialog
            open={Boolean(showFeedback)}
            onClose={() => { }} // Opcional: função para fechar ao clicar fora, se desejar
            maxWidth="xs"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: '16px',
                p: 1.5
              }
            }}
          >
            <DialogTitle sx={{ fontWeight: 700, pb: 0, color: theme.palette.text.primary }}>
              Feedback
            </DialogTitle>

            <DialogContent>
              <Typography sx={{ color: theme.palette.text.primary, my: 1 }}>
                {history[history.length - 1]?.isCorrect
                  ? 'Resposta correta! Você acertou esta questão.'
                  : 'Resposta incorreta. Veja quais opções estavam certas e erradas.'}
              </Typography>

              <Divider sx={{ my: 1.5 }} />

              <Typography sx={{ fontWeight: 600, color: theme.palette.success.main }}>
                Certas:
              </Typography>
              <Typography sx={{ color: theme.palette.success.main }}>
                {currentQuestion.options
                  .filter((option) => option.correct)
                  .map((option) => option.text)
                  .join(' • ')}
              </Typography>

              <Typography sx={{ fontWeight: 600, color: theme.palette.error.main, mt: 1.5 }}>
                Erradas:
              </Typography>
              <Typography sx={{ color: theme.palette.error.main }}>
                {currentQuestion.options
                  .filter((option) => !option.correct)
                  .map((option) => option.text)
                  .join(' • ')}
              </Typography>
            </DialogContent>

            <DialogActions sx={{ p: 2, pt: 0 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                fullWidth
                sx={{ minHeight: '46px' }}
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