import { useNavigate, useLocation } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ResetPasswordLayout } from "@/view/layout/ResetPasswodLayout";
import { useState } from "react";
import { OtpInput } from "@/components/ui/data-inputs/OtpInput";

export const PasswordResetTokenView = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("tn");

  const [otp, setOtp] = useState<string>("");
  const [disableInputs, ] = useState(false);

  console.log("tn", token);

  const handleButtonClick = () => {
    navigate(RouterConstantUtil.routes.auth.set_new_passsword);
  };

  return (  
    <ResetPasswordLayout
      heading="Password Reset"
      subHeading="We sent a code to icardi@gmail.com"
      topImage={AssetsUtils.icons.resetMailIcon}
      buttonTitle={"Continue"}
      handleButtonClick={handleButtonClick}
      linkRoute={RouterConstantUtil.routes.auth.login}
      linkText="Back to login"
      showResendMailText={true}
    >
      <>
        <OtpInput onChangeText={setOtp} otp={otp} disableInputs={disableInputs} />
      </>
    </ResetPasswordLayout>
  );
};
