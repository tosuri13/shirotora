import NextLink from "next/link";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h1>SHIROTORA</h1>
      <div className={styles.menu}>
        <NextLink href="/" legacyBehavior>
          <a>Home</a>
        </NextLink>
        <NextLink href="/about" legacyBehavior>
          <a>About</a>
        </NextLink>
      </div>
    </div>
  );
}
