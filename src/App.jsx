import React, { lazy, Fragment } from "react";
import "./styles/App.scss";
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


const App = () => {
  const setVh = () => { 
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
  }
  window.addEventListener('resize', setVh);
  setVh();

  return (
    <Fragment>
      <Cursor />
      <ErrMsg />
      <div className="pages" >
        <Navigation />
        <div className={`ani`}></div>
        <Banner />
        <div className="wrapper">
          <About />
          <Skills />
          <Works />
          <Contact />
        </div>
        <Footer />
      </div>
      <ModeChanger />
      <ModalImg />
      <ModalImg2 />
    </Fragment>
  );
};

export default App;
