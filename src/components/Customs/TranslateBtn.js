import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const TranslateBtn = () => {
    // i18next settings
    const { i18n } = useTranslation("translation");
    const translateOnclick = async (lng) => {
      i18n.changeLanguage(lng);
    };
  //Topmenu btns

  const [isActive, setActive] = useState(false);
  const handleActive = (e) => {
    setActive(!isActive);
  }


  // const lngbtns = useRef([]);
  // lngbtns.current = lngs.map((item, idx) => lngbtns.current[idx] ?? createRef());
  const lngs = ["ko", "en", "ja"]; // topMenu idx
  const [isSelect, setIsSelect] = useState();
  const handleClick = (idx) => {
    translateOnclick(`${lngs[idx]}`);
    handleActive();
    document.documentElement.setAttribute("i18next", localStorage.getItem("i18nextLng"));
    if (isSelect === idx) {
      setIsSelect(!idx);
    } else {
      setIsSelect(idx);
    }
  };

  return (
    <div id="topMenu" className={`translate ${isActive === true ? "active" : ""}`}>
      <button type="button" onClick={handleActive}></button>
      <ul className="lang" id="lang_select">
        {lngs.map((item, idx) => {
          return (
            <li key={item}>
              <button
                type="button"
                className={`option-btn ${lngs[idx]} ${isSelect === idx ? "active" : ""}`}
                // ref={lngbtns.current[idx]}
                value={lngs[idx]}
                onClick={() => {
                  handleClick(idx);
                }}
                onTouchStart={() => {
                  handleClick(idx);
                }}
              >
                {lngs[idx]}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
 )

};

export default TranslateBtn;