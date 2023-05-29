import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./StationButton.module.css";

type Props = {
  station: string;
  isSelected: boolean;
  setSelectedStation: Dispatch<SetStateAction<string>>;
};

export const StationButton: React.FC<Props> = ({
  station,
  isSelected,
  setSelectedStation,
}) => {
  return (
    <div className={styles.stationButton}>
      <CustomRadioButton
        station={station}
        isSelected={isSelected}
        setSelectedStation={setSelectedStation}
      />
      <span />
      <p>{station}</p>
    </div>
  );
};

const CustomRadioButton: React.FC<Props> = ({
  station,
  isSelected,
  setSelectedStation,
}) => {
  return (
    <div className={styles.radio} onClick={() => setSelectedStation(station)}>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            className={styles.selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
