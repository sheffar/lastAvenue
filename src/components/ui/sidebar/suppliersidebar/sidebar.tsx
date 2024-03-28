import { Link, NavLink } from "react-router-dom";
import { sidebarData } from "./data";
import { cn } from "@/utils/helpers";
import { SideNav } from "@/components/ui/navs/sideNav";
import { AssetsUtils } from "@/utils/AssetsUtils";
export const Sidebar = () => {
  return (
    <aside className="transition-[.2s] sticky pl-0 top-0 h-screen w-full max-w-fit border-r border-r-[#D1D1D1] bg-white max-[900px]:hidden md:max-w-[280px] pt-5">
      <div className={cn("flex flex-col gap-y-20")}>
        <Link to="#" aria-label="Admin" className="sticky top-10 z-20 bg-white">
          <div className="w-[80%] px-2 flex mx-auto flex-row items-center justify-center gap-2">
            <img className="w-full" src={AssetsUtils.images.logoEllipse} alt="logo" />
            <img className="w-full" src={AssetsUtils.images.sidebarlogo1} alt="logo" />
          </div>
        </Link>
        <ul
          className="customised-scrollbar flex w-full flex-col items-center gap-2 overflow-y-auto lg:h-[calc(100%-20px)]"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {sidebarData.map((data, i) => (
            <SideNav key={i} {...data} textStyles="hidden text-sm block" />
          ))}
        </ul>
      </div>
      <NavLink
        to={"#"}
        className={
          "transition-ease absolute left-[10%] bottom-10 z-20 flex items-center gap-4 hover:text-red-600 text-md font-medium text-[#333333]"
        }
      >
        <img src={AssetsUtils.icons.logout} alt="icon" className={cn("")} />
        <span>Logout</span>
      </NavLink>
    </aside>
  );
};
