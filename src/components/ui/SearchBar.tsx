import { Search } from "react-huge-icons/solid";
import { cn } from "@/utils/helpers";

export const SearchBar = ({
  className,
  iconClassName,
}: IClass & { iconClassName?: string }) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-[220px] items-center gap-4 rounded-md border border-themeGrey/20 p-3  focus-within:border-main",
        className
      )}
    >
      <Search fontSize={20} className={cn(iconClassName)} />
      <input
        type="text"
        className="w-full bg-transparent text-sm outline-none placeholder:text-themeText/50"
        placeholder="Search"
        name="search"
      />
    </div>
  );
};