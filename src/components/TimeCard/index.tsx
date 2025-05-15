import type { Record } from "@/types/Diagram";

export type TimeCardProps = {
  record: Record;
};

export const TimeCard = ({ record }: TimeCardProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-[8px] border border-theme-primary bg-white px-[20px] py-[8px]">
      <div className="flex items-center gap-[12px]">
        <span className="h-[24px] w-[4px] bg-theme-primary" />
        <p className="w-[64px] font-semibold text-[24px] text-black">
          {record.time}
        </p>
        {record.isFirst && (
          <div className="flex size-[32px] items-center justify-center rounded-[8px] bg-rose-600">
            <p className="font-bold text-[20px] text-white">始</p>
          </div>
        )}
        {record.isLast && (
          <div className="flex size-[32px] items-center justify-center rounded-[8px] bg-rose-600">
            <p className="font-bold text-[20px] text-white">終</p>
          </div>
        )}
      </div>
      <p className="font-semibold text-[16px] text-theme-primary">{`${record.to}行き`}</p>
    </div>
  );
};
