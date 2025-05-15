"use client";

import { TimeCard } from "@/components/TimeCard";
import {
  AccordionContent,
  Item as AccordionItem,
  Root as AccordionRoot,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { CircleChevronDown, LoaderCircle } from "lucide-react";
import { useTimeTable } from "./hooks";

export type TimeAccordionProps = {
  nodeId: string;
  direction: string;
};

export const TimeTable = ({ nodeId, direction }: TimeAccordionProps) => {
  const { timeTable } = useTimeTable({ nodeId, direction });

  if (!timeTable) {
    return (
      <div className="flex w-full flex-col gap-[8px]">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={String(index)}
            className="h-[32px] w-full animate-pulse rounded-[8px] bg-theme-primary/20"
          />
        ))}
      </div>
    );
  }

  return (
    <AccordionRoot className="flex w-full flex-col gap-[8px]" type="multiple">
      {[...timeTable.entries()].map(([baseTime, records]) => (
        <AccordionItem key={baseTime} value={baseTime}>
          <AccordionTrigger className="flex h-[32px] w-full items-center gap-[4px] rounded-[8px] bg-theme-primary px-[12px]">
            <CircleChevronDown className="size-[16px] stroke-white" />
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
