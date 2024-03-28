import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { Checkbox } from "@/components/ui/data-inputs/FilterCheckbox";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { APPNAME } from "@/utils/constants";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import axios from "axios";

export type TLoginValues = {
  email: string
  password: string
}

export const LoginView = () => {
  document.title = `Login | ${APPNAME}`;
  const url = "https://last-avenue-api.onrender.com/api/v1/auth/login"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError('');
  };



  const handleSubmit = async () => {
    console.log(email, password);
    if (!email) {
      setEmailError('Email is required');
      return
    }

    if (!password) {
      setPasswordError('Password is required');
      return
    }

    try {
      const response = await axios.post(url, { email, password });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


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
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your email"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your Password"
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
            onClick={handleSubmit}
            hoverOpacity={0.9}
            loading={loading}
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
