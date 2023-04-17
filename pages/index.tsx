import { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState, Fragment } from "react";
import styles from "styles/Index.module.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { StationButton } from "components/StationButton";
import { getIsHoliday } from "service/getIsHoliday";
import { getTimetable } from "service/getTimetable";

type StationProps = {
  selectedStation: string;
  setSelectedStation?: Dispatch<SetStateAction<string>>;
};

type DirectionProps = {
  isForSeishin: boolean;
  setIsForSeishin?: Dispatch<SetStateAction<boolean>>;
};

const stations: string[] = [
  "新神戸",
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

const TimeTable: React.FC<StationProps> = ({ selectedStation }) => {
  const [isHoliday, setIsHoliday] = useState<boolean | undefined>(undefined);
  const [isForSeishin, setIsForSeishin] = useState<boolean>(true);
  const [timetable, setTimetable] = useState<object>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const isHoliday = await getIsHoliday();
      const timetable = await getTimetable(
        stations.indexOf(selectedStation),
        isForSeishin
      );

      setIsHoliday(isHoliday);
      setTimetable(timetable);
      setIsLoading(false);
    })();
  }, [selectedStation, isForSeishin]);

  const StationSign: React.FC<StationProps> = ({ selectedStation }) => {
    return (
      <div className={styles.stationSign}>
        <div className={styles.signBorder} />
        <h2>{selectedStation}</h2>
        <div className={styles.signBorder} />
      </div>
    );
  };

  const DiaSign: React.FC<{ isHoliday: boolean }> = ({ isHoliday }) => {
    return (
      <div className={styles.diasign}>
        {isHoliday ? (
          <img src="/icons/holiday_subway.svg" />
        ) : (
          <img src="/icons/normal_subway.svg" />
        )}
        <p>{isHoliday ? "休日ダイヤ" : "平日ダイヤ"}</p>
      </div>
    );
  };

  const DirectionButton: React.FC<DirectionProps> = ({
    isForSeishin,
    setIsForSeishin,
  }) => {
    return (
      <div className={styles.directionButtons}>
        <div
          className={
            !isForSeishin
              ? styles.selectedDirectionButton
              : styles.unselectedDirectionButton
          }
          onClick={() => setIsForSeishin(!isForSeishin)}
        >
          <p>新神戸方面</p>
        </div>
        <div
          className={
            isForSeishin
              ? styles.selectedDirectionButton
              : styles.unselectedDirectionButton
          }
          onClick={() => setIsForSeishin(!isForSeishin)}
        >
          <p>西神方面</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.timetable}>
      <StationSign selectedStation={selectedStation} />
      <div className={styles.timetableInfo}>
        <DiaSign isHoliday={isHoliday} />
        <DirectionButton
          isForSeishin={isForSeishin}
          setIsForSeishin={setIsForSeishin}
        />
      </div>
      <p>{isLoading ? "Now Loading..." : "Loading Complete!!"}</p>
    </div>
  );
};

const Sidebar: React.FC<StationProps> = ({
  selectedStation,
  setSelectedStation,
}) => {
  const stationButtons = stations.map((station, index) => {
    return (
      <Fragment key={index}>
        <StationButton
          station={station}
          isSelected={station === selectedStation ? true : false}
          setSelectedStation={setSelectedStation}
        />
        {index !== stations.length - 1 && <span />}
      </Fragment>
    );
  });

  return <div className={styles.sidebar}>{stationButtons}</div>;
};

export default IndexPage;
