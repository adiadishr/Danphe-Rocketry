import AOS from 'aos'
import 'aos/dist/aos.css'
import Join from './components/Join';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
AOS.init();

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Join />
    </>
  )
}

export default App