import { NextPage } from "next";
import styles from "styles/Index.module.css";
import Header from "components/Header";
import Footer from "components/Footer";
import StationButton from "components/StationButton";

const TimeTable = () => {
  return (
    <div className={styles.timetable}>
      <p>タイムテーブル建設予定地</p>
      <p>そのうちできるはずなので、乞うご期待!!</p>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <StationButton name="名谷" />
      <StationButton name="総合運動公園" />
      <StationButton name="学園都市" />
      <StationButton name="伊川谷" />
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <TimeTable />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
