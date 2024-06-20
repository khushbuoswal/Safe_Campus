import { FunctionComponent, useEffect } from "react";
import styles from "./InfoPage.module.css";

type InfoPageType = {
  onClose?: () => void;
};

const InfoPage: FunctionComponent<InfoPageType> = ({ onClose }) => {
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
  return (
    <div className={styles.infoPage}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <b className={styles.level3HighContainer}>
          <p className={styles.blankLine}>Level 3: High Risk</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </b>
      </div>
      <b className={styles.levels}>Levels:</b>
      <b className={styles.factors}>Factors:</b>
      <div className={styles.mapIcosDescription} data-animate-on-scroll>
        <div className={styles.noOfPedestriansContainer}>
          <p className={styles.blankLine}>
            <b
              className={styles.noOfPedestrians}
            >{`No. of pedestrians /day: `}</b>
            <span>
              Number of pedestrians that passes through this street per day
            </span>
          </p>
          <p className={styles.blankLine}>
            <b className={styles.noOfPedestrians}>{`Lightings: `}</b>
            <span>Brightness of this street at night under the light</span>
          </p>
          <p className={styles.blankLine}>
            <b className={styles.noOfPedestrians}>{`Violence: `}</b>
            <span>Threatening behaviours such as fights</span>
          </p>
          <p className={styles.blankLine}>
            <b className={styles.noOfPedestrians}>{`Weapons: `}</b>
            <span>Presence of dangerous objects such as knives and guns</span>
          </p>
          <p className={styles.blankLine}>
            <b className={styles.noOfPedestrians}>{`Substances: `}</b>
            <span>
              Presence of abusive substances such as alcohol, cigarettes and
              drugs
            </span>
          </p>
          <p className={styles.blankLine}>
            <b className={styles.noOfPedestrians}>{`Maintenance: `}</b>
            <span>{`Cleanliness of this street based on rubbish `}</span>
          </p>
        </div>
      </div>
      <b className={styles.level2Medium}>Level 2: Medium Risk</b>
      <b className={styles.level1Low}>Level 1: Low Risk</b>
      <img
        className={styles.closebuttonLevelsIcon}
        alt=""
        src="/vector3.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default InfoPage;
