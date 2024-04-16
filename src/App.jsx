import AOS from 'aos'
import 'aos/dist/aos.css'
import Launch from './pages/Launch';
import Rnd from './pages/Rnd';
import Explore from './pages/Explore';
AOS.init();

const App = () => {
  return (
    <>  
      <Explore />
    </>
  )
}

export default App