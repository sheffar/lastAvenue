import { Link, NavLink } from "react-router-dom";
import { sidebarData } from "./data";
import { cn } from "@/utils/helpers";
import { SideNav } from "@/components/ui/navs/sideNav";
import { AssetsUtils } from "@/utils/AssetsUtils";

export const Sidebar = () => {
  return (
    <div className="flex bg-white border-r max-[900px]:hidden md:max-w-[280px] h-screen w-[350px] flex-col">
      <Link
        to=""
        aria-label="Admin"
        className="flex h-20 w-full items-center "
      >
        <div className="flex gap-2 pl-8">
          <img className="w-[80%]" src={AssetsUtils.images.logoEllipse} alt="logo" />
          <img className="w-[80%]" src={AssetsUtils.images.sidebarlogo1} alt="logo" />
        </div>
      </Link>
      <div className="w-full flex-1 mt-5 overflow-y-auto">
        <ul className="mt-5 flex flex-col gap-2 pr-[1px] pl-8 ">
          {sidebarData.map((data, i) => (
            <SideNav key={i} {...data} textStyles="hidden text-black text-sm block" />
          ))}
        </ul>
      </div>
      <div className="h-14 flex items-center border-t-2 w-full ">
        <NavLink
          to={"#"}
          className={
            "transition-ease text-md ml-8 flex items-center gap-4 font-medium text-[#333333] hover:text-red-600"
          }
        >
          <img src={AssetsUtils.icons.logout} alt="icon" className={cn("")} />
          <span className="">Logout</span>
        </NavLink>
      </div>
    </div>
  );
};
