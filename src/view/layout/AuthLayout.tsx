import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ThemeUtil } from "@/util/ThemeUtil.ts";
import Logo from "../../assets/image/logo.svg";
import useHandleRouteNavigate from "@/util/customhooks/useHandleRouteNavigate.tsx";
import { RouterConstantUtil } from "@/util/constants/RouterConstantUtil";
export interface AuthLayoutProps {
  children?: React.JSX.Element;
  title: string;
  subTitle: string;
  style?: CSSProperties | undefined;
  routeUrl?: string;
  footerNextRouteType?: string;
  bgImage?: string;
  showMobileBg?: boolean;
}
export const AuthLayout = ({
  children,
  title,
  subTitle,
  style,
  routeUrl = "",
  footerNextRouteType,
  bgImage,
  showMobileBg = false,
}: AuthLayoutProps) => {
  return (
    <motion.div
      key="AuthLayout"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8 }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="login_linear_gradient"
    >
      <div className={"auth-two-background overflow-hidden relative"}>
        <img
          src={bgImage}
          className={
            "fixed max-[700px]:hidden max-[900px]:scale-[2] w-full overflow-hidden bg-center  opacity-[.3] bg-no-repeat"
          }
          alt={"hero image"}
        />
        <div className="w-full min-h-screen ">
          <img
            src={Logo}
            className="z-50 fixed top-1 logo max-[700px]:hidden"
            alt={"logo"}
            onClick={useHandleRouteNavigate(
              RouterConstantUtil.routes.page.home
            )}
          />
          <div
            className="z-[50] pb-[16px] relative m-auto h-auto flex flex-col items-center  w-[40%] max-[1200px]:w-[70%] max-[600px]:w-[100%]"
            style={{
              // backgroundColor: "rgba(255,255,255,0.85)",
              marginTop: "50px",
              backgroundColor: "rgba(255,255,255,0.70)",
              ...style,
            }}
          >
            <h2
              dangerouslySetInnerHTML={{ __html: title }}
              className={
                "font-medium max-[425px]:text-[38px] w-[90%] text-[40px] text-center leading-[45px] mt-7 font-darkerGrotesque-bold"
              }
              style={{ color: ThemeUtil.color.blackColor }}
            >
              {/* {title} */}
            </h2>
            <h2
              className={
                "text-center w-[80%] font-bold max-[425px]:text-[21px] text-[25px] leading-[25px] text-grayColor_2 font-darkerGrotesque-semiBold"
              }
            >
              {subTitle}
            </h2>
            {children}
          </div>
          <p
            className={`hidden ${
              footerNextRouteType && "max-[425px]:flex"
            } text-grayColor_1 text-[18px] text-center justify-center`}
          >
            {footerNextRouteType == "register"
              ? "Don’t have an account yet?"
              : "Already have an account?"}
            <span
              onClick={useHandleRouteNavigate(
                footerNextRouteType == "register"
                  ? RouterConstantUtil.routes.auth.firstPhaseRegister
                  : RouterConstantUtil.routes.auth.login
              )}
              className={
                "text-blackColor underline cursor-pointer font-darkerGrotesque-bold"
              }
            >
              {footerNextRouteType == "register" ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

AuthLayout.defaultProps = {
  title: "Welcome back!",
  subTitle: "Login to your account",
};
