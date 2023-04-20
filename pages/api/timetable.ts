import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

const baseURL = "https://www.navitime.co.jp/diagram/timetable";
const stationNodeIds = [
  "00005867",
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
const seishinLineId = "00000703";
const hokushinLineId = "00000851";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { stationIndex, isForSeishin } = req.body;
  const nodeId = stationNodeIds[stationIndex];
  const updown = isForSeishin ? "&updown=1" : "&updown=0";
  const isHokushin = stationIndex === 0 || (stationIndex == 1 && !isForSeishin);
  const requestURL = isHokushin
    ? baseURL + "?node=" + nodeId + "&lineId=" + hokushinLineId + updown
    : baseURL + "?node=" + nodeId + "&lineId=" + seishinLineId + updown;

  const response = await getTimeLine(requestURL);
  return res.status(200).json(response);
}

const getTimeLine = async (requestURL: string): Promise<object> => {
  const response: JSDOM = await JSDOM.fromURL(requestURL);
  const document: Document = response.window.document;

  const timeTableFrame: Element = Array.from(
    document.querySelectorAll(".time-table-frame")
  ).filter((node) => node.className !== "time-table-frame none")[0];

  const timeLineList = Array.from(timeTableFrame.querySelectorAll("dl"));
  const timeline = timeLineList.reduce((object, node, index1) => {
    const hour = node
      .getElementsByClassName("diagram-frame__hour")
      .item(0)?.textContent;
    const timeFrameList = Array.from(node.querySelectorAll(".time-frame"));
    const timeFrame = timeFrameList.map((node, index2) => {
      const minute = node.getElementsByClassName("time").item(0)?.textContent;
      const isFirst = index1 === 0 && index2 === 0;
      const isLast =
        index1 === timeLineList.length - 1 &&
        index2 === timeFrameList.length - 1;
      const type = isFirst ? "first" : isLast ? "last" : "normal";
      const dest = node
        .getElementsByClassName("ruby-dest")
        .item(0)?.textContent;
      return { minute, type, dest };
    });
    return { ...object, [hour]: timeFrame };
  }, {});

  return timeline;
};
