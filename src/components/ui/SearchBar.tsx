import { Search } from "react-huge-icons/solid";
import { cn } from "@/utils/helpers";

interface ISearchBar {
  iconClassName?: string;
  inputClassName?: string;
  expanded?: boolean;
  hideinput?: boolean;
  toggleInput?: () => void;
  placeholder?: string;
}

export const SearchBar = ({
  className,
  iconClassName,
  inputClassName,
  toggleInput,
  expanded,
  hideinput = true,
  placeholder
}: IClass & ISearchBar) => {
  return (
    <div className={cn("flex w-full max-w-[220px] items-center gap-1 ", className)}>
      <Search
        onClick={toggleInput}
        fontSize={20}
        className={cn("cursor-pointer", iconClassName)}
      />
      <input
        type="text"
        className={cn(
          "w-full rounded-md border border-[#000] bg-transparent  py-3 pl-3 text-sm outline-none transition-all duration-300",
          hideinput && !expanded && "pointer-events-none w-0 opacity-0",
          inputClassName,
        )}
        placeholder={placeholder || "Search"}
        name="search"
      />
    </div>
  );
};
