"use client";

import { stations } from "@/configs/station";
import { useCallback, useState } from "react";

export const useStationBoard = () => {
  const [nodeId, setNodeId] = useState<string>(stations[0].nodeId);
  const [direction, setDirection] = useState<string>("up");

  const onSelectStation = useCallback((nodeId: string) => {
    setNodeId(nodeId);
  }, []);

  const onSelectDirection = useCallback((direction: string) => {
    setDirection(direction);
  }, []);

  return { nodeId, direction, onSelectStation, onSelectDirection };
};
