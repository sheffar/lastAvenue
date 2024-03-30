import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { Checkbox } from "@/components/ui/data-inputs/FilterCheckbox";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { AuthLayout } from "../layout/AuthLayout";
import axios from "axios";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

export const LoginView = () => {

  const api = "https://last-avenue-api.onrender.com/api/v1/auth/login"
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
  // const navigate = useNavigate()

  type TFORM = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TFORM>({
    resolver: zodResolver(schema)
  })

  const SubmitForm = async (data: TFORM) => {
    try {
      const response = await axios.post(api, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthLayout parentClassname="max-md:items-start overflow-y-hidden">
      <div className="flex h-auto w-[90%] flex-col items-center lg:max-w-md">
        <h2 className="mb-4 text-4xl font-bold text-[#232323]">Sign In</h2>
        <p className="text-md text-center font-medium text-[#060505] min-[400px]:w-[340px]">
          Sign in to your account if you are registered
        </p>
        <form className="mt-6 w-full space-y-4" onSubmit={handleSubmit(SubmitForm)}>
          <BaseInput
            inputClassName=" border-[#E9E9E9] h-[55px] border-2 text-[#232323] font-bold text-[16px]"
            label="Email Address"
            type="text"
            name="email"
            register={register}
            error={errors.email?.message}
            labelClassName="text-medium pl-1 text-[16px]"
            placeholder="Enter your email"
          />
          <BaseInput
            inputClassName=" border-[#E9E9E9] pl-2 h-[55px] border-2 text-[#232323] font-bold text-[16px]"
            label="Password"
            name="password"
            register={register}
            error={errors.password?.message}
            type="text"
            labelClassName="text-medium pl-1 text-[16px]"
            showEye={true}
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
            hoverOpacity={0.9}
            isSubmitting={isSubmitting}
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
