import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Roads from "../components/Roads";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./Statistics.module.css";

type StatisticsType = {
  onClose?: () => void;
};

const Statistics: FunctionComponent<StatisticsType> = ({ onClose }) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isRoadsPopupOpen, setRoadsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState<
    string | null
  >(null);
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

  const openRoadsPopup = useCallback(() => {
    setRoadsPopupOpen(true);
  }, []);

  const closeRoadsPopup = useCallback(() => {
    setRoadsPopupOpen(false);
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

  const onStatisticsReportIncidentsClick = useCallback(() => {
    navigate("/report-incidents");
  }, [navigate]);

  const onWarningsStatisticsClick = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsStatisticsClick = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeReportIncidentsClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.statistics}>
          <div className={styles.topBarReportincidents}>
            <div className={styles.hearder} />
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <img
              className={styles.notificationpopupReportincideIcon}
              alt=""
              src="/vector.svg"
              onClick={openNotificationPopUp}
            />
            <div className={styles.profilepopReportincidents}>
              <button className={styles.group} onClick={openProfilePopUp}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector@2x.png"
                />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector@2x.png"
                />
              </button>
            </div>
            <img
              className={styles.vectorIcon2}
              alt=""
              src="/vector@2x.png"
              onClick={openInfoPagePopup}
            />
          </div>
          <div className={styles.headerReportincidents}>
            <div className={styles.headerReportincidentsChild} />
            <b className={styles.thomasSt}>Thomas St</b>
            <img
              className={styles.vectorIcon3}
              alt=""
              src="/vector10.svg"
              onClick={openRoadsPopup}
            />
          </div>
          <div className={styles.reportBoxReportincidence} />
          <div className={styles.staristicsreportReportinciden}>
            <div className={styles.staristicsreportReportincidenChild} />
            <b className={styles.statisticsReport}>Statistics Report:</b>
          </div>
          <div className={styles.ratingsReportincidents}>
            <div className={styles.ratingsReportincidentsChild} />
            <div
              className={styles.noPedestriansDay7}
            >{`No. pedestrians/ day(7):  `}</div>
            <div className={styles.lightings7}>Lightings(7):</div>
            <div className={styles.weapons10}>Weapons(10):</div>
            <div className={styles.substance5}>Substance(5):</div>
            <div className={styles.violence2}>Violence(2):</div>
            <div className={styles.maintenance7}>Maintenance(7):</div>
            <b className={styles.ratings}>Ratings:</b>
            <img
              className={styles.groupofstarsIcon}
              alt=""
              src="/groupofstars@2x.png"
            />
          </div>
          <div className={styles.scrollReportincidents} data-animate-on-scroll>
            <ol className={styles.warningsReportincidents}>
              <div className={styles.level3ThomasContainer}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level3}>Level 3</span>
                  <span className={styles.span}>{` `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am    weapons                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level3ThomasContainer1}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level3}>Level 3</span>
                  <span className={styles.span}>{`  `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level1ThomasContainer}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.span}>{`Level 1       `}</span>
                  <span>{` Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level2ThomasContainer}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level2}>Level 2</span>
                  <span className={styles.span}>{`  `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level1ThomasContainer1}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.span}>{`Level 1  `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level3ThomasContainer2}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level3}>{`Level 3 `}</span>
                  <span className={styles.span}>{` `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level1ThomasContainer2}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.span}>{`Level 1  `}</span>
                  <span>
                    {" "}
                    Thomas St - CCTV 12 15/11/2023 Sat 9:30am weapons
                  </span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level2ThomasContainer1}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level2}>Level 2</span>
                  <span className={styles.span}>{`  `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level1ThomasContainer3}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.span}>{`Level 1  `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level1ThomasContainer4}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.span}>{`Level 1  `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level2ThomasContainer2}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level2}>Level 2</span>
                  <span className={styles.span}>{`  `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am    violence `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level1ThomasContainer5}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.span}>{`Level 1  `}</span>
                  <span>
                    {" "}
                    Thomas St - CCTV 12 15/11/2023 Sat 9:30am violence
                  </span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level3ThomasContainer3}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level3}>Level 3</span>
                  <span className={styles.span}>{`        `}</span>
                  <span>{`Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
              <div className={styles.level2ThomasContainer3}>
                <p className={styles.level3ThomasStCctv}>
                  <span className={styles.level2}>Level 2</span>
                  <span className={styles.span}>{` `}</span>
                  <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
                </p>
                <p
                  className={styles.level3ThomasStCctv}
                >{`                     `}</p>
                <p className={styles.level3ThomasStCctv}>&nbsp;</p>
              </div>
            </ol>
          </div>
          <div className={styles.allelementssidebarReportInci}>
            <div className={styles.sidebarReportIncidents} />
            <button
              className={styles.logoutReportIncidents}
              onClick={openLogoutPopup}
            >
              <div className={styles.logOut}>Log Out</div>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
              <div className={styles.logoutReportIncidentsChild} />
            </button>
            <div className={styles.allelementssidebarReportInciChild} />
            <button
              className={styles.statisticsReportIncidents}
              onClick={onStatisticsReportIncidentsClick}
            >
              <button className={styles.statisticsWrapper}>
                <div className={styles.statistics1}>Statistics</div>
              </button>
              <div className={styles.wrapperImageStatistics}>
                <img
                  className={styles.imageStatisticsIcon}
                  alt=""
                  src="/image-statistics@2x.png"
                />
              </div>
            </button>
            <button
              className={styles.warningsStatistics}
              onClick={onWarningsStatisticsClick}
            >
              <button className={styles.warningsWrapper}>
                <div className={styles.warnings}>Warnings</div>
              </button>
              <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
            </button>
            <button
              className={styles.mapsStatistics}
              onClick={onMapsStatisticsClick}
            >
              <button className={styles.mapsWrapper}>
                <div className={styles.maps}>Maps</div>
              </button>
              <img className={styles.vectorIcon5} alt="" src="/vector@2x.png" />
              <img className={styles.vectorIcon6} alt="" src="/vector@2x.png" />
              <img className={styles.vectorIcon7} alt="" src="/vector@2x.png" />
            </button>
            <button
              className={styles.homeReportIncidents}
              onClick={onHomeReportIncidentsClick}
            >
              <div className={styles.home}>Home</div>
              <img
                className={styles.homeImageStatisticsIcon}
                alt=""
                src="/vector@2x.png"
              />
            </button>
          </div>
          <div className={styles.bargraph}>
            <b className={styles.b}>5</b>
            <b className={styles.b1}>10</b>
            <b className={styles.b2}>15</b>
            <b className={styles.b3}>20</b>
            <b className={styles.b4}>25</b>
            <b className={styles.topLevel3Warning}>
              Top level-3 warning places:
            </b>
            <b className={styles.fromNov2023}>
              From Nov 2023 (updates each month)
            </b>
            <div className={styles.bargraphChild} />
            <div className={styles.bargraphItem} />
            <div className={styles.bargraphInner} />
            <div className={styles.lineDiv} />
            <div className={styles.bargraphChild1} />
            <div className={styles.bargraphChild2} />
            <div className={styles.rectangleDiv} />
            <div className={styles.bargraphChild3} />
            <div className={styles.bargraphChild4} />
            <div className={styles.queenStreet}>Queen Street</div>
            <div className={styles.quayStreet}>Quay Street</div>
            <div className={styles.thomasStreet}>Thomas Street</div>
            <img className={styles.vectorIcon8} alt="" src="/vector@2x.png" />
            <div className={styles.bargraphChild5} />
            <div className={styles.div}>24</div>
          </div>
          <div className={styles.calendarStatistics}>
            <div className={styles.wrapper}>
              <DatePicker
                value={frameDateTimePickerValue}
                onChange={(newValue: any) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    size: "medium",
                    color: "primary",
                  },
                }}
              />
            </div>
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
        {isRoadsPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeRoadsPopup}
          >
            <Roads onClose={closeRoadsPopup} />
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
    </LocalizationProvider>
  );
};

export default Statistics;
