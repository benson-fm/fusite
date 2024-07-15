import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import { AlumniPage } from './pages/AlumniPage'
import { MentorshipPage } from './pages/MentorshipPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
      </Routes>
    </Router>
  )
}