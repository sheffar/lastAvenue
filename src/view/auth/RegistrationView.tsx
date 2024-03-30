import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { SelectInput } from "@/components/ui/data-inputs/select-input";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { APPNAME } from "@/utils/constants";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupURL } from "@/services/urls/urls";
import axios from "axios";
import { z } from 'zod'

import { useForm, SubmitHandler } from 'react-hook-form'

export const RegistrationView = () => {
  document.title = `Register | ${APPNAME}`;
  const schema = z.object({
    firstname: z.string().min(1, {message: 'Please add your Firstname'}),
    lastname: z.string().min(2, {message: 'Please add a Lastname'}),
    email: z.string().email(),
    role: z.string().min(1, {message: 'Please select a role from the dropdown'}),
    password: z.string().min(8),
    confirm_password: z.string().min(8)
  }).refine((data) => data.password === data.confirm_password, {
    message: 'Passwords dont match',
    path: ['confirm_password']
  })


  type TFORM = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<TFORM>({
    resolver: zodResolver(schema)
  })

  const SubmitForm = (data: TFORM) => {
    console.log(data);
  }


  return (
    <AuthLayout parentClassname="max-md:items-start">
      <div className="flex h-auto w-[90%] flex-col items-center justify-center pb-12 lg:max-w-md lg:pt-48">
        <h2 className="mb-4 text-4xl font-bold text-[#232323]">Register</h2>
        <p className="text-md text-center font-medium text-[#060505] min-[400px]:w-[340px]">
          Register to enjoy the best fastest checkouts and awesome experiences
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(SubmitForm)}>
          <SelectInput
            options={["Buyer", "Seller"]}
            defaultValue="-- --"
            label="Sign up as a"
            name="role"
            register={register}
            error={errors.role?.message}
            labelClassname="font-medium text-[16px] text-[#0F60FF]"
            containerClassname="flex flex-row w-full items-center justify-between"
            selectClassName="w-2/4 bg-[#E9E9E9E9]"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Email Address"
            name="email"
            error={errors.email?.message}
            register={register}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your email"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="firstname"
            name="firstname"
            register={register}
            error={errors.firstname?.message}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your fullname"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            error={errors.lastname?.message}
            label="Lastname"
            name="lastname"
            register={register}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your fullname"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Password"
            type="password"
            error={errors.password?.message}
            name="password"
            register={register}
            labelClassName="text-medium text-[16px]"
            placeholder="Password"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Password"
            error={errors.confirm_password?.message}
            name="confirm_password"
            register={register}
            type="password"
            labelClassName="text-medium text-[16px]"
            placeholder="Confirm Password"
          />
          <div className={"flex flex-row items-start justify-start gap-2"}>
            <input
              type="checkbox"
              className="checkbox checkbox-primary max-[500px]:mt-[4px] md:h-[34px] md:w-[34px]"
              name="agreeTerms"
              id="agreeTerms"
            />
            <label
              htmlFor="agreeTerms"
              className="label flex cursor-pointer items-center md:mt-1"
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
          <BaseButton
            hoverOpacity={0.9}

            hoverScale={1.05}
            containerCLassName="bg-[#232323] rounded-[8px] w-full py-[24px] font-medium text-[16px] text-[#F7FAFC]"
            title={"Register"}
          />
          <p className={"text-md text-center font-medium text-[#212121]"}>
            Already have an account?{" "}
            <Link
              to={RouterConstantUtil.routes.auth.login}
              className={"cursor-pointer text-[#0F60FF]"}
            >
              Login
            </Link>
          </p>
          <SocialsLogin />
        </form>
      </div>
    </AuthLayout>
  );
};
