import { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "styles/Index.module.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { StationButton } from "components/StationButton";

type Props = {
  selectedStation: string;
  setSelectedStation?: Dispatch<SetStateAction<string>>;
};

const stations: string[] = [
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

const initialStation: string = stations[0];

const IndexPage: NextPage = () => {
  const [selectedStation, setSelectedStation] =
    useState<string>(initialStation);

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <TimeTable selectedStation={selectedStation} />
        <Sidebar
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
        />
      </div>
      <Footer />
    </div>
  );
};

const TimeTable: React.FC<Props> = ({ selectedStation }) => {
  return (
    <div className={styles.timetable}>
      <p>タイムテーブル建設予定地</p>
      <h2>{selectedStation}の情報を表示してるつもり...</h2>
    </div>
  );
};

const Sidebar: React.FC<Props> = ({ selectedStation, setSelectedStation }) => {
  const stationButtons = stations.map((station, index) => {
    return (
      <>
        <StationButton
          key={station}
          station={station}
          isSelected={station === selectedStation ? true : false}
          setSelectedStation={setSelectedStation}
        />
        {index !== stations.length - 1 && <span />}
      </>
    );
  });

  return <div className={styles.sidebar}>{stationButtons}</div>;
};

export default IndexPage;
