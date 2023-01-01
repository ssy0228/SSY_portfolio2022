import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/components/Modal.scss";

const ModalImg = () => {
  const { t } = useTranslation('translation');

  //different area's event target
  // maybe?? i can use event.target?
  const modalClose = () => {
    document.querySelector(".modal").classList.remove("open");
    document.body.style.overflowY = "auto";
  };

  return (
    <div className="modal">
      <button type="button" className="off" onMouseDown={modalClose} onTouchStart={modalClose}>
        close
      </button>
      <div className="completionImg">
        <img src={ process.env.PUBLIC_URL + "/assets/images/Completion.png"} className="modal_content" alt="completion"/>
      </div>
      <div className="caption">
        <span className="which">[{t("which")}]</span>
        <span className="subject">[{t("subject")}]</span>
        <span className="title">
          {t("subject1")}
          <span className="en">UI/UX</span>
          {t("subject2")}
          <span className="en">(React.js)_C</span>
        </span>
        <span className="provider">
          <span className="en">ezen</span>
          {t("provider")}
        </span>
      </div>
    </div>
  );
};

export default ModalImg;
