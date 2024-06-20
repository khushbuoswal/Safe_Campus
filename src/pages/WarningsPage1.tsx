import { FunctionComponent, useState, useCallback, useEffect } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage1.module.css";

type WarningsPage1Type = {
  onClose?: () => void;
};

const WarningsPage1: FunctionComponent<WarningsPage1Type> = ({ onClose }) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
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

  const onVectorIcon1Click = useCallback(() => {
    navigate("/warnings-page-2");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/warnings-page-3");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/warnings-page-4");
  }, [navigate]);

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

  const onStatisticsWarningP1Click = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsWarningP1Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP1Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <>
      <div className={styles.warningsPage1}>
        <div className={styles.topBarWarningp1}>
          <div className={styles.hearder} />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <img
            className={styles.notificationpopupWarningp1Icon}
            alt=""
            src="/vector.svg"
            onClick={openNotificationPopUp}
          />
          <div className={styles.profilepopWarningp1}>
            <button className={styles.group} onClick={openProfilePopUp}>
              <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
              <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
            </button>
          </div>
          <img
            className={styles.vectorIcon2}
            alt=""
            src="/vector@2x.png"
            onClick={openInfoPagePopup}
          />
        </div>
        <div className={styles.level3}>
          <div className={styles.level3Child} />
          <div className={styles.level3Item} />
          <img
            className={styles.vectorIcon3}
            alt=""
            src="/vector6.svg"
            onClick={onVectorIcon1Click}
          />
          <b className={styles.level31}>{`Level 3 `}</b>
          <div className={styles.totalOf2}>
            Total of 2 warnings in the past 24 hrs !!!
          </div>
        </div>
        <div className={styles.level1}>
          <div className={styles.level1Child} />
          <div className={styles.level1Item} />
          <img
            className={styles.vectorIcon4}
            alt=""
            src="/vector6.svg"
            onClick={onVectorIcon2Click}
          />
          <b className={styles.level11}>Level 1</b>
          <div className={styles.totalOf8}>
            Total of 8 warnings in the past 24 hrs !
          </div>
        </div>
        <div className={styles.level2}>
          <div className={styles.level2Child} />
          <div className={styles.level2Item} />
          <img
            className={styles.vectorIcon5}
            alt=""
            src="/vector7.svg"
            onClick={onVectorIcon3Click}
          />
          <b className={styles.level11}>Level 2</b>
          <div className={styles.totalOf4}>
            Total of 4 warnings in the past 24 hrs !!
          </div>
        </div>
        <div className={styles.latestwarningp1}>
          <div className={styles.latestwarningp1Child} />
          <b className={styles.latest}>Latest</b>
        </div>
        <div className={styles.scroll} data-animate-on-scroll>
          <ol className={styles.level3PittStCctv12151Parent}>
            <div className={styles.level3PittContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.level32}>Level 3</span>
                <span className={styles.span}>{` `}</span>
                <span>{`       Pitt St - CCTV 12                                15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level2PittContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.level22}>Level 2</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Pitt St - CCTV 12                                 15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.span}>{`Level 1       `}</span>
                <span>{` Thomas St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer1}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Thomas St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level3QueenContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.level32}>Level 3</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Queen St - CCTV 12                            15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer2}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Thomas St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level3ThomasContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.level32}>Level 3</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Thomas St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer3}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Thomas St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1PittContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Pitt St - CCTV 12                                 15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level2QuayContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.level22}>{`Level 2 `}</span>
                <span className={styles.span}>{` `}</span>
                <span>{`      Quay St - CCTV 12                              15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level2ThomasContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.level22}>Level 2</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Thomas St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1WattleContainer}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Wattle St - CCTV 12                           15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level3QueenContainer1}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.level32}>Level 3</span>
                <span className={styles.span}>{`        `}</span>
                <span>{`Queen St - CCTV 12                            15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer4}>
              <p className={styles.level3PittStCctv}>
                <span className={styles.span}>{`Level 1 `}</span>
                <span>{`       Thomas St - CCTV 12                         15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3PittStCctv}
              >{`                     `}</p>
              <p className={styles.level3PittStCctv}>&nbsp;</p>
            </div>
          </ol>
        </div>
        <div className={styles.allelementssidebarWarningp1}>
          <div className={styles.sidebarWarningp1} />
          <button className={styles.logoutWarningp1} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group@2x.png" />
            <div className={styles.logoutWarningp1Child} />
          </button>
          <button
            className={styles.statisticsWarningp1}
            onClick={onStatisticsWarningP1Click}
          >
            <button className={styles.statisticsWrapper}>
              <div className={styles.statistics}>Statistics</div>
            </button>
            <div className={styles.wrapperGroup}>
              <img className={styles.groupIcon1} alt="" src="/group@2x.png" />
            </div>
          </button>
          <div className={styles.allelementssidebarWarningp1Child} />
          <button
            className={styles.warningsWarningp1}
            onClick={onWarningsWarningP1Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img className={styles.vectorIcon6} alt="" src="/vector@2x.png" />
          </button>
          <button
            className={styles.mapsWarningp1}
            onClick={onMapsWarningP1Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon7} alt="" src="/vector@2x.png" />
            <img className={styles.vectorIcon8} alt="" src="/vector@2x.png" />
            <img className={styles.vectorIcon9} alt="" src="/vector@2x.png" />
          </button>
          <button
            className={styles.homeWarningp1}
            onClick={onHomeWarningP1Click}
          >
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon10} alt="" src="/vector@2x.png" />
          </button>
        </div>
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

export default WarningsPage1;
