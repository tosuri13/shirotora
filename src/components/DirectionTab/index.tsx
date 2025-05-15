import { cn } from "@/lib/utils";
import * as Tabs from "@radix-ui/react-tabs";

export type DirectionTabProps = Tabs.TabsProps;

export const DirectionTab = ({ ...props }: DirectionTabProps) => {
  return (
    <Tabs.Root {...props}>
      <Tabs.List className="border border-theme-primary">
        <Tabs.Trigger
          value="up"
          className={cn(
            "bg-white px-[24px] py-[8px] text-center font-semibold text-theme-primary",
            "data-[state=active]:bg-theme-primary data-[state=active]:text-white",
          )}
        >
          谷上方面
        </Tabs.Trigger>
        <Tabs.Trigger
          value="down"
          className={cn(
            "bg-white px-[24px] py-[8px] text-center font-semibold text-theme-primary",
            "data-[state=active]:bg-theme-primary data-[state=active]:text-white",
          )}
        >
          西神方面
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
};
