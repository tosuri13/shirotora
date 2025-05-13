"use client";

import { SubwayIcon } from "@/components/icons";
import { LoaderCircle } from "lucide-react";
import { useDiaIndicator } from "./hooks";

export const DiaIndicator = () => {
  const { isHoliday } = useDiaIndicator();

  const Indicator = () => {
    if (isHoliday === undefined) {
      return (
        <LoaderCircle className="size-[20px] animate-spin stroke-theme-primary" />
      );
    }

    return (
      <>
        <SubwayIcon className="h-[24px] w-[24px]" />
        <p className="font-semibold text-[16px] text-black">
          {`${isHoliday ? "休日" : "平日"}ダイヤ`}
        </p>
      </>
    );
  };

  return (
    <div className="flex w-fit items-center justify-between gap-[4px] border-theme-primary border-b p-[4px]">
      <Indicator />
    </div>
  );
};
