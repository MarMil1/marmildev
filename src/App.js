import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { SplashScreen } from "./components/SplashScreen";
import { useEffect, useState } from "react";
import { keepTheme } from "./helpers/themes";
import { NotFound } from "./components/NotFound";

function App() {
  const [isSplashScreen, setIsSplashScreen] = useState(false);

  useEffect(() => {
    keepTheme();
    setInterval(() => {
      setIsSplashScreen(true);
    }, 300);
  }, []);

  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route
          path="/"
          element={
            !isSplashScreen ? (
              <SplashScreen></SplashScreen>
            ) : (
              <>
                <Header></Header>
                <Hero></Hero>
                <About></About>
                <Projects></Projects>
                <Work></Work>
                <Contact></Contact>
                <Footer></Footer>
              </>
            )
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
