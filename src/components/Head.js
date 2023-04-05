import React, { lazy, useEffect, useRef } from "react";
import { Link } from 'react-scroll';
import "../styles/components/header.scss";
const TranslateBtn = lazy(() => import("./Customs/TranslateBtn"));



const Head = () => {
  // header >> ref
  const header = useRef();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.innerWidth > 530) {
        window.scrollY > 0 ? (header.current.style.width = "35vw") : (header.current.style.width = "94vw");
        window.scrollY > 0 ? (header.current.className = "head_inner small") : (header.current.className = "head_inner ");
      } else if (window.innerWidth <= 530) { 
        window.scrollY >= 0 && window.scrollY <= Math.abs(window.innerHeight / 3.65) ? (header.current.style.top = 0) : (header.current.style.top = "1rem");
      }
    });
  });


  return (
    <header id="head_wrap" className="Header">
      <div className="head_inner " ref={header}>
        <nav className="gnb">
          <Link to="hello" activeClass="bold" className="start" spy={true} duration={500} smooth={true} offset={0}>
            <span className="symbol">icon1</span>
            <span className="link_title">Hello</span>
          </Link>
          <Link to="about" activeClass="bold" className="second" spy={true} duration={500} smooth={true} offset={0}>
            <span className="symbol">icon2</span>
            <span className="link_title">About</span>
          </Link>
          <Link to="skills" activeClass="bold" className="third" spy={true} duration={500} smooth={true} offset={0}>
            <span className="symbol">icon3</span>
            <span className="link_title">Skills</span>
          </Link>
          <Link to="projects" activeClass="bold" className="fourth" spy={true} duration={500} smooth={true} offset={0}>
            <span className="symbol">icon4</span>
            <span className="link_title">Projects</span>
          </Link>
          <Link to="contact" activeClass="bold" className="fifth" spy={true} duration={500} smooth={true} offset={0}>
            <span className="symbol">icon5</span>
            <span className="link_title">Thanks</span>
          </Link>
        </nav>
      </div>
      <TranslateBtn />
    </header>
  );
};

export default Head;
