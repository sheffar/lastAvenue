import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import CustomInput from "@/components/ui/data-inputs/CustomInput";
import CustomSelect from "@/components/ui/data-inputs/CustomSelect";

export const RegistrationView = () => {
  const api = 'https://last-avenue-api.onrender.com/api/v1/auth/signup'
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const options = ['Buyer', 'Seller']
  const navigate = useNavigate()
  const [formError, setFormError] = useState("");




  const [values, setValues] = useState({
    fullname: "",
    lastname: '',
    username: '',
    email: "",
    role: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    lastname: '',
    username: '',
    email: "",
    role: "",
    password: "",
    confirm_password: "",
  });

  const completeSignup = async () => {
    const { confirm_password, ...rest } = values
    console.log(rest, values);
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      });
      const result = await response.json();
      setLoading(false)
      if (!result?.success) {
        console.log(result.error);
        setFormError(result.error);
      } else {
        navigate('/auth/login')
      }
      console.log(result);
    } catch (error) {
    }

  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }



  const handleRegistration = () => {
    if (
      !values.fullname ||
      !values.email ||
      !values.role ||
      !values.password ||
      !values.confirm_password
    ) {
      setErrors({
        fullname: values.fullname.trim() === "" ? "Please fill in this field" : "",
        lastname: values.lastname.trim() === "" ? "Please fill in this field" : "",
        username: values.username.trim() === "" ? "Please fill in this field" : "",
        email: values.email.trim() === "" ? "Please fill in this field" : "",
        role: values.role.trim() === "" ? "Please fill in this field" : "",
        password: values.password.trim() === "" ? "Please fill in this field" : "",
        confirm_password:
          values.confirm_password.trim() === "" ? "Please fill in this field" : "",
      });
      return;
    }
    if (values.password.length < 8 || values.confirm_password.length < 8) {
      setErrors({
        ...errors,
        email: !isValidEmail(values.email) ? "Please enter a valid email address" : "",
        password:
          values.password.length < 8 ? "Password cannot be less than 8 characters" : "",
        confirm_password:
          values.confirm_password.length < 8
            ? "Password cannot be less than 8 characters"
            : "",
      });
      return;
    }
    if (values.password !== values.confirm_password) {
      setErrors({
        ...errors,
        email: !isValidEmail(values.email) ? "Please enter a valid email address" : "",
        password: "Passwords don't match",
        confirm_password: "Passwords don't match",
      });
      return
    }


    if (!isValidEmail(values.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address',
        confirm_password: "",
      })
      return
    }



    setErrors({
      ...errors,
      confirm_password: "",
    })
    setLoading(true)
    completeSignup()
    console.log((values));
  };

  useEffect(() => {
    setFormError("")
  }, [values])

  return (
    <AuthLayout parentClassname="max-md:items-start">
      <div className="h-screen mt-32 w-[90%] lg:w-[70%] ">
        <h2 className="mb-4 text-4xl text-center font-bold text-[#232323]">Register</h2>
        <div className="w-full center">
          <p className="text-md w-full text-center font-medium text-[#060505] min-[400px]:w-[340px]">
            Register to enjoy the best fastest checkouts and awesome experiences
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center flex-col gap-3 sm:flex-row lg:gap-0">
            <p className="font-semibold text-blue-500">Sign up as</p>
            <CustomSelect
              setValues={setValues}
              options={options}
              setErrors={setErrors}
              value={values.role}
              values={values}
              name="role"
              errors={errors}
              error={errors.role}
              background={'lightblue'}
            />
          </div>
          <CustomInput
            value={values.fullname}
            label={"Fullname"}
            placeholder={"Fullname"}
            type={"text"}
            name={"fullname"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.fullname}
          />
          <CustomInput
            value={values.lastname}
            label={"Lastname"}
            placeholder={"Lastname"}
            type={"text"}
            name={"lastname"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.lastname}
          />
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
          <CustomInput
            value={values.confirm_password}
            label={"Confirm Password"}
            placeholder={"Confirm Password"}
            type={"password"}
            name={"confirm_password"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.confirm_password}
          />

          <p className="text-red-500 mt-2">{formError}</p>

          <div className={"flex items-start gap-2"}>
            <div className="mt-2">
              <div
                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded border-2 text-white shadow duration-300 ${remember ? "bg-blue-500" : "bg-white"}`}
                onClick={() => {
                  setRemember(!remember)
                }}
              >
                <BsCheck className="stroke-1 text-2xl" />
              </div>
            </div>
            <label
              htmlFor="agreeTerms"
              className="label flex text-[15px] cursor-pointer items-center"
            >
              <span className={""}>
                I have read and agree the general
                <Link to={"#"} className="ml-1 font-semibold cursor-pointer underline">
                  Terms & Conditions
                </Link>{" "}
                and the
                <Link to={"#"} className="ml-1 font-semibold cursor-pointer underline">
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
            loading={loading}
            onClick={handleRegistration}
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
