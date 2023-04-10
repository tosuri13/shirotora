import { NextPage } from "next";
import styles from "styles/About.module.css";
import Header from "components/Header";
import Footer from "components/Footer";

const AboutPage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>あばうと建設予定地</div>
      <Footer />
    </div>
  );
};

export default AboutPage;
