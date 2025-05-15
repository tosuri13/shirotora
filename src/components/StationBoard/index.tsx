"use client";

import { stations } from "@/configs/station";
import { DiaIndicator } from "../DiaIndicator";
import { DirectionTab } from "../DirectionTab";
import { StationSelector } from "../StationSelector";
import { TimeTable } from "../TimeTable";
import { useStationBoard } from "./hooks";

export const StationBoard = () => {
  const { nodeId, direction, onSelectStation, onSelectDirection } =
    useStationBoard();

  return (
    <div className="grid grid-cols-4 gap-[40px]">
      <div className="col-span-3 flex flex-col gap-[24px] px-[80px]">
        <div className="flex justify-center gap-[8px]">
          <p className="border-theme-primary border-b-[4px] font-bold text-[36px]">
            {stations.filter((s) => s.nodeId === nodeId)[0].name}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <DiaIndicator />
          <DirectionTab
            defaultValue={direction}
            onValueChange={onSelectDirection}
          />
        </div>
        <TimeTable nodeId={nodeId} direction={direction} />
      </div>
      <StationSelector defaultValue={nodeId} onValueChange={onSelectStation} />
    </div>
  );
};
