import { TimeCard } from "@/components/TimeCard";

export default function AppPage() {
  return (
    <div className="flex h-full w-[600px] flex-col gap-[8px] p-[16px]">
      <TimeCard time="14:00" to="西神中央" />
      <TimeCard time="14:05" to="西神中央" isFirst />
      <TimeCard time="14:07" to="西神中央" isLast />
    </div>
  );
}
