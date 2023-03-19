import { NextPage } from "next";
import styles from "styles/Index.module.css";
import Header from "components/Header";
import Footer from "components/Footer";
import StationButton from "components/StationButton";

const stations = [
  "谷上",
  "三宮",
  "県庁前",
  "大倉山",
  "湊川公園",
  "上沢",
  "長田",
  "新長田",
  "板宿",
  "妙法寺",
  "名谷",
  "総合運動公園",
  "学園都市",
  "伊川谷",
  "西神南",
  "西神中央",
];

const TimeTable = () => {
  return (
    <div className={styles.timetable}>
      <p>タイムテーブル建設予定地</p>
      <p>そのうちできるはずなので、乞うご期待!!</p>
    </div>
  );
};

const SideBar = () => {
  const stationButtons = stations.map((station) => {
    return <StationButton name={station} />;
  });

  return <div className={styles.Sidebar}>{stationButtons}</div>;
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
