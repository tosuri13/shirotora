import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

const baseURL = "https://www.navitime.co.jp/diagram/timetable";
const stationNodeIds = [
  "00004269",
  "00009263",
  "00002101",
  "00005679",
  "00008553",
  "00004016",
  "00006249",
  "00004316",
  "00007603",
  "00008563",
  "00008584",
  "00005400",
  "00001215",
  "00000341",
  "00004819",
  "00004818",
];
const lineId = "00000703";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { stationIndex, isForSeishin } = req.body;
  const nodeId = stationNodeIds[stationIndex];
  const updown = isForSeishin ? "&updown=1" : "&updown=0";
  const requestURL = baseURL + "?node=" + nodeId + "&lineId=" + lineId + updown;

  const response = await getTimeLine(requestURL);
  return res.status(200).json(response);
}

const getTimeLine = async (requestURL: string): Promise<object> => {
  const response: JSDOM = await JSDOM.fromURL(requestURL);
  const document: Document = response.window.document;

  const timeTableFrame: Element = Array.from(
    document.querySelectorAll(".time-table-frame")
  ).filter((node) => node.className !== "time-table-frame none")[0];

  const timeline = Array.from(timeTableFrame.querySelectorAll("dl")).reduce(
    (object, node) => {
      const hour = Number(
        node.getElementsByClassName("diagram-frame__hour").item(0)?.textContent!
      );
      const timeFrame = Array.from(node.querySelectorAll(".time-frame")).map(
        (node) => {
          const minute = node
            .getElementsByClassName("time")
            .item(0)?.textContent;
          const dest = node
            .getElementsByClassName("ruby-dest")
            .item(0)
            ?.textContent.replace("谷上", "新神戸");
          return { minute, type: "normal", dest };
        }
      );
      return { ...object, [hour]: timeFrame };
    },
    {}
  );

  return timeline;
};
