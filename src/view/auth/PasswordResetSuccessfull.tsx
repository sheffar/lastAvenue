import { useNavigate } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ResetPasswordLayout } from "@/view/layout/ResetPasswodLayout";
import { APPNAME } from "@/utils/constants";

export const PasswordResetSuccessfulView = () => {
  document.title = `Password Reset Successful | ${APPNAME}`;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(RouterConstantUtil.routes.auth.login);
  };

  return (
    <ResetPasswordLayout
      heading="Password Reset Successful?"
      subHeading="You have successfully reset your password."
      topImage={AssetsUtils.icons.check}
      buttonTitle={"Login"}
      handleButtonClick={handleButtonClick}
    />
  );
};
