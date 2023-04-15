import { JSDOM } from "jsdom";

type TimeFrameInfo = {
  time: string;
  type: string;
  dest: string;
};

// const baseURL = "https://www.navitime.co.jp/diagram/timetable";
// const stationNodeIds: string[] = [
//   "00004269",
//   "00009263",
//   "00002101",
//   "00005679",
//   "00008553",
//   "00004106",
//   "00006249",
//   "00004316",
//   "00007603",
//   "00008563",
//   "00008584",
//   "00005400",
//   "00001215",
//   "00000341",
//   "00004819",
//   "00004818",
// ];
// const lineId = "00000703";

export const getTimeLine = async () => {
  const response = await JSDOM.fromURL(
    "https://www.navitime.co.jp/diagram/timetable?node=00007603&lineId=00000703&updown=1"
  )
    .then((response) => response.window.document)
    .then((document) => {
      const timeTableFrame = Array.from(
        document.querySelectorAll(".time-table-frame")
      ).filter((node) => node.className !== "time-table-frame none")[0];

      const timeTable = Array.from(
        timeTableFrame.querySelectorAll("dl")
      ).reduce((object, node) => {
        const hour = node
          .getElementsByClassName("diagram-frame__hour")
          .item(0)?.textContent;

        const timeFrame: TimeFrameInfo[] = Array.from(
          node.querySelectorAll(".time-frame")
        ).map((node) => {
          const time = node
            .getElementsByClassName(".time")
            .item(0)?.textContent;
          const dest = node
            .getElementsByClassName(".ruby-dest")
            .item(0)?.textContent;

          return { time, type: "normal", dest };
        });
        return { ...object, [hour]: timeFrame };
      }, {});

      return {
        test: [
          { hoge: "hoge", piyo: "piyo" },
          { hoge: "hoge", piyo: "piyo" },
        ],
      };
    })
    .catch((error) => {
      throw new Error("ERROR: " + error);
    });

  return response;
};
