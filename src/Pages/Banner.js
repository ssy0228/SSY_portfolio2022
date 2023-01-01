import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/pages/banner.scss";


const Greet = ({ num }) => {
  const { t } = useTranslation('translation');
  return (
    <span className={`ban greet${num}`}>{t(`greet${num}`)}</span>
  )
}





const Banner = () => {

  return (
    <section id="hello" className="container" name="hello">
      <h2 className="blind">Greets</h2>
      <div className="sector">
        <div className="banner">
          <Greet num={1}></Greet>
          <Greet num={2}></Greet>
          <Greet num={3}></Greet>
          <Greet num={4}></Greet>
        </div>
      </div>
    </section>
  );
};

export default Banner;
