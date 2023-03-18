import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h1>SHIROTORA</h1>
      <div className={styles.menu}>
        <a>Home</a>
        <a>About</a>
      </div>
    </div>
  );
}
