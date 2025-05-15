"use client";

import { stations } from "@/configs/station";
import { DiaIndicator } from "../DiaIndicator";
import { DirectionTab } from "../DirectionTab";
import { StationPanel } from "../StationPanel";
import { StationSelector } from "../StationSelector";
import { TimeTable } from "../TimeTable";
import { useStationBoard } from "./hooks";

export const StationBoard = () => {
  const { nodeId, direction, onSelectStation, onSelectDirection } =
    useStationBoard();

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-[40px]">
      <div className="flex flex-col gap-[16px] lg:col-span-3 lg:gap-[24px] lg:px-[80px]">
        <StationPanel nodeId={nodeId} onSelectStation={onSelectStation} />
        <div className="flex items-center justify-between">
          <DiaIndicator />
          <DirectionTab
            defaultValue={direction}
            onValueChange={onSelectDirection}
          />
        </div>
        <TimeTable nodeId={nodeId} direction={direction} />
      </div>
      <StationSelector
        className="hidden lg:flex"
        defaultValue={nodeId}
        onValueChange={onSelectStation}
      />
    </div>
  );
};
