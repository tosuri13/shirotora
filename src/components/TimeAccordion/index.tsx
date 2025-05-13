import { TimeCard } from "@/components/TimeCard";
import type { Record } from "@/types/Time";
import {
  AccordionContent,
  Item as AccordionItem,
  Root as AccordionRoot,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { CircleChevronDown } from "lucide-react";

export type TimeAccordionProps = {
  timeTable: { [key: string]: Record[] };
};

export const TimeAccordion = ({ timeTable }: TimeAccordionProps) => {
  return (
    <AccordionRoot className="flex w-full flex-col gap-[8px]" type="multiple">
      {Object.entries(timeTable).map(([baseTime, records]) => (
        <AccordionItem key={baseTime} value={baseTime}>
          <AccordionTrigger className="flex h-[32px] w-full items-center gap-[4px] rounded-[8px] bg-theme-primary px-[12px]">
            <CircleChevronDown className="size-[16px] stroke-white" />
            <p className="font-semibold text-[16px] text-white">{baseTime}</p>
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
