import { Dispatch, SetStateAction } from "react";
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
  return isSelected ? (
    <div
      className={styles.selected}
      onClick={() => setSelectedStation(station)}
    >
      <div className={styles.selectedInlineCircle} />
    </div>
  ) : (
    <div
      className={styles.unselected}
      onClick={() => setSelectedStation(station)}
    />
  );
};
