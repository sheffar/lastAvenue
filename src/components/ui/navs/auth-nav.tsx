import { FiPhone } from "react-icons/fi";
import { SearchBar } from "@/components/ui/SearchBar";
import { AssetsUtils } from "@/utils/AssetsUtils";
import {  useState } from "react";

export const AuthNav = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleInput = () => {
    setExpanded(!expanded);
  };
  return (
    <nav className="sticky top-0 z-[1000] flex w-full flex-row items-center justify-center md:justify-between max-[1050px]:px-[12px] bg-[#fff] px-24 py-7">
      <div className="relative hidden flex-row items-center gap-3 md:flex ">
        {/* <TbWorld /> */}
        <img src={AssetsUtils.icons.world} alt="" />
        <select name="" className="border-none outline-none bg-transparent" id="">
          <option value="en">En</option>
          <option value="igb">Igb</option>
        </select>
        <div className="w-[220px] ml-5">
          <SearchBar toggleInput={toggleInput} expanded={expanded} />
        </div>
      </div>
      <div className="w-[265px] md:mr-36">
        <img className="h-full w-full" src={AssetsUtils.images.logo} alt="" />
      </div>
      <div className="hidden flex-row items-center gap-3 text-[#232323] md:flex">
        <FiPhone className="text-[18px]" />
        <span className="w-max">+44 (0)20 7022 829</span>
      </div>
    </nav>
  );
};
