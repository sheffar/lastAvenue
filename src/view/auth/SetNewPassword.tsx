import { useNavigate } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ResetPasswordLayout } from "@/view/layout/ResetPasswodLayout";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";

export const SetNewPasswordView = () => {
  const navigate = useNavigate();

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
        <BaseInput
          inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pr-3"
          inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
          label="Password"
          type="password"
          labelClassName="text-medium text-[16px]"
          placeholder="Enter your password"
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
        <BaseInput
          inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pr-3"
          inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
          label="Confirm Password"
          type="password"
          labelClassName="text-medium text-[16px]"
          placeholder="Re-enter your password"
          containerClassname="mt-3"
        />
        <span className="ml-auto">
          <IoMdCheckmarkCircle className="text-[28px]" />
        </span>
      </div>
    </ResetPasswordLayout>
  );
};
