import { useNavigate } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ResetPasswordLayout } from "@/view/layout/ResetPasswodLayout";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import CustomInput from "@/components/ui/data-inputs/CustomInput";
import { useState } from "react";

export const SetNewPasswordView = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: "",
    confirm_password: ""
  })
  const [errors, setErrors] = useState({
    password: "",
    confirm_password: ""

  })

  const handleButtonClick = () => {
    navigate(RouterConstantUtil.routes.auth.password_reset_successful);
  };

  return (
    <ResetPasswordLayout
      heading="Set New Password"
      subHeading="Create a new password, must be at least 8 characters."
      topImage={AssetsUtils.icons.lock}
      buttonTitle={"Reset Password"}
      handleButtonClick={handleButtonClick}
      linkText="Home"
      linkRoute={RouterConstantUtil.routes.auth.login}
      parentClassname="pt-6"
    >
      <div className="mb-3 flex w-full flex-col gap-3">
        {" "}
      
        <CustomInput
          value={values.password}
          label={"Password"}
          placeholder="Enter your password"
          type={"password"}
          name={"password"}
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          error={errors.password}
        />


        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <span className="text-md font-medium text-[#888888]">strong</span>
            <IoMdCheckmarkCircle className="text-[28px]" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="text-md font-medium text-[#888888]">very strong</span>
            <FaRegCheckCircle className="text-[25px]" />
          </div>
        </div>
        <CustomInput
          value={values.confirm_password}
          label={"Password"}
          placeholder="Re-enter your password"
          type={"password"}
          name={"confirm_password"}
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          error={errors.confirm_password}
        />
        <span className="ml-auto">
          <IoMdCheckmarkCircle className="text-[28px]" />
        </span>
      </div>
    </ResetPasswordLayout>
  );
};
