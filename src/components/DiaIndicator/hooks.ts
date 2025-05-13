import { useGetHolidays } from "@/hooks/useGetHoliday";
import { isSaturday, isSunday } from "date-fns";

export const useDiaIndicator = () => {
  const { data: holidays } = useGetHolidays();

  const today = new Date();
  const unixTime = Math.floor(today.getTime() / 1000).toString();
  const isHoliday = holidays
    ? isSaturday(today) || isSunday(today) || unixTime in holidays
    : undefined;

  return { isHoliday };
};
