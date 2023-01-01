import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/components/Modal2.scss";

const ModalImg2 = () => {
  const { t } = useTranslation('translation');

  //different area's event target
  // maybe?? i can use event.target?
  const modalClose = () => {
    document.querySelector(".modal2").classList.remove("open");
    document.body.style.overflowY = "auto";
  };

  return (
    <div className="modal2">
      <button type="button" className="off" onMouseDown={modalClose} onTouchStart={modalClose}>
        close
      </button>
      <div className="completionImg">
        <img src={process.env.PUBLIC_URL + `${t("td_detail7")}`} className="modal_content" alt="QNET CBT certification"/>
      </div>
    </div>
  );
};

export default ModalImg2;