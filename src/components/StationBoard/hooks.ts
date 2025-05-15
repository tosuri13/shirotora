"use client";

import { useCallback, useState } from "react";
import { stations } from "../configs/station";

export const useStationBoard = () => {
  const [nodeId, setNodeId] = useState<string>(stations[0].nodeId);

  const onSelectStation = useCallback((nodeId: string) => {
    setNodeId(nodeId);
  }, []);

  return { nodeId, onSelectStation };
};
