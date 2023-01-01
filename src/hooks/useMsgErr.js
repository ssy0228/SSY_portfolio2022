import React from "react";
import { useTranslation } from "react-i18next";

const MsgErr = () => {
  const { t } = useTranslation("translation");
  const touchPt = navigator.maxTouchPoints;


  if (touchPt === 0) {
    return <span>{t("error2")}</span>;
  } else if (touchPt >= 1) {
    return <span>{t("error1")}</span>;
  }
};

export default MsgErr;
