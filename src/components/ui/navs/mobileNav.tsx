import { sidebarData } from "@/components/ui/sidebar/suppliersidebar/data";
import { cn } from "@/utils/helpers";
import { SideNav } from "@/components/ui/navs/sideNav";

export const MobileNav = () => {
  return (
    <div
      className={cn(
        "fixed bottom-0 w-full border-t border-t-[#D1D1D1] bg-white min-[900px]:hidden",
      )}
    >
      <div className="flex w-full justify-between gap-4 overflow-x-auto border-t px-4">
        {sidebarData.map((opt) => (
          <SideNav
            key={opt.href}
            textStyles="hidden"
            className={({ isActive }: { isActive: boolean }) =>
              cn(
                "w-[10rem] px-0",
                isActive &&
                  "border-r-none rounded-t-[4px] border-t-[5px] border-r-transparent border-t-[#232323] text-[#232323]",
                //   {
                //   "after:bg-primary border-none before:hidden after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:opacity-20"
                // isActive &&
                // "w-full rounded-r-[4px] border-none text-[#232323]",
                // }
              )
            }
            {...opt}
          />
        ))}
      </div>
    </div>
  );
};
