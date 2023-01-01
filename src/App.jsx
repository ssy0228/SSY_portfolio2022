import React, { lazy, Fragment, useState } from "react";
import "./styles/App.scss";
import "./styles/importscss.scss";
const Cursor = lazy(() => import("./components/Customs/Cursor"));
const ErrMsg = lazy(() => import("./components/Customs/ErrMsg"));
const Navigation = lazy(() => import("./components/Head"));

const Banner = lazy(() => import("./Pages/Banner"));
const About = lazy(() => import("./Pages/About"));
const Skills = lazy(() => import("./Pages/Skills"));
const Works = lazy(() => import("./Pages/Works"));
const Contact = lazy(() => import("./Pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ModeChanger = lazy(() => import("./components/Customs/Dark&Scroll"));
const ModalImg = lazy(() => import("./components/modalimg/ModalImg"));
const ModalImg2 = lazy(() => import("./components/modalimg/ModalImg2"));


// const ModeChanger = lazy(() => import("./hooks/Darkmode"));


const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <Fragment>
      <Cursor />
      <ErrMsg />
      <div className="pages" >
        <Navigation />
        <div className={`ani ${isDark ? "night" : ""}`}></div>
        <Banner />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
      <ModeChanger />
      <ModalImg />
      <ModalImg2 />
    </Fragment>
  );
};

export default App;
