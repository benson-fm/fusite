import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Family from './pages/Family'
import Internship from './pages/Internship'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/Internship" element={<Internship />} />
      </Routes>
    </Router>
  )
}