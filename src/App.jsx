import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import AboutUs from './pages/AboutUs'
import Home from './pages/HomePage/Home'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}