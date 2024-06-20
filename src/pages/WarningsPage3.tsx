import { FunctionComponent, useState, useCallback, useEffect } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Levels from "../components/Levels";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage3.module.css";

type WarningsPage3Type = {
  onClose?: () => void;
};

const WarningsPage3: FunctionComponent<WarningsPage3Type> = ({ onClose }) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLevelsPopupOpen, setLevelsPopupOpen] = useState(false);
  const [isLevelsPopup1Open, setLevelsPopup1Open] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(true);
  }, []);

  const closeNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(false);
  }, []);

  const openProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(true);
  }, []);

  const closeProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(false);
  }, []);

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  const openLevelsPopup = useCallback(() => {
    setLevelsPopupOpen(true);
  }, []);

  const closeLevelsPopup = useCallback(() => {
    setLevelsPopupOpen(false);
  }, []);

  const openLevelsPopup1 = useCallback(() => {
    setLevelsPopup1Open(true);
  }, []);

  const closeLevelsPopup1 = useCallback(() => {
    setLevelsPopup1Open(false);
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsWarningP3Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsWarningP3Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP3Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <>
      <div className={styles.warningsPage3}>
        <div className={styles.topbarWarningP3}>
          <div className={styles.header} />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <img
            className={styles.notificationpopupWarningp3Icon}
            alt=""
            src="/vector.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profilePopupWarningp3Icon}
            alt=""
            src="/group.svg"
            onClick={openProfilePopUp}
          />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector@2x.png"
            onClick={openInfoPagePopup}
          />
        </div>
        <div className={styles.level1HeaderWarningp3}>
          <div className={styles.header1} />
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/vector5.svg"
            onClick={openLevelsPopup}
          />
          <b
            className={styles.level1}
            onClick={openLevelsPopup1}
          >{`Level 1 `}</b>
        </div>
        <div className={styles.totalWarningBox} />
        <div className={styles.totalwarningp3}>
          <div className={styles.totalwarningp3Child} />
          <div className={styles.totalOf132Container}>
            <span>
              <span>{`Total of `}</span>
              <span className={styles.span}>
                <b className={styles.b}>132</b>
              </span>
            </span>
            <span>
              <span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span>
                <span className={styles.level11}>level-1</span>
                <span>{` warnings: `}</span>
              </span>
            </span>
          </div>
        </div>
        <div className={styles.scrollWarningp3} data-animate-on-scroll>
          <ol className={styles.warningsWarningp3}>
            <div className={styles.level1ThomasContainer}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1 `}</span>
                <span>{`       Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer1}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Thomas St - CCTV 12                   15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1PittContainer}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1       `}</span>
                <span>{`  Pitt St - CCTV 12                           15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer2}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Thomas St - CCTV 12                   15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer3}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Thomas St - CCTV 12                   15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1PittContainer1}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Pitt St - CCTV 12                           15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1QueenContainer}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Queen St - CCTV 12                      15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer4}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Thomas St - CCTV 12                    15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1QuayContainer}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Quay St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1PittContainer2}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Pitt St - CCTV 12                            15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer5}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Thomas St - CCTV 12                    15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer6}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1  `}</span>
                <span>{`       Thomas St - CCTV 12                    15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1QueenContainer1}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1        `}</span>
                <span>{`Queen St - CCTV 12                        15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
            <div className={styles.level1PittContainer3}>
              <p className={styles.level1ThomasStCct}>
                <span className={styles.level11}>{`Level 1 `}</span>
                <span>{`       Pitt St - CCTV 12                             15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level1ThomasStCct}
              >{`                     `}</p>
              <p className={styles.level1ThomasStCct}>&nbsp;</p>
            </div>
          </ol>
          <div className={styles.groupofyesnoWarningp3}>
            <div className={styles.yesParent}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesGroup}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.noParent}>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
            </div>
            <div className={styles.noGroup}>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
            </div>
            <div className={styles.yesContainer}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.groupDiv}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent1}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent2}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent3}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent4}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent5}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent6}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent7}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
            <div className={styles.yesParent8}>
              <button className={styles.yes}>
                <button className={styles.yesChild} />
                <div className={styles.y}>Y</div>
              </button>
              <button className={styles.no}>
                <button className={styles.yesChild} />
                <div className={styles.n}>N</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.allelementssidebarWarningp3}>
          <div className={styles.sidebarWarningp3} />
          <button className={styles.logoutWarningp3} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group@2x.png" />
            <div className={styles.logoutWarningp3Child} />
          </button>
          <button
            className={styles.statisticsWarningp3}
            onClick={onStatisticsWarningP3Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics}>Statistics</div>
            </button>
            <div className={styles.wrapperGroup}>
              <img className={styles.groupIcon1} alt="" src="/group@2x.png" />
            </div>
          </button>
          <div className={styles.allelementssidebarWarningp3Child} />
          <button
            className={styles.warningsWarningp31}
            onClick={onWarningsWarningP3Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
          </button>
          <button
            className={styles.mapsWarningp3}
            onClick={onMapsWarningP3Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
            <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
            <img className={styles.vectorIcon5} alt="" src="/vector@2x.png" />
          </button>
          <button
            className={styles.homeWarningp3}
            onClick={onHomeWarningP3Click}
          >
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon6} alt="" src="/vector@2x.png" />
          </button>
        </div>
        <div className={styles.level1MonthlyWarningp4}>
          <div className={styles.level1MonthlyWarningp4Child} />
          <div className={styles.level1MonthlyWarningp4Item} />
          <div className={styles.level1MonthlyWarningp4Inner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.level1MonthlyWarningp4Child1} />
          <div className={styles.level1MonthlyWarningp4Child2} />
          <div className={styles.level1MonthlyWarningp4Child3} />
          <div className={styles.level1MonthlyWarningp4Child4} />
          <div className={styles.level1MonthlyWarningp4Child5} />
          <div className={styles.level1MonthlyWarningp4Child6} />
          <div className={styles.level1MonthlyWarningp4Child7} />
          <div className={styles.level1MonthlyWarningp4Child8} />
          <div className={styles.level1MonthlyWarningp4Child9} />
          <div className={styles.level1MonthlyWarningp4Child10} />
          <div className={styles.level1MonthlyWarningp4Child11} />
          <div className={styles.level1MonthlyWarningp4Child12} />
          <div className={styles.level1MonthlyWarningp4Child13} />
          <div className={styles.level1MonthlyWarningp4Child14} />
          <div className={styles.level1MonthlyWarningp4Child15} />
          <div className={styles.level1MonthlyWarningp4Child16} />
          <div className={styles.level1MonthlyWarningp4Child17} />
          <div className={styles.level1MonthlyWarningp4Child18} />
          <div className={styles.level1MonthlyWarningp4Child19} />
          <div className={styles.level1MonthlyWarningp4Child20} />
          <div className={styles.am}>0-2 am</div>
          <div className={styles.div}>2</div>
          <div className={styles.div1}>1</div>
          <div className={styles.div2}>4</div>
          <div className={styles.div3}>6</div>
          <div className={styles.div4}>5</div>
          <div className={styles.div5}>9</div>
          <div className={styles.div6}>7</div>
          <div className={styles.div7}>4</div>
          <div className={styles.div8}>2</div>
          <div className={styles.div9}>7</div>
          <div className={styles.div10}>0</div>
          <div className={styles.div11}>12</div>
          <b className={styles.hourBreakdown}>15/11/2023 24 Hour Breakdown:</b>
          <div className={styles.am1}>2-4 am</div>
          <div className={styles.am2}>4-6 am</div>
          <div className={styles.am3}>10-12 am</div>
          <div className={styles.pm}>8-10 pm</div>
          <div className={styles.pm1}>6-8 pm</div>
          <div className={styles.pm2}>4-6 pm</div>
          <div className={styles.pm3}>2-4 pm</div>
          <div className={styles.pm4}>12-2 pm</div>
          <div className={styles.pm5}>10-12 pm</div>
          <div className={styles.am4}>8-10 am</div>
          <div className={styles.am5}>6-8 am</div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <div className={styles.search}>Search.....</div>
        </div>
        <img className={styles.groupIcon2} alt="" src="/group@2x.png" />
      </div>
      {isNotificationPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <NotificationPopUp onClose={closeNotificationPopUp} />
        </PortalPopup>
      )}
      {isProfilePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeProfilePopUp}
        >
          <ProfilePopUp onClose={closeProfilePopUp} />
        </PortalPopup>
      )}
      {isInfoPagePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInfoPagePopup}
        >
          <InfoPage onClose={closeInfoPagePopup} />
        </PortalPopup>
      )}
      {isLevelsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLevelsPopup}
        >
          <Levels onClose={closeLevelsPopup} />
        </PortalPopup>
      )}
      {isLevelsPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLevelsPopup1}
        >
          <Levels onClose={closeLevelsPopup1} />
        </PortalPopup>
      )}
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <Logout onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default WarningsPage3;
