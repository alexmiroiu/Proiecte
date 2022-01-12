import { useState, useRef, useEffect } from 'react';

import classes from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MobileHeader from './components/MobileHeader';
import Projects from './components/Projects';
import Theme from './store/theme';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })


  const toggleTheme = () => {
    setDarkMode(previousState => !previousState);
  }

  const heroComponentRef = useRef();
  const aboutComponentRef = useRef();
  const projectsComponentRef = useRef();
  const contactComponentRef = useRef();

  const navigateToHero = () => {
    heroComponentRef.current.goToHero();
  }
  const navigateToAbout = () => {
    aboutComponentRef.current.goToAbout();
  }
  const navigateToProjects = () => {
    projectsComponentRef.current.goToProjects();
  }
  const navigateToContact = () => {
    contactComponentRef.current.goToContact();
  }

  return(<Theme.Provider value={{
    darkMode: darkMode,
    changeTheme: toggleTheme
  }}>
    <main className={`${classes.main} ${darkMode ? classes.dark : ''}`}>
      {(width > 799) && <Header logoClick={navigateToHero} aboutClick={navigateToAbout} projectsClick={navigateToProjects} contactClick={navigateToContact}/>}
      {(width < 800) && <MobileHeader />}
      <div className={`${classes.outerWrapper} `}>
      <Hero ref={heroComponentRef}/>
      <About ref={aboutComponentRef}/>
      <Projects ref={projectsComponentRef}/>
      <Contact ref={contactComponentRef}/>
      <Footer />

      </div>
    </main>
  </Theme.Provider>
  );
}

export default App;
