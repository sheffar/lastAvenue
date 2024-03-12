import { DirectionLeft, DirectionRight } from "react-huge-icons/outline";
import { SelectInput } from "../data-inputs/select-input";
import { useState } from "react";
import { cn } from "@/utils/helpers";

//dummy mock pagination tabs
export const PaginationTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [1, 2, 3];

  const handleArrowClick = (t: "des" | "inc") => {
    if (t === "des" && activeTab > 1) {
      setActiveTab(activeTab - 1);
    } else if (t == "inc" && activeTab < tabs?.length) {
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <div className="mt-7 flex flex-row flex-wrap items-center justify-between gap-3 px-5">
      <div className="flex flex-row items-center gap-4">
        <p className="text-md font-sans font-medium text-[#8B909A]">Showing</p>
        <SelectInput
          defaultValue="14"
          options={Array.from({ length: 14 }, (_, index) => (index + 1).toString())}
          selectClassName="adjust_select_arrow_angle border-[1px] border-[#E9E7FD] text-sm pr-3 bg-[#FFFFFF] py-0 w-[80px] h-[40px] max-w-full flex-row-reverse rounded-[4px] bg-white pr-3"
          optionClassname="text-[#8B909A] "
        />
        <p className="text-md font-sans font-medium text-[#8B909A]">of 500</p>
      </div>
      <div className="item-center flex select-none flex-row justify-center gap-3">
        <div className="flex cursor-pointer items-center rounded-[4px] border border-transparent bg-[#F1F2F6] px-1 py-0 font-sans text-2xl font-normal text-[#8B909A]">
          <DirectionLeft onClick={() => handleArrowClick("des")} />
        </div>
        <div className="flex flex-row items-center gap-2">
          {tabs.map((num: number) => (
            <span
              key={num}
              onClick={() => setActiveTab(num)}
              className={cn(
                "cursor-pointer rounded-[4px] border border-transparent bg-[#F1F2F6] px-3 py-1 font-sans text-sm font-normal text-[#8B909A]",
                activeTab === num && "bg-[#0F60FF] text-white ",
              )}
            >
              {num}
            </span>
          ))}
        </div>
        <div className="flex cursor-pointer items-center rounded-[4px] border border-transparent bg-[#F1F2F6] px-1 py-0 font-sans text-2xl font-normal text-[#8B909A]">
          <DirectionRight onClick={() => handleArrowClick("inc")} />
        </div>
      </div>
    </div>
  );
};
