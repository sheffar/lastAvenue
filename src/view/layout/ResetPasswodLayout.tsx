import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthNav } from "@/components/ui/navs/auth-nav";
import { FaAngleLeft } from "react-icons/fa6";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { cn } from "@/utils/helpers";

interface IResetPasswordLayout {
  heading: string;
  subHeading: string;
  topImage: string;
  linkRoute?: string;
  linkText?: string;
  buttonTitle?: string;
  parentClassname?: string;
  handleButtonClick?: () => void;
  showResendMailText?: boolean;
}

export const ResetPasswordLayout = ({
  children,
  heading,
  subHeading,
  topImage,
  linkRoute,
  linkText,
  buttonTitle,
  parentClassname,
  handleButtonClick,
  showResendMailText,
}: Partial<IChildren> & IResetPasswordLayout) => {
  return (
    <motion.div
      key="ResetPasswordLayout"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8 }}
      className="flex h-full flex-col overflow-hidden"
    >
      <AuthNav />
      <div className={cn("mx-auto mb-5 flex w-[530px] flex-col items-center justify-center pt-20 max-[600px]:w-[90%]", parentClassname)}>
        <motion.div
          className="mb-5"
          initial={{ y: 300, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.5 },
          }}
          exit={{ y: 300, opacity: 0 }}
        >
          <img src={topImage} alt="heading_img" />
        </motion.div>
        <h2 className="mb-4 text-2xl font-bold text-[#232323] sm:text-4xl">{heading}</h2>
        <p className="mb-4 w-full text-center text-lg font-medium text-[#606060]">
          {subHeading}
        </p>

        {children}

        <BaseButton
          hoverOpacity={0.9}
          hoverScale={1.05}
          containerCLassName="bg-[#232323] rounded-[8px] w-full py-[24px] font-medium text-[16px] text-[#F7FAFC]"
          title={buttonTitle}
          onClick={handleButtonClick}
        />

        {showResendMailText && (
          <p className={"text-md mt-4 text-center font-medium text-[#606060]"}>
            Didn’t get the mail? {""}
            <Link
              to={RouterConstantUtil.routes.auth.register}
              className={"cursor-pointer text-[#0F60FF]"}
            >
              Click to resend mail
            </Link>
          </p>
        )}

        {linkRoute && linkText && (
          <Link
            to={linkRoute}
            className={
              "text-md mt-4 flex flex-row items-center text-center font-medium text-[#212121]"
            }
          >
            <FaAngleLeft /> {linkText}
          </Link>
        )}
      </div>
    </motion.div>
  );
};
