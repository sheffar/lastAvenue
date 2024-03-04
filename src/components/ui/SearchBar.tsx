import { Search } from "react-huge-icons/solid";
import { cn } from "@/utils/helpers";

export const SearchBar = ({
  className,
  iconClassName,
  toggleInput,
  expanded,
}: IClass & { iconClassName?: string; expanded?: boolean; toggleInput?: () => void }) => {
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
          !expanded && "w-0 opacity-0 pointer-events-none",
        )}
        placeholder="Search"
        name="search"
      />
    </div>
  );
};
