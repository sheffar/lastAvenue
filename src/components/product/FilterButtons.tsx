import { AssetsUtils } from "@/utils/AssetsUtils";
import React from "react";
import { BaseButton } from "../ui/buttons/BaseButton";

const FilterButtons = () => {
  const tags = [
    "New in",
    "Man",
    "Woman",
    "Kids",
    "Jordan Str.",
    "Apparel Lane",
    "Soho and West",
    "Da Village",
    "8th Avenue",
  ];
  return (
    <section className="flex justify-around gap-4 overflow-x-hidden py-4">
      <div className="flex justify-evenly gap-6">
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <BaseButton containerCLassName="bg-transparent px-8 py-2 rounded-md text-[#232323] hover:bg-[#ECECEC] font-medium cursor-pointer">
              {tag}
            </BaseButton>
          </React.Fragment>
        ))}
      </div>
      <div>
        <BaseButton containerCLassName="flex items-center gap-3 bg-[#ECECEC] rounded-md px-8 py-2">
          <img src={AssetsUtils.icons.filter} alt="filter_icon" className="w-[25px]" />
          <span className="font-inter text-lg  font-medium text-[#232323]">Filter</span>
        </BaseButton>
      </div>
    </section>
  );
};

export default FilterButtons;
