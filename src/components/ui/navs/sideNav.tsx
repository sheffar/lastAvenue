// import { Apps } from "react-huge-icons/outline";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/helpers";

type ActiveClass = { isActive: boolean };

type ClassName = (style: ActiveClass) => string;

export interface SideNavProps {
  // icon: typeof Apps;
  icon: any;
  text: string;
  href: string;
  textStyles?: string;
  className?: ClassName | string;
  iconsClassname?:string
}

export const SideNav = (props: SideNavProps) => {
  const { icon, href, text, iconsClassname } = props;
  const pathname = useLocation().pathname

  return (
    <NavLink to={href} className={`text-black ${pathname.split('?')[0] === href.split('?')[0] ? 'border-black font-semibold ' : 'border-transparent'} grid border-r-4 h-12 items-center duration-300 grid-cols-[40px_1fr] hover:text-red-500 hover:font-semibold`}>
      <img src={icon} alt="icon" className={cn(iconsClassname)} />
      <span className={``}>{text}</span>
    </NavLink>
  );
};
