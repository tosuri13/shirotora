import { TimeCard } from "@/components/TimeCard";
import type { Record } from "@/types/Time";
import {
  AccordionContent,
  Item as AccordionItem,
  Root as AccordionRoot,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export type TimeAccordionProps = {
  timeTable: { [key: string]: Record[] };
};

export const TimeAccordion = ({ timeTable }: TimeAccordionProps) => {
  return (
    <AccordionRoot className="flex w-full flex-col gap-[8px]" type="multiple">
      {Object.entries(timeTable).map(([baseTime, records]) => (
        <AccordionItem key={baseTime} value={baseTime}>
          <AccordionTrigger className="h-[32px] w-full rounded-[8px] bg-theme-primary px-[12px] text-left font-semibold text-[16px] text-white">
            {baseTime}
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
