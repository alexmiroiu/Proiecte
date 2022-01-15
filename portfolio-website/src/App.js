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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    if(!localStorage.getItem('darkMode')) {
      localStorage.setItem('darkMode', 'off');
    } else if(localStorage.getItem('darkMode')) {
      const storedValue = localStorage.getItem('darkMode');
      if(storedValue === 'off') {
        setDarkMode(false);
      } else if(storedValue === 'on') {
        setDarkMode(true);
      }
    }
  },[])


  const toggleTheme = () => {
    const storedValue = localStorage.getItem('darkMode');
    if(storedValue === 'off') {
      localStorage.setItem('darkMode', 'on');
    } else if(storedValue === 'on') {
      localStorage.setItem('darkMode', 'off');
    }
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
      {(width < 800) && <MobileHeader logoClick={navigateToHero} aboutClick={navigateToAbout} projectsClick={navigateToProjects} contactClick={navigateToContact}/>}
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
