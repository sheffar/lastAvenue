import { useNavigate } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ResetPasswordLayout } from "@/view/layout/ResetPasswodLayout";
import { APPNAME } from "@/utils/constants";

export const ForgotPasswordView = () => {
  document.title = `Forgot Password | ${APPNAME}`;

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(RouterConstantUtil.routes.auth.password_reset_token);
  };

  return (
    <ResetPasswordLayout
      heading="Forgot Password?"
      subHeading=" Spare a few minutes with us let’s get you back in."
      topImage={AssetsUtils.icons.fingerprint}
      linkText="Back to login"
      linkRoute={RouterConstantUtil.routes.auth.login}
      buttonTitle={"Reset Password"}
      handleButtonClick={handleButtonClick}
    >
      <>
        <BaseInput
          inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
          inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
          label="Email Address"
          labelClassName="text-medium text-[16px]"
          containerClassname="w-full my-5"
          placeholder="Enter your email"
        />
      </>
    </ResetPasswordLayout>
  );
};
