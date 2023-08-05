import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { SplashScreen } from "./components/SplashScreen";
import { useEffect, useState } from "react";
import { keepTheme } from "./helpers/themes";
import { NotFound } from "./components/NotFound";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview("/");
  const [isSplashScreen, setIsSplashScreen] = useState(false);

  useEffect(() => {
    keepTheme();
    setInterval(() => {
      setIsSplashScreen(true);
    }, 2300);
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
