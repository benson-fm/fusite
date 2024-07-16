import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/HomePage/Home'
import Programs from './pages/ProgramsPage/programs'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs/>} />
      </Routes>
    </Router>
  )
}