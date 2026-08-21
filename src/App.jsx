import { useState } from 'react'
import './App.css'
import { Homepage } from './pages/Homepage'
import StartForm from './pages/StartForm'
import QuizPage from './pages/QuizPage'

function App() {
  const [screen, setScreen] = useState('home')

  return (
    <>
      {screen === 'home' && <Homepage onStart={() => setScreen('form')} />}
      {screen === 'form' && <StartForm onStart={() => setScreen('quiz')} />}
      {screen === 'quiz' && <QuizPage />}
    </>
  )
}

export default App
