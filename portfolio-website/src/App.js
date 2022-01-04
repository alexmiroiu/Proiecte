import { useState } from 'react';

import classes from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Theme from './store/theme';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(previousState => !previousState);
    
  }

  return(<Theme.Provider value={{
    darkMode: darkMode,
    changeTheme: toggleTheme
  }}>
    <main className={classes.main}>
      <Header />
      <div className={`${classes.outerWrapper} ${darkMode ? classes.dark : ''}`}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

      </div>
    </main>
  </Theme.Provider>
  );
}

export default App;
