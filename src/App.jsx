import React from 'react'
import Launch from './pages/Launch';
import Rnd from './pages/Rnd';
import Team from './pages/TeamPage';
import Explore from './pages/Explore';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
AOS.init();

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' exact element={<Launch />} />
          <Route path='/Research&Development' exact element={<Rnd />} />
          <Route path='/Team' exact element={<Team />} />
          <Route path='/Explore' exact element={<Explore />} />
        </Routes>
      </>
    </Router>
  )
}

export default App