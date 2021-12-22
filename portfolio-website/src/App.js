import classes from './App.module.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return <main className={classes.main}>
    <Header />
    <div className={classes.outerWrapper}>
    <Hero />
    <About />

    </div>
  </main>
}

export default App;
