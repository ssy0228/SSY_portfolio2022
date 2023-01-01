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
            <h3 className="data_title en">Personal Data</h3>
            <div className="data_box">
              <ul className="data_list">
                <li className="stack1 color_rgb">📛 {t("stack1")}</li>
                <li className="stack2 color_rgb">🎂 {t("stack2")}</li>
                <li className="stack3 color_rgb"
                  onMouseDown={() => {
                  if (document.documentElement.getAttribute("i18next") === "en") {
                    window.open("https://en.wikipedia.org/wiki/Dongdaemun_District")
                  } else if (document.documentElement.getAttribute("i18next") === "ja") {
                    window.open("https://ja.wikipedia.org/wiki/%E6%9D%B1%E5%A4%A7%E9%96%80%E5%8C%BA");
                  }
                }}
                  onTouchStart={() => {
                  if (document.documentElement.getAttribute("i18next") === "en") {
                    window.open("https://en.wikipedia.org/wiki/Dongdaemun_District")
                  } else if (document.documentElement.getAttribute("i18next") === "ja") {
                    window.open("https://ja.wikipedia.org/wiki/%E6%9D%B1%E5%A4%A7%E9%96%80%E5%8C%BA");
                  }
                }}
                >📬 {t("stack3")}</li>
                <li className="stack4 color_rgb en">💻 FrontEnd Web Developer</li>
              </ul>
            </div>
            <h3 className="goal_title en">Final Goal</h3>
            <div className="data_box">
              <div className="data_list">
                <span className="stack5 color_rgb en">👩🏻‍💻 FullStack Web Developer</span>
              </div>
            </div>
          </div>
          <div className="info_box">
            <h3 className="info_title en">Specialty</h3>
            <div className="info_list">
              <span className="key_word">{t("keyword8")}</span>
            </div>
            <h3 className="info2_title">Result</h3>
            <div className="info2">
              <ul className="info2_list">
                <li className="stack6 color_rgb">{t("keyword6")}<span className="en">JLPT N1</span></li>
                <li className="stack7 color_rgb en">JPT 930</li>
                <li className="pic_caption color_rgb en"
                  onMouseDown={() => {
                  if (document.documentElement.getAttribute("i18next") === "ko") {
                    window.open("http://www.bjttest.com/kor/doc/sub1_03.php");
                  } else if (document.documentElement.getAttribute("i18next") === "en") {
                    window.open("https://www.kanken.or.jp/bjt/english/about/levelguide.html");
                  } else if (document.documentElement.getAttribute("i18next") === "ja") {
                    window.open("https://www.kanken.or.jp/bjt/about/level_sample.html");
                  }
                }}
                  onTouchStart={() => {
                  if (document.documentElement.getAttribute("i18next") === "ko") {
                    window.open("http://www.bjttest.com/kor/doc/sub1_03.php");
                  } else if (document.documentElement.getAttribute("i18next") === "en") {
                    window.open("https://www.kanken.or.jp/bjt/english/about/levelguide.html");
                  } else if (document.documentElement.getAttribute("i18next") === "ja") {
                    window.open("https://www.kanken.or.jp/bjt/about/level_sample.html");
                  }
                }}
                >BJT J1</li>
              </ul>
            </div>
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
              <span className="key_word">{t("keyword14")}</span>
            </div>
          </div>
          <div className="introduce_me_box">
            <h3 className="introduce_me_title en">Introduce Me</h3>
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
