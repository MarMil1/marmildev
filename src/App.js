// import logo from './logo.svg';
import './App.css';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Contact } from './components/Contact';


function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
