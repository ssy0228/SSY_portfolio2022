import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import data from "../assets/data/WorksList.json";
import "../styles/pages/works.scss";

const Works = () => {
  const { t } = useTranslation("translation");
  const device = ['PC', 'Mobile-PC'];
  // const ref = useRef([]);
  const [isActive, setIsActive] = useState(null);
  const [isKey, setIsKey] = useState(1);
  let key = 'proj' + isKey;

  // {
  //   if (isKey === 1) {
  //     isActive === isKey ? "" : "active";
  //   } else if (isKey > 1) {
  //     isActive === isKey ? "active" : "";
  //   }
  // }

  return (
    <section id="works" className="container" name="works" >
      <h2 className="bold en">Works</h2>
      <div className="proj_wrapper">
        <nav className="proj_nav">
          {
            data.map((item) => {
              let isKey = item.id;
              return (
                <button type="button" key={item.id} className={`proj${item.id} ${isActive === isKey ? "active" : ""}`}
                  onMouseDown={() => {
                    setIsActive(item.id);
                    setIsKey(isKey);
                  }} onTouchStart={() => { 
                    setIsActive(item.id);
                    setIsKey(isKey);
                  }}>
                  {item.title}
                </button>
              )
            })
          }
        </nav>
        <div className="proj_slide">
          {
            {
              proj1:
                <>
                  {
                    data.filter((item, idx) => idx === 0)
                      .map((item) => {
                        return (
                          <article key={item.id} className={`proj${isKey} ${isActive === true ? "" : "view"}`}>
                            <div id="1" className="intro_img">
                              <div className={device[device.length % 2]}>
                                <div className="imac">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/imac.png`} alt="mock_imac" />
                                  <span className="animate_imac">
                                    <img src={process.env.PUBLIC_URL + item.src1} alt="samsungemfull" />
                                  </span>
                                </div>
                                <div className="macbook">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/macbook.png`} alt="mock_macbook" />
                                  <span className="animate_macbook">
                                    <img src={process.env.PUBLIC_URL + item.src1} alt="samsungemfull" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="intro_txt">
                              <h3 className="bold">{t(`title1`)}</h3>
                              <span className="web_acc_valid">Web Accessibility & Validation Certified</span>
                              <div className="information">
                                <span className="web_info">{t(`tab1_explain1`)}</span>
                              </div>
                              <div className="data_tbl">
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
                                      <td className="en">{device[device.length % 2]}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="intro_tbl2">
                                  <tbody>
                                    <tr>
                                      <td rowSpan={3} className="head">
                                        {t("th_title1")}
                                      </td>
                                      <td className="en">{item.feat1}</td>
                                    </tr>
                                    <tr>
                                      <td className="en">{item.feat2}</td>
                                    </tr>
                                    <tr>
                                      <td className="en">{item.feat3}</td>
                                    </tr>
                                    <tr>
                                      <td className="head">{t("th_title3")}</td>
                                      <td>{t("td_detail2")}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn_wrapper">
                                <a href={item.href} className={`view_proj en ${isActive === true ? "acitve" : ""}`} rel="noreferrer" target="_blank">
                                  Go
                                </a>
                              </div>
                            </div>
                          </article>
                        )
                      })
                  }
                </>
              ,
              proj2:
                <>
                  {
                    data.filter((item, idx) => idx === 1)
                      .map((item) => {
                        return (
                          <article key={item.id} className={`proj2 ${isActive === true ? "" : "view"}`}>
                            <div id="2" className="intro_img">
                              <div className={device[device.length % 2 + 1]}>
                                <div className="imac">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/imac.png`} alt="mock_imac" />
                                  <span className="animate_imac">
                                    <img src={process.env.PUBLIC_URL + item.src1} alt={item.alt1} />
                                  </span>
                                </div>
                                <div className="macbook">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/macbook.png`} alt="mock_macbook" />
                                  <span className="animate_macbook">
                                    <img src={process.env.PUBLIC_URL + item.src1} alt={item.alt1} />
                                  </span>
                                </div>
                                <div className="ipad">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/iPad.png`} alt="mock_ipad" />
                                  <span className="animate_ipad">
                                    <img src={process.env.PUBLIC_URL + item.src2} alt={item.alt2} />
                                  </span>
                                </div>
                                <div className="iphone">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/iPhone.png`} alt="mock_iphone" />
                                  <span className="animate_iphone">
                                    <img src={process.env.PUBLIC_URL + item.src3} alt={item.alt3}/>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="intro_txt">
                              <h3 className="bold">{t(`title2`)}</h3>
                              <span className="web_acc_valid" >Web Accessibility & Validation Certified</span>
                              <div className="information">
                                <span className="web_info">{t(`tab2_explain1`)}</span>
                              </div>
                              <div className="data_tbl">
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
                                      <td className="en">{device[device.length % 2 + 1]}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="intro_tbl2">
                                  <tbody>
                                    <tr>
                                      <td rowSpan={3} className="head">
                                        {t("th_title1")}
                                      </td>
                                      <td className="en">{item.feat1}</td>
                                    </tr>
                                    <tr>
                                      <td className="en">{item.feat2}</td>
                                    </tr>
                                    <tr>
                                      <td className="en">{item.feat3}</td>
                                    </tr>
                                    <tr>
                                      <td className="head">{t("th_title3")}</td>
                                      <td>{t("td_detail3")}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn_wrapper">
                                <a href={item.href} className={`view_proj en ${isActive === true ? "acitve" : ""}`} rel="noreferrer" target="_blank">
                                  Go
                                </a>
                              </div>
                            </div>
                          </article>
                        )
                      })
                  }
                </>
              ,
              proj3:
                <>
                  {
                    data.filter((item, idx) => idx === 2)
                      .map((item) => {
                        return (
                          <article key={item.id} className={`proj3 ${isActive === true ? "" : "view"}`}>
                            <div id="3" className="intro_img">
                              <div className={device[device.length % 2]}>
                                <div className="imac">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/imac.png`} alt="mock_imac" />
                                  <span className="animate_imac">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/vanilla_todo.png`} alt="todolist" />
                                  </span>
                                </div>
                                <div className="macbook">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/macbook.png`} alt="mock_macbook" />
                                  <span className="animate_macbook">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/vanilla_todo.png`} alt="todolist" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="intro_txt">
                              <h3 className="bold">{t(`title3`)}</h3>
                              <span className="web_acc_valid">Personal Toy Project</span>
                              <div className="information">
                                <span className="web_info">{t(`tab3_explain1`)}</span>
                              </div>
                              <div className="data_tbl">
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
                                      <td className="en">{device[device.length % 2]}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="intro_tbl2">
                                  <tbody>
                                    <tr>
                                      <td rowSpan={3} className="head">
                                        {t("th_title1")}
                                      </td>
                                      <td className="en">{item.feat1}</td>
                                    </tr>
                                    <tr>
                                      <td className="en">{item.feat2}</td>
                                    </tr>
                                    <tr>
                                      <td className="en">{item.feat3}</td>
                                    </tr>
                                    <tr>
                                      <td className="head">{t("th_title3")}</td>
                                      <td>{t("td_detail2")}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn_wrapper">
                                <a href="https://ssy0228.github.io/kakao_2022_react" className={`view_proj en ${isActive === true ? "acitve" : ""}`} rel="noreferrer" target="_blank">
                                  Go
                                </a>
                              </div>
                            </div>
                          </article>
                        )
                      })
                  }
                </>
              ,
              proj4:
                <>
                  {
                    data.filter((item, idx) => idx === 3)
                      .map((item) => {
                        return (
                          <article key={item.id} className={`proj4 ${isActive === true ? "" : "view"}`}>
                            <div id="4" className="intro_img">
                              <div className={device[device.length % 2 + 1].slice(0, 6)}>
                                <div className="iphone">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/Device_Set_iPhone_Mockup.png`} alt="mock_iphone" />
                                  <span className="MP4">
                                    <video autoPlay loop muted src={process.env.PUBLIC_URL + `/assets/video/mo_kakaotalk.mp4`} type="video/mp4" poster={item.src1}></video>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="intro_txt">
                              <h3 className="bold">{t(`title4`)}</h3>
                              <span className="web_acc_valid">Personal React Toy Project</span>
                              <div className="information">
                                <span className="web_info">{t(`tab4_explain1`)}</span>
                              </div>
                              <div className="data_tbl">
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
                                      <td className="en">{device[device.length % 2 + 1].slice(0, 6)}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="intro_tbl2">
                                  <tbody>
                                    <tr>
                                      <td rowSpan={3} className="head">
                                        {t("th_title1")}
                                      </td>
                                      <td>{item.feat1}</td>
                                    </tr>
                                    <tr>
                                      <td>{item.feat2}</td>
                                    </tr>
                                    <tr>
                                      <td>{item.feat3}</td>
                                    </tr>
                                    <tr>
                                      <td className="head">{t("th_title3")}</td>
                                      <td>{t("td_detail2")}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn_wrapper">
                                <a href={item.href} className={`view_proj en ${isActive === true ? "acitve" : ""}`} rel="noreferrer" target="_blank">
                                  Go
                                </a>
                              </div>
                            </div>
                          </article>
                        )
                      })
                  }
                </>
              ,
              proj5:
                <>
                  {
                    data.filter((item, idx) => idx === 4)
                      .map((item) => {
                        return (
                          <article key={item.id} className={`proj5 ${isActive === true ? "" : "view"}`}>
                            <div id="5" className="intro_img">
                              <div className={device[device.length % 2]}>
                                <div className="imac">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/imac.png`} alt="mock_imac" />
                                  <span className="animate_imac">
                                    <img src={process.env.PUBLIC_URL + item.src1} alt={item.alt1} />
                                  </span>
                                </div>
                                <div className="macbook">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/macbook.png`} alt="mock_macbook" />
                                  <span className="animate_macbook">
                                    <img src={process.env.PUBLIC_URL + item.src1} alt={item.alt2} />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="intro_txt">
                              <h3 className="bold">{t(`title5`)}</h3>
                              <span className="web_acc_valid">REACT+TS or HTML5+TS</span>
                              <div className="information">
                                <span className="web_info">{t(`tab5_explain1`)}</span>
                              </div>
                              <div className="data_tbl">
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
                                      <td className="en">{device[device.length % 2]}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="intro_tbl2">
                                  <tbody>
                                    <tr>
                                      <td rowSpan={3} className="head">
                                        {t("th_title1")}
                                      </td>
                                      <td>{item.feat1}</td>
                                    </tr>
                                    <tr>
                                      <td>{item.feat2}</td>
                                    </tr>
                                    <tr>
                                      <td>{item.feat3}</td>
                                    </tr>
                                    <tr>
                                      <td className="head">{t("th_title3")}</td>
                                      <td>{t("td_detail2")}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn_wrapper">
                                <a href={item.href} className={`view_proj en ${isActive === true ? "acitve" : ""}`} rel="noreferrer" target="_blank">
                                  Go
                                </a>
                              </div>
                            </div>
                          </article>

                        )
                      })
                  }
                </>,
              proj6:
                <>
                  {
                    data.filter((item, idx) => idx === 5)
                      .map((item) => {
                        return (
                          <article key={item.id} className={`proj6 ${isActive === true ? "" : "view"}`}>
                            <div id="6" className="intro_img">
                              <div className={device[device.length % 2 + 1]}>
                                <div className="imac">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/imac.png`} alt="mock_imac" />
                                  <span className="animate_imac">
                                    <img className="day" src={process.env.PUBLIC_URL + item.src1} alt={item.alt1} />
                                    <img className="dark" src={process.env.PUBLIC_URL + item.src2} alt={item.alt2} />
                                  </span>
                                </div>
                                <div className="macbook">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/macbook.png`} alt="mock_macbook" />
                                  <span className="animate_macbook">
                                    <img className="day" src={process.env.PUBLIC_URL + item.src1} alt={item.alt1} />
                                    <img className="dark" src={process.env.PUBLIC_URL + item.src2} alt={item.alt2} />
                                  </span>
                                </div>
                                <div className="ipad">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/iPad.png`} alt="mock_ipad" />
                                  <span className="animate_ipad">
                                    <img className="day" src={process.env.PUBLIC_URL + item.src3} alt={item.alt3} />
                                    <img className="dark" src={process.env.PUBLIC_URL + item.src4} alt={item.alt4} />
                                  </span>
                                </div>
                                <div className="iphone">
                                  <img src={process.env.PUBLIC_URL + `/assets/images/iPhone.png`} alt="mock_iphone" />
                                  <span className="animate_iphone">
                                    <img className="day" src={process.env.PUBLIC_URL + item.src5} alt={item.alt5} />
                                    <img className="dark" src={process.env.PUBLIC_URL + item.src6} alt={item.alt6} />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="intro_txt">
                              <h3 className="bold">{t(`title6`)}</h3>
                              <span className="web_acc_valid">My Portfolio create with React 18.2</span>
                              <div className="information">
                                <span className="web_info">{t(`tab6_explain1`)}</span>
                              </div><div className="data_tbl">
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
                                      <td className="en">{device[device.length % 2 + 1]}</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table className="intro_tbl2">
                                  <tbody>
                                  <tr>
                                      <td rowSpan={4} className="head">
                                        {t("th_title1")}
                                      </td>
                                      <td>{item.feat1}</td>
                                    </tr>
                                    <tr>
                                      <td>{item.feat2}</td>
                                    </tr>
                                    <tr>
                                      <td>{item.feat3}</td>
                                    </tr>
                                    <tr>
                                      <td>{item.feat4}</td>
                                    </tr>
                                    <tr>
                                      <td className="head">{t("th_title3")}</td>
                                      <td>{t("td_detail2")}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn_wrapper">
                                <a href={item.href} className={`view_proj en ${isActive === true ? "acitve" : ""}`} rel="noreferrer" target="_blank">
                                  Go
                                </a>
                              </div>
                            </div>
                          </article>
                        )
                      })
                  }
                </>,
            }[key]
          }
        </div>
      </div>
    </section>
  );
};

export default Works;