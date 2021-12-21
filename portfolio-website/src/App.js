import classes from './App.module.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return <main className={classes.main}>
    <Header />
    <Hero />
  </main>
}

export default App;
