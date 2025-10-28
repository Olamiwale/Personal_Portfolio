import Header from './components/Header';
import About from './pages/About';
import Skill from './pages/Skill';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact'
import Certification from './pages/Certification'



import { Element, animateScroll as scroll } from 'react-scroll';



export default function App() {
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skill">
          <Skill />
        </Element>
        <Element name="project">
          <Project />
        </Element>
        <Element name="certification">
          <Certification />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  )
}
