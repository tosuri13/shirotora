import useSWR from "swr";

export type UseDiagramProps = {
  nodeId: string;
  direction: "up" | "down";
};

export const useDiagram = ({ nodeId, direction }: UseDiagramProps) => {
  return useSWR("");
};
