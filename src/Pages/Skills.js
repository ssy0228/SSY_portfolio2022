// import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import data from "../assets/data/Skillsset.json";
import "../styles/pages/skills.scss";
// import { Images } from './../hooks/ImagePreload';

const Skills = () => {
  const { t } = useTranslation("translation");
  const modal1Open = () => {
    if (window.innerHeight > 500) {
      document.querySelector(".modal").classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };
  const modal2Open = () => {
    if (window.innerHeight > 500 && window.innerWidth < 500) {
      document.querySelector(".modal2").classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  // const [imgsLoaded, setImgsLoaded] = useState(false);

  // useEffect(() => {
  //   const loadImage = image => { 
  //     return new Promise((resolve, reject) => { 
  //       const loadImg = new Image()
  //       loadImg.src = image.url
  //       loadImage.onload = () =>
  //         setTimeout(() => { 
  //           resolve(image.url)
  //         }, 2000)
        
  //         loadImage.onerror = err => reject(err)
  //     })
  //   }

  //   Promise.all(Images.map(image=>loadImage(image)))
  //     .then(() => setImgsLoaded(true))
  // });


  return (
    <section id="skills" className="container" name="skills">
      <h2 className="bold en">Skills</h2>
      <div className="skill_set">
        <section className="fe_skills">
          <h3 className="skill_title en">FrontEnd</h3>
          <div className="skill_symbols">
            <ol>
              {data
                .filter((item, index) => index < 6)
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <span className={item.name}>
                        <img src={process.env.PUBLIC_URL + `${item.src}`} alt={item.alt} />
                      </span>
                    </li>
                  );
                })}
            </ol>
          </div>
        </section>
        <section className="be_skills">
          <h3 className="skill_title en">BackEnd</h3>
          <div className="skill_symbols">
            <ol>
              {data
                .filter((item, index) => index >= 6 && index < 10)
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <span className={item.name}>
                        <img src={process.env.PUBLIC_URL + `${item.src}`} alt={item.alt} />
                      </span>
                    </li>
                  );
                })}
            </ol>
          </div>
          <div className="not_yet">
            <p className="notice">{t("goal")}</p>
          </div>
        </section>
        <section className="tools">
          <h3 className="skill_title en">Tools</h3>
          <div className="tool_symbols">
            <ul>
              {data
                .filter((item, index) => index >= 10 && index < 14)
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <span className={item.name}>
                        <img src={process.env.PUBLIC_URL + `${item.src}`} alt={item.alt} />
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
        <section className="ctrl_tools">
          <h3 className="skill_title en">Version Conrol</h3>
          <div className="tool_symbols">
            <ul>
              {data
                .filter((item, index) => index >= 14)
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <span className={item.name}>
                        <img src={process.env.PUBLIC_URL + `${item.src}`} alt={item.alt} />
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
        <section className="educated">
          <h3 className="skill_title en">Education</h3>
          <div className="about_education">
            <button type="button" className="education" onClick={modal1Open} onTouchStart={modal1Open} onTouchEnd={modal1Open}>
              {t("check")}
            </button>
            <img src="/assets/images/Completion.png" alt="Completion" className="modal_thumb" onClick={modal1Open} onTouchStart={modal1Open} onTouchEnd={modal1Open} />
          </div>
        </section>
        <section className="certificates">
          <h3 className="skill_title en">Certification</h3>
          <div className="certified">
            <img src={t("td_detail7")} alt="QNET CBT certification" onClick={modal2Open} onTouchStart={modal2Open} onTouchEnd={modal2Open} />
            <span className="detail">{t("detail")}</span>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
