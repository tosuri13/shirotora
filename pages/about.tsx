import { NextPage } from "next";
import styles from "styles/About.module.css";
import Header from "components/Header";
import Footer from "components/Footer";

const AboutPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.description}>
        <h1>What is SHIROTORA?</h1>
        <p>
          SHIROTORAは、神戸市営地下鉄の西神・山手線の時刻表を見やすく表示してくれるWebアプリケーションです。
        </p>
        <p>
          時刻表のデータはNAVITIMEの公式Webサイトから直接スクレイピングして取得しています。
        </p>
        <p>
          個人用にNext.js + React +
          TypeScriptで頑張って作りました。すごいでしょえっへん。
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
