import { useNavigate } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { ResetPasswordLayout } from "@/view/layout/ResetPasswodLayout";
import { APPNAME } from "@/utils/constants";
import { useState } from "react";
import CustomInput from "@/components/ui/data-inputs/CustomInput";

export const ForgotPasswordView = () => {
  document.title = `Forgot Password | ${APPNAME}`;

  const navigate = useNavigate();
  const [values, setValues] = useState({
    password: ""
  })
  const [errors, setErrors] = useState({
    password: ""
  })

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
        <CustomInput
          value={values.password}
          label={"Email"}
          placeholder={"Email"}
          type={"email"}
          name={"email"}
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          error={errors.password}
        />
      </>
    </ResetPasswordLayout>
  );
};
