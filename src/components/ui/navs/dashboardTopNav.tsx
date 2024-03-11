import { Notification } from "react-huge-icons/outline";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { User, LogoutOpen } from "react-huge-icons/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/utils/helpers";
import { SearchBar } from "../SearchBar";
import { Avatar } from "../avatar";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { FaEllipsis } from "react-icons/fa6";

// export interface TopNavProps {
//   title: string;
//   desc: string | React.ReactNode;
// }
// { desc, title }: TopNavProps

export const DashboardTopNav = () => {
  const navigate = useNavigate();

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef?.current &&
        event.target instanceof Node &&
        !tooltipRef.current?.contains(event.target)
      ) {
        setIsTooltipOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isTooltipOpen) {
        setIsTooltipOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isTooltipOpen]);

  const handleTooltipToggle = () => {
    setIsTooltipOpen(!isTooltipOpen);
    document.body.style.overflow = isTooltipOpen ? "auto" : "hidden";
  };

  const { pathname } = useLocation();

  return (
    // <header className="flex w-full justify-between pt-4 max-md:items-start">
    //   <div>
    //     <Heading level={6} className="text-lg md:text-[20px]">
    //       {title}
    //     </Heading>
    //     h
    //     <Text light className="text-xs md:text-sm">
    //       {desc}
    //     </Text>
    //   </div>
    //   <div className="flex items-center gap-2">
    //     <SearchBar className="max-md:hidden" />
    //     <button
    //       type="button"
    //       onClick={() => navigate("/notifications")}
    //       className={cn(
    //         "flex h-10 w-10 items-center justify-center rounded-lg bg-themeGrey/10 p-2.5 md:h-12 md:w-12 md:p-[12px]",
    //         isLight && "bg-theme/20",
    //         pathname.includes("/notifications") && !isLight && "bg-[#fff] text-[#000]",
    //         pathname.includes("/notifications") && isLight && "bg-[#000] text-[#fff]"
    //       )}
    //     >
    //       <Notification fontSize={24} />
    //     </button>
    //     <div className="flex w-full max-w-fit flex-row items-center rounded-md border-[1px] border-solid border-themeGrey/20 p-[2px] md:pr-1">
    //       <Avatar
    //         name="Rehkmansa"
    //         avatarClassName="md:h-11 h-8 w-8 md:w-11"
    //         textClassName="font-medium text-sm max-md:hidden"
    //         wrapperClassName="max-md:gap-0"
    //       >
    //         <Text
    //           className="whitespace-nowrap pr-1 capitalize max-md:hidden"
    //           light
    //           size="xs"
    //         >
    //           human resource
    //         </Text>
    //       </Avatar>

    //       <div
    //         onClick={handleTooltipToggle}
    //         className="flex cursor-pointer items-center justify-center rounded-full p-1 transition-[.2s] hover:bg-themeGrey/10"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 20 20"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="h-6 w-6"
    //         >
    //           <path
    //             d="M10 12 L5 7 M10 12 L15 7"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>

    //   {isTooltipOpen && (
    //     <motion.div
    //       initial={{ y: -20, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className={cn(
    //         isLight ? "bg-[#fff]" : "bg-theme/100",
    //         "tooltip absolute right-[5%] top-[10%]  z-[10000000] w-[184px] rounded-[8px] py-3"
    //       )}
    //       ref={tooltipRef as React.RefObject<HTMLDivElement>}
    //     >
    //       <div className="ronded-[3px] translate-[.3s] flex cursor-pointer items-center justify-start gap-3 px-4 py-3 text-base font-light hover:bg-main/10">
    //         <User className="text-xl" />
    //         <h3>My Profile</h3>
    //       </div>
    //       <div className="ronded-[3px] flex cursor-pointer items-center justify-start gap-3 px-4 py-2 text-base font-light text-[#F45B69] hover:bg-[#F45B69] hover:text-[#fff]">
    //         <LogoutOpen className="text-xl" />
    //         <h3>Logout</h3>
    //       </div>
    //     </motion.div>
    //   )}

    //   {/* Background overlay */}
    //   {isTooltipOpen && (
    //     <div className="fixed right-0 top-0 z-[999] h-full w-full backdrop-blur-[10px] transition-[.5s]"></div>
    //   )}
    // </header>
    <header className="flex w-full sticky flex-row justify-between px-3 py-1">
      <SearchBar
        className="w-2/3 max-w-full flex-row-reverse rounded-[40px] border-[2px] border-[#D3D3D3] pr-3"
        inputClassName="border-none pl-5 font-sans font-normal text-sm text-[#606060] py-2 w-full"
        hideinput={false}
        placeholder="Search anything..."
      />

      <Avatar
        name="Hiko"
        img={AssetsUtils.images.andrea}
        textClassName="font-medium text-[20px] text-[#232323]"
        imageClassName="w-[50px] h-[50px] rounded-full border-[3px] border-[#D3D3D3]"
        avatarTextContainerClassName="flex flex-row items-center gap-4"
      >
        <FaEllipsis className="text-[36px] cursor-pointer leading-tight" />
      </Avatar>
    </header>
  );
};
