import { BaseButton } from "@/components/ui/buttons/BaseButton";
import SocialsLogin from "@/components/ui/buttons/SocialsLogin";
import { SelectInput } from "@/components/ui/data-inputs/select-input";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { APPNAME } from "@/utils/constants";
import { RouterConstantUtil } from "@/utils/constants/RouterConstantUtils";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import { SignupURL } from "@/services/urls/urls";
import axios from "axios";

export const RegistrationView = () => {
  document.title = `Register | ${APPNAME}`;

  const navigate = useNavigate();
 


  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  setConfirmPassword('')
  setRole('')

  const [fullnameError, setFullnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [loading, setLoading] = useState(false)

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError('');
  };
  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
    setFullnameError('');
  };
  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
    setLastnameError('');
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
    setFullnameError('');
  };



  const handleSubmit = async () => {
    roleError
    console.log(loading);
    navigate('/')

    if (!email || !password || !role || !fullname || !lastname) {
      setEmailError(email ? '' : 'Please fill in your email address')
      setFullnameError(fullname ? '' : 'Please fill in your firstname')
      setLastnameError(lastname ? '' : 'Please fill in your lastname')
      setRoleError(role ? '' : 'Please select from the dropdown')
      setPasswordError(role ? '' : 'Please input a password')
      setConfirmPasswordError(role ? '' : 'Please input a password')
      return
    }

    if (!isValidEmail(email)) {
      setEmailError('Please fill in a valid email address')
      return
    }

    if (password.trim().length < 8 || confirmPassword.trim().length < 8) {
      setPasswordError(password.trim().length < 8 ? 'Password cannot be less than 8 character' : '')
      setConfirmPasswordError(confirmPassword.trim().length < 8 ? 'Password cannot be less than 8 character' : '')
      return
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords dont match')
      setPasswordError('Passwords dont match')
      return
    }



    try {
      const response = await axios.post(SignupURL, { email, fullname, lastname, role, password });
      console.log(response);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <AuthLayout parentClassname="max-md:items-start">
      <div className="flex h-auto w-[90%] flex-col items-center justify-center pb-12 lg:max-w-md lg:pt-48">
        <h2 className="mb-4 text-4xl font-bold text-[#232323]">Register</h2>
        <p className="text-md text-center font-medium text-[#060505] min-[400px]:w-[340px]">
          Register to enjoy the best fastest checkouts and awesome experiences
        </p>
        <form className="mt-6 space-y-4">
          <SelectInput
            options={["Buyer", "Seller"]}
            defaultValue="-- --"
            label="Sign up as a"
            labelClassname="font-medium text-[16px] text-[#0F60FF]"
            containerClassname="flex flex-row w-full items-center justify-between"
            selectClassName="w-2/4 bg-[#E9E9E9E9]"
          />

          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Email Address"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your email"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Fullname"
            value={fullname}
            onChange={handleFullnameChange}
            error={fullnameError}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your fullname"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Lastname"
            value={lastname}
            onChange={handleLastnameChange}
            error={lastnameError}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Enter your fullname"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            type="text"
            labelClassName="text-medium text-[16px]"
            placeholder="Password"
          />
          <BaseInput
            inputClassName="border-none text-[#232323] px-3 font-bold text-[16px]"
            inputContainerClassName="h-[50px] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={confirmPasswordError}
            type="text"
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
            onClick={handleSubmit}
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
