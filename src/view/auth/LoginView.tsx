import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { Checkbox } from "@/components/ui/data-inputs/FilterCheckbox";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { APPNAME } from "@/utils/constants";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";

export const LoginView = () => {
  document.title = `Login | ${APPNAME}`;
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  return (
    <AuthLayout parentClassname="max-md:items-start overflow-y-hidden">
      <div className="flex h-auto w-[90%] flex-col items-center lg:max-w-md">
        <h2 className="mb-4 text-4xl font-bold text-[#232323]">Sign In</h2>
        <p className="text-md text-center font-medium text-[#060505] min-[400px]:w-[340px]">
          Sign in to your account if you are registered
        </p>
        <form className="mt-6 w-full space-y-4">
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Email Address"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your email"
          />

          <BaseInput
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pr-3"
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            label="Password"
            value={values.email}
            error={errors.email}
            setErrors={setErrors}
            setValues={setValues}
            type="password"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your password"
          />

          <div className={"flex flex-row flex-wrap items-center justify-between gap-2"}>
            <Checkbox
              label="keep me signed in"
              checkboxClassname="max-[500px]:mt-[4px] md:h-[18px] md:w-[18px]"
            />
            <Link
              className="text-md font-medium text-[#0F60FF]"
              to={RouterConstantUtil.routes.auth.forgot_password}
            >
              Forgot password?
            </Link>
          </div>
          <BaseButton
            hoverOpacity={0.9}
            hoverScale={1.05}
            containerCLassName="bg-[#232323] rounded-[8px] w-full py-[24px] font-medium text-[16px] text-[#F7FAFC]"
            title={"Sign In"}
          />
          <p className={"text-md text-center font-medium text-[#212121]"}>
            Don’t have an account yet? {""}
            <Link
              to={RouterConstantUtil.routes.auth.register}
              className={"cursor-pointer text-[#0F60FF]"}
            >
              Register now
            </Link>
          </p>
          <SocialsLogin />
        </form>
      </div>
    </AuthLayout>
  );
};
