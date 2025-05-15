"use client";

import { useDiagram } from "@/hooks/useDiagram";
import { useMemo } from "react";

export type UseTimeTableProps = {
  nodeId: string;
  direction: "up" | "down";
};

export const useTimeTable = ({ nodeId, direction }: UseTimeTableProps) => {
  const { data: diagram } = useDiagram({ nodeId, direction });

  const timeTable = useMemo(() => {
    if (!diagram?.timeTable) {
      return undefined;
    }
    return Map.groupBy(diagram.timeTable, ({ time }) => time.split(":")[0]);
  }, [diagram]);

  return { timeTable };
};
