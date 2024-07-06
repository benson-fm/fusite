import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import { MeetingsPage } from './pages/meetingsPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetingsPage" element={<MeetingsPage />} />
      </Routes>
    </Router>
  )
}