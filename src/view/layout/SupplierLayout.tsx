import { DashboardTopNav } from "@/components/ui/navs/dashboardTopNav";
import { Sidebar } from "@/components/ui/sidebar/suppliersidebar/sidebar";
import { ScrollToTop, cn } from "@/utils/helpers";
import { MobileNav } from "src/components/ui/navs/mobileNav";
import { motion } from "framer-motion";

interface ISupplierLayout {
  title: string;
  subtitle?: string;
}

export const SupplierLayout = ({
  title,
  subtitle,
  children,
}: ISupplierLayout & IChildren) => {
  return (
    <div className={cn("font-light duration-500 ease-out")}>
      <ScrollToTop />
      <div className="max-sm:-20 flex max-sm:min-h-screen">
        <Sidebar />
        <main className=" relative flex w-full flex-col">
          <div className="sticky top-0 z-50 bg-white">
            <DashboardTopNav />
          </div>
          <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-[#E9E9E9] px-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pb-48 pl-7 pr-3 pt-7 max-sm:px-0"
            >
              <h3 className="font-sans text-2xl font-bold text-[#23272E]"> {title}</h3>
              {subtitle && (
                <p className="font-sans text-md font-medium leading-tight text-[#606060]">
                  {subtitle}
                </p>
              )}
              {children}
            </motion.div>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default SupplierLayout;
