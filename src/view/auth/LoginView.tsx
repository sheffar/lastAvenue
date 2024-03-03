// import { AuthLayout } from "../layout/AuthLayout.tsx";
// import { RouterConstantUtil } from "../../util/constants/RouterConstantUtil.ts";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import { LoginFormik } from "../../components/formik/auth/LoginFormik.tsx";
// import { ThemeUtil } from "@/util/ThemeUtil.ts";

import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { Checkbox } from "@/components/ui/data-inputs/FilterCheckbox";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { Link } from "react-router-dom";

export const LoginView = () => {
  document.title = "Login | The Last Avenue";

  return (
    <div className="flex h-screen">
      <div className="relative hidden h-full lg:block lg:w-1/2">
        <img
          className="xxl:object-fill h-full w-full object-cover brightness-75"
          src={AssetsUtils.images.loginSideImage}
          alt="Login Image"
        />
        {/* <div className="absolute inset-0 bg-gray-300 opacity-10"></div> */}
      </div>

      <div className="flex h-full w-full items-center justify-center overflow-scroll bg-white lg:w-1/2">
        <div className="max-w-md pt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Register</h2>
          <p>Register to enjoy the best fastest checkouts and awesome experiences</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            <BaseInput
              inputClassName="border-none text-[#232323] px-3 text-bold text-[16px]"
              inputContainerClassName="h-[60px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
              label="Full Name"
              labelClassName="text-medium text-[16px]"
            />
            <BaseInput
              inputContainerClassName="h-[60px] border-2 rounded-[10px] border-[#E9E9E9] pr-3"
              inputClassName="border-none text-[#232323] px-3 text-bold text-[16px]"
              label="Password"
              type="password"
              labelClassName="text-medium text-[16px]"
            />
            <BaseInput
              inputContainerClassName="h-[60px] border-2 rounded-[10px] border-[#E9E9E9] pr-3"
              inputClassName="border-none text-[#232323] px-3 text-bold text-[16px]"
              label="Confirm Password"
              type="password"
              labelClassName="text-medium text-[16px]"
            />

            <div className={"flex flex-row items-start justify-start gap-2"}>
              <input
                type="checkbox"
                className="checkbox checkbox-primary h-[34px] w-[34px]"
                name="agreeTerms"
                id="agreeTerms"
              />
              <label
                htmlFor="agreeTerms"
                className="label mt-1 flex cursor-pointer items-center"
              >
                <span className={"w-full text-[16px] font-medium text-[#232323]"}>
                  I have read and agree the general
                  <Link to={"#"} className="ml-1 cursor-pointer underline">
                    Terms & Conditions
                  </Link>{" "}
                  and the
                  <Link to={"#"} className="ml-1 cursor-pointer underline">
                    Privacy Policy
                  </Link>
                  . of TLA.
                </span>
              </label>
            </div>
          </form>
          <p className={"text-center text-[20px] font-medium text-[#212121]"}>
            Already have an account?{" "}
            <span
              className={
                "text-blackColor font-darkerGrotesque-bold cursor-pointer underline"
              }
            >
              Login
            </span>
          </p>
          <SocialsLogin />

          <BaseButton
            hoverOpacity={0.9}
            hoverScale={1.05}
            containerCLassName="bg-[#232323] w-full py-[19px] font-medium text-[16px] text-[#F7FAFC]"
            title={"Register"}
          />
        </div>
      </div>
    </div>
  );
};
