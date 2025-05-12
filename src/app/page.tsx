import { TimeAccordion } from "@/components/TimeAccordion";

export default function AppPage() {
  const timeTable = {
    "14時": [
      { time: "14:00", to: "西神中央" },
      { time: "14:05", to: "西神中央", isFirst: true },
      { time: "14:07", to: "西神中央", isFirst: true },
    ],
    "15時": [
      { time: "15:00", to: "西神中央" },
      { time: "15:05", to: "西神中央" },
      { time: "15:07", to: "西神中央" },
    ],
  };

  return (
    <div className="flex h-full w-[600px] p-[16px]">
      <TimeAccordion timeTable={timeTable} />
    </div>
  );
}
