// import { Apps } from "react-huge-icons/outline";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils/helpers";

type ActiveClass = { isActive: boolean };

type ClassName = (style: ActiveClass) => string;

export interface SideNavProps {
  // icon: typeof Apps;
  icon: string;
  text: string;
  href: string;
  textStyles?: string;
  className?: ClassName | string;
  iconsClassname?:string
}

export const SideNav = (props: SideNavProps) => {
  const { icon, href, text, textStyles, className, iconsClassname } = props;

  const style = ({ isActive }: ActiveClass) => {
    const baseStyles = cn(
      "transition-ease relative flex items-center justify-center gap-4 p-4 font-sans text-lg font-medium text-[#888888] hover:text-[#232323]",
      isActive && "border-r-[#232323] w-full rounded-r-[4px] border-r-[4px] text-[#232323]",
    );

    if (typeof className === "string") return cn(baseStyles, className);

    return cn(baseStyles, className?.({ isActive }));
  };

  return (
    <NavLink to={href} className={style}>
      <img src={icon} alt="icon" className={cn(iconsClassname)} />
      <span className={cn("font-sans", textStyles)}>{text}</span>
    </NavLink>
  );
};
