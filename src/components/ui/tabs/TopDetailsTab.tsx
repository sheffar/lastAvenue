import { motion } from "framer-motion";
import { cn } from "@/utils/helpers";
import { settingsTabs } from "@/utils/constants";

type TopDetailsTabPropType = {
  setActiveTab: (slug: string) => void;
  activeTab: string;
};

export const TopDetailsTab = ({
  setActiveTab,
  activeTab,
}: TopDetailsTabPropType) => {

  return (
    <div className="border-b-[#D9D9D9] flex gap-5 overflow-x-auto border-b-[3px] w-auto">
      {settingsTabs.map((tab) => (
        <motion.div
          onClick={() => setActiveTab(tab.slug)}
          key={tab.id}
          className="relative flex cursor-pointer flex-col gap-2 transition-[2s]"
        >
          <div
            className={cn(
              "transition-ease px-5 font-sans flex w-max flex-row items-center gap-2 font-semibold",
              activeTab == tab.slug ? "text-[#232323]" : "text-[#606060]",
            )}
          >
            <span>{tab.title}</span>
          </div>
          {activeTab == tab.slug && (
            <motion.div
              layoutId="bubble"
              initial={{ width: 0, x: 0 }}
              animate={{ width: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className=" bg-[#232323] inset-0 z-10 h-[3px] w-full transition-[5s]"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};
