import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Roads.module.css";

type RoadsType = {
  onClose?: () => void;
};

const Roads: FunctionComponent<RoadsType> = ({ onClose }) => {
  return (
    <div className={styles.roads}>
      <b className={styles.roads1}>Roads</b>
      <Button
        className={styles.level1Levels}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Queen St
      </Button>
      <Button
        className={styles.level1Levels1}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Broadway
      </Button>
      <Button
        className={styles.level1Levels2}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Mountain St
      </Button>
      <Button
        className={styles.level1Levels3}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Jones St
      </Button>
      <Button
        className={styles.level1Levels4}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Ultimo Rd
      </Button>
      <Button
        className={styles.level1Levels5}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Harris St
      </Button>
      <Button
        className={styles.level1Levels6}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        The Goods Ln
      </Button>
      <Button
        className={styles.level1Levels7}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Abercrombie St
      </Button>
      <Button
        className={styles.level2Levels}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Quay St
      </Button>
      <Button
        className={styles.level3Levels}
        sx={{ width: 208 }}
        color="success"
        variant="contained"
      >
        Thomas St
      </Button>
      <img
        className={styles.closebuttonLevelsIcon}
        alt=""
        src="/vector9.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default Roads;
