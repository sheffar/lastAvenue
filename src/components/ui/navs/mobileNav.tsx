import { sidebarData } from "@/components/ui/sidebar/suppliersidebar/data";
import { cn } from "@/utils/helpers";
import { SideNav } from "@/components/ui/navs/sideNav";

export const MobileNav = () => {
  return (
    <div className={cn("fixed bottom-0 w-full sm:hidden")}>
      <div className="border-primary/10 flex justify-between gap-4 overflow-x-auto border-t">
        {sidebarData.map((opt) => (
          <SideNav
            key={opt.href}
            textStyles="hidden"
            className={({ isActive }: { isActive: boolean }) =>
              cn({
                "after:bg-primary before:hidden after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:opacity-20":
                  isActive,
              })
            }
            {...opt}
          />
        ))}
      </div>
    </div>
  );
};
