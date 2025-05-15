"use client";

import { TimeCard } from "@/components/TimeCard";
import {
  AccordionContent,
  Item as AccordionItem,
  Root as AccordionRoot,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { format } from "date-fns";
import { Annoyed, CircleChevronRight } from "lucide-react";
import { useTimeTable } from "./hooks";

export type TimeAccordionProps = {
  nodeId: string;
  direction: string;
};

export const TimeTable = ({ nodeId, direction }: TimeAccordionProps) => {
  const { timeTable } = useTimeTable({ nodeId, direction });

  if (timeTable === undefined) {
    return (
      <div className="flex w-full flex-col gap-[8px]">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={String(index)}
            className="h-[36px] w-full animate-pulse rounded-[8px] bg-gray-300"
          />
        ))}
      </div>
    );
  }

  if ([...timeTable.entries()].length === 0) {
    return (
      <div className="mt-[96px] flex w-full flex-col items-center justify-center gap-[16px]">
        <Annoyed className="size-[120px] stroke-theme-primary/50" />
        <p className="text-[24px] text-theme-primary/50">
          終点なので時刻表なし
        </p>
      </div>
    );
  }

  return (
    <AccordionRoot
      defaultValue={[format(new Date(), "HH")]}
      className="flex w-full flex-col gap-[8px]"
      type="multiple"
    >
      {[...timeTable.entries()].map(([baseTime, records]) => (
        <AccordionItem key={baseTime} value={baseTime}>
          <AccordionTrigger className="flex h-[36px] w-full items-center gap-[8px] rounded-[8px] bg-theme-primary px-[12px]">
            <CircleChevronRight className="size-[20px] stroke-white" />
            <p className="font-semibold text-[16px] text-white">{baseTime}時</p>
          </AccordionTrigger>
          <AccordionContent className="flex w-full flex-col gap-[8px] data-[state=open]:mt-[8px]">
            {records.map((record) => (
              <TimeCard key={record.time} record={record} />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};
