import styles from "./Footer.module.css";

export default function Footer(_props) {
  return (
    <div className={styles.footer}>
      <p>@2023 UniUrchin</p>
      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://github.com/UniUrchin/shirotora"
        >
          <img src="/icons/github.svg" />
          <p>Github</p>
        </a>
        <a className={styles.link} href="https://twitter.com/?lang=ja">
          <img src="/icons/twitter.svg" />
          <p>Twitter</p>
        </a>
      </div>
    </div>
  );
}
