import { useState } from "react";
import styles from "./StationButton.module.css";

function CustomRadio() {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    isSelected ? setSelected(false) : setSelected(true);
  };

  return isSelected ? (
    <div className={styles.selected} onClick={handleClick}>
      <div className={styles.selectedInlineCircle} />
    </div>
  ) : (
    <div className={styles.unselected} onClick={handleClick} />
  );
}

export default function StationButton(props): JSX.Element {
  return (
    <div className={styles.stationButton}>
      <CustomRadio />
      <p>{props.name}</p>
    </div>
  );
}
