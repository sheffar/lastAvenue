import { Link, NavLink } from "react-router-dom";
import { sidebarData } from "./data";
import { cn } from "@/utils/helpers";
import { SideNav } from "@/components/ui/navs/sideNav";
import { AssetsUtils } from "@/utils/AssetsUtils";

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 h-screen w-full max-w-fit border-r border-r-[#D1D1D1] max-sm:hidden lg:max-w-[280px] lg:pt-5">
      <div className={cn("bg-themeGrey/5  flex flex-col gap-y-20")}>
        <Link to="#" aria-label="Admin" className="sticky top-10 z-20 bg-white">
          <div className="flex flex-row items-center justify-center gap-2">
            <img src={AssetsUtils.images.logoEllipse} alt="logo" />
            <img src={AssetsUtils.images.sidebarlogo1} alt="logo" />
          </div>
        </Link>
        <ul
          className="customised-scrollbar flex w-full flex-col items-center gap-2 overflow-y-auto lg:h-[calc(100%-20px)]"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {sidebarData.map((data) => (
            <SideNav key={data.text} {...data} textStyles="hidden text-sm lg:block" />
          ))}
        </ul>
      </div>
      <NavLink
        to={"#"}
        className={
          "transition-ease absolute left-[10%] bottom-10 z-20 flex items-center gap-4 hover:text-red-600 font-pop text-md font-medium text-[#333333]"
        }
      >
        <img src={AssetsUtils.icons.logout} alt="icon" className={cn("")} />
        <span>Logout</span>
      </NavLink>
    </aside>
  );
};
