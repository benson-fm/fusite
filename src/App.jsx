import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import AboutUs from './pages/AboutUs'
import Home from './pages/HomePage/Home'
import { MeetingsPage } from './pages/meetingsPage'
import Social from './pages/Social'
import Board from './pages/Board'
import { AlumniPage } from './pages/AlumniPage'
import { MentorshipPage } from './pages/MentorshipPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Board" element={<Board />} />
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/meetingsPage" element={<MeetingsPage />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
      </Routes>
    </Router>
  )
}