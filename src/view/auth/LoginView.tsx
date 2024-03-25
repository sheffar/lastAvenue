import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { APPNAME } from "@/utils/constants";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import CustomInput from "@/components/ui/data-inputs/CustomInput";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

export const LoginView = () => {
  document.title = `Login | ${APPNAME}`;

  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fromError, setFormError] = useState("")
  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const api = 'https://last-avenue-api.onrender.com/api/v1/auth/login'

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const completeLogin = async () => {
    if (!values.email || !values.password) {
      setErrors({
        email: values.email.trim() === "" ? 'Please fill in this field' : '',
        password: values.password.trim() === "" ? 'Please fill in this field' : ''
      })
      return
    }

    if (!isValidEmail(values.email)) {
      setErrors({
        email: "Please input a valid email addresss",
        password: ''
      })
      return
    }
    setLoading(true)
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      setLoading(false)
      if (!result?.success) {
        console.log(result.error);
        setFormError(result.error);
      } else {
        localStorage.setItem("accessToken",result.accessToken);
      }
      console.log(result);
    } catch (error) {
    }

  }

  useEffect(() => {
    setFormError("")
  }, [values])



  return (
    <AuthLayout parentClassname="max-md:items-start overflow-y-hidden">
      <div className="flex h-auto w-[90%] flex-col items-center lg:max-w-md">
        <h2 className="mb-4 text-4xl font-bold text-[#232323]">Sign In</h2>
        <p className="text-md text-center font-medium text-[#060505] min-[400px]:w-[340px]">
          Sign in to your account if you are registered
        </p>
        <form className="mt-6 w-full space-y-4">
          <CustomInput
            value={values.email}
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
            name={"email"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.email}
          />
          <CustomInput
            value={values.password}
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.password}
          />



          <div className={"flex flex-row flex-wrap items-center justify-between gap-2"}>
            <div className="flex gap-2 items-center">
              <div className="">
                <div
                  className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 text-white shadow duration-300 ${remember ? "bg-blue-500" : "bg-white"}`}
                  onClick={() => {
                    setRemember(!remember)
                  }}
                >
                  <BsCheck className="stroke-1 text-2xl" />
                </div>
              </div>
              <p>Keep me signed in</p>
            </div>
            <Link
              className="text-md font-medium text-[#0F60FF]"
              to={RouterConstantUtil.routes.auth.forgot_password}
            >
              Forgot password?
            </Link>
          </div>
          <p className="text-red-500 mt-2">{fromError}</p>
          <BaseButton
            hoverOpacity={0.9}
            loading={loading}
            hoverScale={1.05}
            containerCLassName="bg-[#232323] rounded-[8px] w-full py-[24px] font-medium text-[16px] text-[#F7FAFC]"
            title={"Sign In"}
            onClick={completeLogin}
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
