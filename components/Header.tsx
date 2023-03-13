import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h1>SHIROTORA(仮)</h1>
      <div className={styles.menu}>
        <p>Home</p>
        <p>About</p>
      </div>
    </div>
  );
}
