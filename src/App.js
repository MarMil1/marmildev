import './App.css';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { Repository } from './components/Repository';
import { SplashScreen } from './components/SplashScreen';
import { useEffect, useState } from 'react';


function App() {
  const [ isSplashScreen, setIsSplashScreen] = useState(false);
  
  useEffect(() => {
    setInterval(() => {
      setIsSplashScreen(true);
    }, 2300);
  }, []);

  return (
    <>
      {!isSplashScreen ? 
        <SplashScreen></SplashScreen> 
        :
        <>
          <Header></Header>
          <Hero></Hero>
          <About></About>
          <Projects></Projects>
          <Work></Work>
          <Contact></Contact>
          <Repository></Repository>
          <Footer></Footer>
        </>
      }  
    </>
  );
}

export default App;
