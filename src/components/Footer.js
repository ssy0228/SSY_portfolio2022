import React from "react";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/components/footer.scss";

const Foot = () => {
  const { t } = useTranslation("translation");

  return (
    <footer id="footer_wrap" className="container">
      <div className="footer_box">
        <div className="copyright">
          <span className="rights">{t("rights")}</span>
          <span className="notice">{t("notice")}</span>
        </div>
        <h1 className="logo">
          <Link to="hello" activeClass="active" spy={true} smooth={true} duration={500} >
            <span className="blind">SSY</span>
            <img src={process.env.PUBLIC_URL + "/assets/svgs/Porfolio_logo.svg"} alt="logo" />
          </Link>
        </h1>
        <div className="end_wrap">
          <nav className="gnb">
            <Link className="start" to="hello" smooth={true} duration={500} spy={true}>
              <span className="link_title">Hello</span>
            </Link>
            <Link className="second" to="about" smooth={true} duration={500} spy={true}>
              <span className="link_title">About</span>
            </Link>
            <Link className="third" to="skills" smooth={true} duration={500} spy={true}>
              <span className="link_title">Skills</span>
            </Link>
            <Link className="fourth" to="projects" smooth={true} duration={500} spy={true}>
              <span className="link_title">Projects</span>
            </Link>
            <Link className="fifth" to="contact" smooth={true} duration={500} spy={true}>
              <span className="link_title">Thanks</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
