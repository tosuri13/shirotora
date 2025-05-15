"use client";

import { DiaIndicator } from "../DiaIndicator";
import { StationSelector } from "../StationSelector";
import { useStationBoard } from "./hooks";

export const StationBoard = () => {
  const { nodeId, onSelectStation } = useStationBoard();

  return (
    <div className="flex h-full w-full justify-between">
      <DiaIndicator />
      <StationSelector defaultValue={nodeId} onValueChange={onSelectStation} />
    </div>
  );
};
