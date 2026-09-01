import './App.css'
import { Homepage } from './pages/Homepage'
import StartForm from './pages/StartForm'
import QuizPage from './pages/QuizPage'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import ResultPage from './pages/ResultPage'

function HomepageWrapper() {
  const navigate = useNavigate()
  return <Homepage onStart={() => navigate('/form')} />
}

function StartFormWrapper() {
  const navigate = useNavigate()
  return <StartForm onStart={() => navigate('/quiz')} />
}

function App() {
  return (
    <BrowserRouter>
      <div className="root" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: 0,
        margin: 0
        }}>
        <Routes>
          <Route path="/" element={<HomepageWrapper />} />
          {/* <Route path="/" element={<ResultPage />} /> */}
          
          <Route path="/form" element={<StartFormWrapper />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
