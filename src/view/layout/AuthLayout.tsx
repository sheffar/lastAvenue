import { motion } from "framer-motion";
import { AuthNav } from "@/components/ui/navs/auth-nav";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { cn } from "@/utils/helpers";

export const AuthLayout = ({
  children,
  parentClassname,
}: IChildren & { parentClassname?: string }) => {
  return (
    <motion.div
      key="AuthLayout"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8 }}
      className={cn("flex h-full flex-col lg:h-screen")}
    >
      <AuthNav />
      <div className="mb-5 flex h-full overflow-hidden lg:mb-0 lg:h-screen">
        <div
          className="relative hidden h-full overflow-y-auto lg:block lg:w-1/2"
          style={{ backgroundImage: `url(${AssetsUtils.images.loginSideImage})` }}
        >
          <div
            className="bg absolute inset-0 overflow-hidden bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${AssetsUtils.images.loginSideImage})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>

        <div
          className={cn(
            "flex w-full items-center justify-center overflow-y-scroll bg-white pt-5 lg:w-1/2",
            parentClassname,
          )}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};
