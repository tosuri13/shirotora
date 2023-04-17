import styles from "./TimeCard.module.css";

type Props = {
  hour: string;
  minute: string;
  type: string;
  dest: string;
};

export const TimeCard: React.FC<Props> = ({ hour, minute, type, dest }) => {
  const isFirst = type === "first" ? true : false;
  const isLast = type === "last" ? true : false;

  return (
    <div className={styles.timecard}>
      <div className={styles.timeinfo}>
        <div className={styles.border} />
        <p className={styles.time}>{hour + ":" + minute}</p>
      </div>
      {isFirst && <div className={styles.typeIcon}>始</div>}
      {isLast && <div className={styles.typeIcon}>終</div>}
      <p className={styles.dest}>{dest + "行き"}</p>
    </div>
  );
};
