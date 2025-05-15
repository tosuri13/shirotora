import { stations } from "@/configs/station";
import { cn } from "@/lib/utils";
import * as RadioGroup from "@radix-ui/react-radio-group";

export type StationSelectorProps = RadioGroup.RadioGroupProps;

export const StationSelector = ({
  className,
  ...props
}: StationSelectorProps) => {
  return (
    <RadioGroup.Root
      className={cn("relative flex flex-col gap-[16px]", className)}
      {...props}
    >
      {stations.map(({ nodeId, name }, index) => (
        <div key={nodeId} className="flex w-[320px] items-center gap-[16px]">
          <RadioGroup.Item
            className={cn(
              "relative h-[32px] w-[32px] rounded-full border-[4px] border-theme-primary",
              index !== stations.length - 1 &&
                "before:absolute before:top-[24px] before:left-1/3 before:h-[28px] before:w-[8px] before:bg-theme-primary",
            )}
            id={nodeId}
            value={nodeId}
          >
            <RadioGroup.Indicator>
              <div className="m-auto h-[16px] w-[16px] rounded-full bg-theme-primary" />
            </RadioGroup.Indicator>
          </RadioGroup.Item>
          <label
            className="cursor-pointer font-semibold text-[24px]"
            htmlFor={nodeId}
          >
            {name}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
};
