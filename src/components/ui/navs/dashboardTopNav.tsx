// import { Notification } from "react-huge-icons/outline";
// import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import { User, LogoutOpen } from "react-huge-icons/outline";
// import { useLocation, useNavigate } from "react-router-dom";
// import { cn } from "@/utils/helpers";
import { SearchBar } from "../SearchBar";
import { Avatar } from "../avatar";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { FaEllipsis } from "react-icons/fa6";
import { BaseButton } from "@/components/ui/buttons/BaseButton";

// export interface TopNavProps {
//   title: string;
//   desc: string | React.ReactNode;
// }
// { desc, title }: TopNavProps

export const DashboardTopNav = () => {
  return (
    <header className="sticky top-10 flex w-full flex-row justify-between px-3 pr-0 sm:px-10 py-4 sm:py-7">
      <SearchBar
        className="w-2/3 max-w-full flex-row-reverse rounded-[40px] border-[2px] border-[#D3D3D3] pr-3"
        inputClassName="border-none pl-5 font-sans font-medium text-sm text-[#606060] py-2 w-full"
        hideinput={false}
        placeholder="Search anything..."
      />
      {/* <button className="relative"></button> */}
      <div className="flex items-center gap-1 sm:gap-7">
        <BaseButton containerCLassName="relative">
          <img className="w-6 h-6 sm:h-7 sm:w-7" src={AssetsUtils.icons.notification} alt="" />
          <span className="absolute right-[4px] top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EA5455] text-sm font-semibold text-white">
            4
          </span>
        </BaseButton>
        <Avatar
          name="Hiko"
          wrapperClassName="cursor-pointer select-none"
          img={AssetsUtils.images.andrea}
          textClassName="font-medium max-sm:hidden text-lg text-[#232323]"
          imageClassName="w-[50px] h-[50px] rounded-full border-[3px] border-[#D3D3D3]"
          avatarTextContainerClassName="flex flex-row items-center gap-4"
        >
          <FaEllipsis className="max-sm:hidden cursor-pointer text-[36px] leading-tight" />
        </Avatar>
      </div>
    </header>
  );
};
