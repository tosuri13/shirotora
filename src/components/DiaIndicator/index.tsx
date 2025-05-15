"use client";

import { SubwayIcon } from "@/components/icons";
import { useDiaIndicator } from "./hooks";

export const DiaIndicator = () => {
  const { isHoliday } = useDiaIndicator();

  if (isHoliday === undefined) {
    return (
      <div className="h-[32px] w-[120px] animate-pulse rounded-[4px] bg-theme-primary/20" />
    );
  }

  return (
    <div className="flex w-fit items-center justify-between gap-[4px] border-theme-primary border-b p-[4px]">
      <SubwayIcon className="h-[24px] w-[24px]" />
      <p className="font-semibold text-[16px] text-black">
        {`${isHoliday ? "休日" : "平日"}ダイヤ`}
      </p>
    </div>
  );
};
