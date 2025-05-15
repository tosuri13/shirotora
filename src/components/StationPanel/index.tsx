import { stations } from "@/configs/station";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export type StationPanelProps = {
  nodeId: string;
  onSelectStation: (value: string) => void;
};

export const StationPanel = ({
  nodeId,
  onSelectStation,
}: StationPanelProps) => {
  return (
    <div className="flex items-center justify-center gap-[16px]">
      <button
        className="h-[32px] w-[32px] rounded-[4px] bg-theme-primary hover:bg-theme-primary/80 disabled:cursor-not-allowed disabled:bg-gray-300 lg:hidden"
        type="button"
        onClick={() => onSelectStation(stations[0].nodeId)}
        disabled={nodeId === stations[0].nodeId}
      >
        <ChevronsLeft className="m-auto stroke-white" />
      </button>
      <button
        className="h-[32px] w-[32px] rounded-[4px] bg-theme-primary hover:bg-theme-primary/80 disabled:cursor-not-allowed disabled:bg-gray-300 lg:hidden"
        type="button"
        onClick={() => {
          const prevIndex = stations.findIndex((s) => s.nodeId === nodeId) - 1;
          onSelectStation(stations[prevIndex].nodeId);
        }}
        disabled={nodeId === stations[0].nodeId}
      >
        <ChevronLeft className="m-auto stroke-white" />
      </button>
      <p className="mx-[8px] border-theme-primary border-b-[4px] font-bold text-[24px] lg:mx-[24px] lg:text-[36px]">
        {stations.filter((s) => s.nodeId === nodeId)[0].name}
      </p>
      <button
        className="h-[32px] w-[32px] rounded-[4px] bg-theme-primary hover:bg-theme-primary/80 disabled:cursor-not-allowed disabled:bg-gray-300 lg:hidden"
        type="button"
        onClick={() => {
          const nextIndex = stations.findIndex((s) => s.nodeId === nodeId) + 1;
          onSelectStation(stations[nextIndex].nodeId);
        }}
        disabled={nodeId === stations[stations.length - 1].nodeId}
      >
        <ChevronRight className="m-auto stroke-white" />
      </button>
      <button
        className="h-[32px] w-[32px] rounded-[4px] bg-theme-primary hover:bg-theme-primary/80 disabled:cursor-not-allowed disabled:bg-gray-300 lg:hidden"
        type="button"
        onClick={() => onSelectStation(stations[stations.length - 1].nodeId)}
        disabled={nodeId === stations[stations.length - 1].nodeId}
      >
        <ChevronsRight className="m-auto stroke-white" />
      </button>
    </div>
  );
};
