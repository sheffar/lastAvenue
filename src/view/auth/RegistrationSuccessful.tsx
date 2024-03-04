import { useNavigate } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ResetPasswordLayout } from "@/view/layout/ResetPasswodLayout";
import { APPNAME } from "@/utils/constants";

export const RegistrationSuccessfulView = () => {
  document.title = `Registration Successful | ${APPNAME}`;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(RouterConstantUtil.routes.auth.login);
  };

  return (
    <ResetPasswordLayout
      heading="Registration Successful?"
      subHeading="A sign up mail has been sent to your mail. Please check your mail to verify your mail"
      topImage={AssetsUtils.icons.check}
      buttonTitle={"Login"}
      handleButtonClick={handleButtonClick}
      linkText="Home"
      linkRoute={RouterConstantUtil.routes.auth.login}
    />
  );
};
