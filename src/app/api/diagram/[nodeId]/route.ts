import { stations } from "@/configs/station";
import type { Record } from "@/types/Diagram";
import * as cheerio from "cheerio";
import type { NextRequest } from "next/server";

const SEISIN_LINE_ID = "00000703";
const HOKUSIN_LINE_ID = "00000851";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ nodeId: string }> },
) {
  const queryParams = request.nextUrl.searchParams;

  const { nodeId } = await params;
  const direction = queryParams.get("direction") as string;

  const targetUrl = buildUrl(nodeId, direction);
  const records = await getTimetable(targetUrl);

  return Response.json({
    timeTable: records,
  });
}

const buildUrl = (nodeId: string, direction: string): string => {
  const baseUrl = "https://www.navitime.co.jp/diagram/timetable";

  const isHokusinLine =
    nodeId === stations[0].nodeId ||
    (nodeId === stations[1].nodeId && direction === "up");

  const lineId = isHokusinLine ? HOKUSIN_LINE_ID : SEISIN_LINE_ID;
  const updown = direction === "down" ? "1" : "0";

  return `${baseUrl}?node=${nodeId}&lineId=${lineId}&updown=${updown}`;
};

const getTimetable = async (url: string): Promise<Record[]> => {
  const response = await fetch(url);
  const $ = cheerio.load(await response.text());

  const records: Record[] = [];
  const frames = $(".time-table-frame").not(".none").first().find("li");

  frames.each((_, li) => {
    const time = `${$(li).attr("data-hour")}:${$(li).attr("data-min")}`;
    const to = $(li).attr("data-dest") as string;

    records.push({ time, to });
  });

  if (records.length) {
    records[0] = { ...records[0], isFirst: true };
    records[records.length - 1] = {
      ...records[records.length - 1],
      isLast: true,
    };
  }

  return records;
};
