import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import Explain from "../components/Explain";
import data from "../assets/data/WorksList.json";
import "../styles/pages/works.scss";

const Works = () => {
  const { t } = useTranslation("translation");

  // const className = ``;
  const device =['PC', 'Mobile-PC'];
  
  const [isActive, setIsActive] = useState();
  const handleClick = (idx) => {
    if (isActive === idx) {
      setIsActive(!idx);
      document.body.style.overflowY = "auto";
    } else {
      setIsActive(idx);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <section id="works" className="container" name="works">
      <h2 className="bold en">Works</h2>
      <div className="proj_wrapper">
        <div className="proj_slide">
          <div className="proj_1">
            {
              data.map((item, idx) => { 
                return (
                  <article key={idx} className={`proj${item.id}`}>
                    <div id={item.id} className="intro_img">
                      <img src={item.src1} alt={item.alt1} className="day"/>
                      <img src={item.src2} alt={item.alt2} className="dark"/>
                    </div>
                    <div className="intro_txt">
                      <h3 className="bold">{t(`title${item.id}`)}</h3>
                      <table className="intro_tbl">
                        <tbody>
                          <tr>
                            <td rowSpan={3} className="head">
                              {t("th_title")}
                            </td>
                            <td className="en">{item.skill1}</td>
                          </tr>
                          <tr>
                            <td className="en">{item.skill2}</td>
                          </tr>
                          <tr>
                            <td className="en">{item.skill3}</td>
                          </tr>
                          <tr>
                            <td className="head">{t("th_title4")}</td>
                            <td className="en">{device[idx%2]}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="btn_wrapper">
                        <button type="button" className={`explain ${isActive === true ? "acitve" : ""}`} onClick={() => { handleClick(idx); }} onTouchStart={(e) => {
                          if (window.innerHeight > 500) { handleClick(idx); }
                        }}
                        // onTouchEnd={(e) => {
                        //   if (window.innerHeight > 500) { handleClick(idx); }
                        // }}
                        >
                          {t("btn_detail")}
                        </button>
                        <a href={item.href} className={`view_proj en ${isActive === true ? "acitve" : ""}`} rel="noreferrer" target="_blank">
                          Go
                        </a>
                      </div>
                    </div>
                    <div className={`pop_explain ${isActive === idx ? "open" : ""}`} >
                      <button type="button" className="off" onClick={() => { handleClick(idx); }} onTouchStart={() => { if (window.innerHeight > 500) {
                          handleClick(idx);
                        } }}>
                        close
                      </button>
                      <div>
                        <p>
                            {t(`pop${item.id}_explain1`)}
                            <br />
                            {t(`pop${item.id}_explain2`)}
                            <br />
                            {t(`pop${item.id}_explain3`)}
                          <br />
                          <br />
                            {t(`pop${item.id}_explain4`)}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* some day will be used */}
      {/* <div className="proj_slct blind">
        <button type="button" className="slide prev">
          prev
        </button>
        <button type="button" className="slide next">
          next
        </button>
      </div> */}
    </section>
  );
};

export default Works;
