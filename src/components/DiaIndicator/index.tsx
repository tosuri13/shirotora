"use client";

import { SubwayIcon } from "@/components/icons";
import { useDiaIndicator } from "./hooks";

export const DiaIndicator = () => {
  const { isHoliday } = useDiaIndicator();

  if (isHoliday === undefined) {
    return (
      <div className="h-[28px] w-[96px] animate-pulse rounded-[4px] bg-gray-300 lg:h-[32px] lg:w-[120px]" />
    );
  }

  return (
    <div className="flex w-fit items-center justify-between gap-[4px] border-theme-primary border-b p-[4px]">
      <SubwayIcon className="h-[22px] w-[22px] lg:h-[24px] lg:w-[24px]" />
      <p className="font-semibold text-[14px] text-black lg:text-[16px]">
        {`${isHoliday ? "休日" : "平日"}ダイヤ`}
      </p>
    </div>
  );
};
