import { useTranslation } from "react-i18next";
import "../styles/pages/about_me.scss";

const About = () => {
  const { t } = useTranslation("translation");

  return (
    <section id="about" className="container" name="about">
      <h2 className="bold en">About Me</h2>
      <div className="prof_categorized">
        <div className="descript">
          {/* light mode keyboard dark mode coding */}
          <div className="back">backgroundimg</div>
          <div className="pic_frame">
            <img src={process.env.PUBLIC_URL + "/assets/images/AREmoji_20220920_174855_13878_edit.gif"} alt="myProfileImg" />
          </div>
          <div className="backdrop">background filter</div>
        </div>
        <div className="introduce_container">
          <div className="pic_container">
            <span className="stack1 color_rgb">📛 {t("stack1")}</span>
            <span className="stack2 color_rgb">🎂 {t("stack2")}</span>
            <span className="stack3 color_rgb" onClick={() => {
              if (document.documentElement.getAttribute("i18next") === "en") {
                window.open("https://en.wikipedia.org/wiki/Dongdaemun_District")
              } else if (document.documentElement.getAttribute("i18next") === "ja") { 
                window.open("https://ja.wikipedia.org/wiki/%E6%9D%B1%E5%A4%A7%E9%96%80%E5%8C%BA");
              }
            }}>📬 {t("stack3")}</span>
            <span className="pic_caption color_rgb en">💻 FrontEnd Developer</span>
          </div>
          <div className="key_word_box">
            <h3 className="key_word_title en">Character</h3>
            <div className="key_word_list">
              <span className="key_word en">ISTJ</span>
              <span className="key_word">{t("keyword1")}</span>
              <span className="key_word">{t("keyword2")}</span>
              <span className="key_word">{t("keyword3")}</span>
              <span className="key_word">{t("keyword4")}</span>
              <span className="key_word">{t("keyword5")}</span>
            </div>
          </div>
          <div className="introduce_me_box">
            <h3 className="introduce_me_title en blind">Introduce Me</h3>
            <ul className="introduce_me_list">
              <li>
                <span className="color_rgb" style={{ fontWeight: 800}}>{t("intro1")}</span>
                {t("intro2")}
              </li>
              <li>{t("intro3")}</li>
              <li>{t("intro5")}</li>
              <li>{t("intro6")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
