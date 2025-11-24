import { Suspense, lazy } from 'react';
import { Element } from 'react-scroll';

import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load all large page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skill = lazy(() => import('./pages/Skill'));
const Project = lazy(() => import('./pages/Project'));
const Contact = lazy(() => import('./pages/Contact'));
const Certification = lazy(() => import('./pages/Certification'));

export default function App() {
  return (
    <div>
      <Header />

    {/* Wrap lazy components in Suspense */}
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>

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

      </Suspense>

      <Footer />
    </div>
  );
}
