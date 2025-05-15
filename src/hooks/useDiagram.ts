"use client";

import type { Record } from "@/types/Diagram";
import useSWR from "swr";

export type UseDiagramProps = {
  nodeId: string;
  direction: string;
};

export const useDiagram = ({ nodeId, direction }: UseDiagramProps) => {
  const query = new URLSearchParams({ direction });

  const key = `/api/diagram/${nodeId}?${query}`;
  const fetcher = async () => {
    const response = await fetch(key);
    const diagram = (await response.json()) as { timeTable: Record[] };

    return diagram;
  };

  return useSWR(key, fetcher);
};
