import { DiaIndicator } from "@/components/DiaIndicator";
import { TimeTable } from "@/components/TimeTable";

export default function AppPage() {
  return (
    <div className="flex h-full w-[600px] flex-col gap-[16px] p-[16px]">
      <DiaIndicator />
      <TimeTable nodeId="00008584" direction="up" />
    </div>
  );
}
