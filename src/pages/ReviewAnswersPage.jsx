import { Box, Typography, Divider, Chip, Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ReviewAnswersPage = () => {
  const navigate = useNavigate();

  const savedState = (() => {
    try {
      const raw = localStorage.getItem('quizState')
      return raw ? JSON.parse(raw) : { history: [] }
    } catch (e) {
      console.error('Erro ao recuperar o estado do quiz do localStorage:', e)
      return { history: [] }
    }
  })()

  const history = savedState.history ?? []

  const resetQuiz = () => {
    try {
      localStorage.removeItem('quizState')
      localStorage.removeItem('capacitacao')
      localStorage.removeItem('startForm')
    } catch (e) {
      console.error('Erro ao limpar os dados do quiz no localStorage:', e)
    }

    navigate('/form', { replace: true })
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 920, mx: 'auto', px: { xs: 2, sm: 3 }, py: { xs: 3, sm: 4 }, color: 'white' }}>
      {/* <Button
        variant="text"
        startIcon={<ArrowBack />}
        onClick={() => navigate('/results')}
        sx={{ mb: 2, color: 'white', alignSelf: 'flex-start' }}
      >
        Voltar
      </Button> */}

      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'left' }}>
        Revisão das respostas
      </Typography>

      <Divider sx={{ mb: 3, borderColor: '#FC4F0088' }} />

      <Stack spacing={2} sx={{ textAlign: 'left' }}>
        {history.length === 0 ? (
          <Typography sx={{ color: '#eaf4ff' }}>
            Nenhuma resposta foi registrada ainda.
          </Typography>
        ) : (
          history.map((item, index) => (
            <Box
              key={`${item.question}-${index}`}
              sx={{
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 2,
                p: 2,
                backgroundColor: 'background.paper',
                color: 'text.primary',
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                {item.id ?? index + 1}. {item.question}
              </Typography>

              <Typography sx={{ fontWeight: 700, color: item.isCorrect ? 'success.main' : 'error.main', mb: 0.5 }}>
                Sua resposta: {item.selectedAnswer}
              </Typography>

              <Typography sx={{ mb: 0.5 }}>
                Resposta correta: {Array.isArray(item.correctAnswers) ? item.correctAnswers.join(', ') : (item.correctAnswers.text ?? '')}
              </Typography>

              <Chip
                label={item.isCorrect ? 'Correto' : 'Incorreto'}
                color={item.isCorrect ? 'success' : 'error'}
                size="small"
                sx={{ mt: 1, color: 'whitesmoke' }}
              />
            </Box>
          ))
        )}
      </Stack>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={resetQuiz} sx={{ minWidth: 180 }}>
          Refazer Quiz
        </Button>
      </Box>
    </Box>
  )
}

export default ReviewAnswersPage
