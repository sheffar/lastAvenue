import { FiPhone } from "react-icons/fi";
import { SearchBar } from "@/components/ui/SearchBar";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { RiUser3Line } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type IAuthNav = {
  parentClassName?: string;
  authPages?: boolean;
};

export const AuthNav: React.FC<IAuthNav> = ({ parentClassName, authPages }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleInput = () => {
    setExpanded(!expanded);
  };
  return (
    <nav
      className={`sticky top-0 z-[1000] flex w-full ${!authPages && parentClassName}  flex-row items-center justify-center bg-[#fff] px-24 py-7 max-[1050px]:px-[12px] md:justify-between`}
    >
      <div className="relative hidden flex-row items-center gap-3  md:flex">
        {/* <TbWorld /> */}
        <img src={AssetsUtils.icons.world} alt="" />
        <select name="" className="border-none bg-transparent outline-none" id="">
          <option value="en">En</option>
          <option value="igb">Igb</option>
        </select>
        <div className={`${authPages && "ml-5 w-[220px]"}`}>
          {authPages ? (
            <SearchBar toggleInput={toggleInput} expanded={expanded} />
          ) : (
            <RiUser3Line className="h-5 w-5 cursor-pointer" />
          )}
        </div>
      </div>
      <div className={`w-[265px]  md:mr-36`}>
        <img className="h-full w-full" src={AssetsUtils.images.logo} alt="" />
      </div>
      {authPages ? (
        <div className="hidden flex-row items-center gap-3  text-[#232323] md:flex">
          <FiPhone className="text-[18px]" />
          <span className="w-max">+44 (0)20 7022 829</span>
        </div>
      ) : (
        <section className="hidden flex-row items-center gap-3  text-[#232323] md:flex">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink className="w-max" to={"woman"}>
                Woman
              </NavLink>
            </li>
            <li>
              <NavLink className="w-max" to={"man"}>
                Man
              </NavLink>
            </li>
            <li>
              <NavLink className="w-max" to={"collections"}>
                Collections
              </NavLink>
            </li>
            <li>
              <SearchBar toggleInput={toggleInput} expanded={expanded} />
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
};
