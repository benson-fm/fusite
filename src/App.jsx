import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import AboutUs from './pages/AboutUs'
import Home from './pages/HomePage/Home'
import Fundraising from './pages/ProgramsPage/FundraisingPage/Fundraising'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/programs/fundraising" element={<Fundraising/>}/>
      </Routes>
    </Router>
  )
}