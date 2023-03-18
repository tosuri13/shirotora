import styles from "../styles/Footer.module.css";

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <p>@2023 UniUrchin</p>
      <div className={styles.links}>
        <div className={styles.link}>
          <img src="/icons/github.svg" />
          <a href="https://github.com/UniUrchin/shirotora">Github</a>
        </div>
        <div className={styles.link}>
          <img src="/icons/twitter.svg" />
          <a href="https://twitter.com/?lang=ja">Twitter</a>
        </div>
      </div>
    </div>
  );
}
