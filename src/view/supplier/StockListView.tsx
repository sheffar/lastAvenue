import { DashboardTopNav } from "@/components/ui/navs/dashboardTopNav";
import { Sidebar } from "@/components/ui/sidebar/suppliersidebar/sidebar";
import { cn } from "@/utils/helpers";
import { MobileNav } from "src/components/ui/navs/mobileNav";
import { motion } from "framer-motion";

export const SupplierStockList = () => {
  return (
    <div className={cn("font-light duration-500 ease-out")}>
      <div className="max-sm:-20 flex max-sm:min-h-screen">
        <Sidebar />
        {/* <Outlet /> */}
        <main className="fixed  flex w-full flex-col gap-y-7 overflow-y-hidden py-5 sm:relative sm:overflow-y-auto">
          <div className="px-5">
            <DashboardTopNav />
          </div>
          {/* max-h-[calc(100vh-120px)] */}
          <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-[#E9E9E9] px-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pb-48"
            >
              {/* {children} */}
              <div>hello world</div>
            </motion.div>
          </div>
        </main>
        ;
      </div>
      <MobileNav />
    </div>
  );
};


