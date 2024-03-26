import BulletIcon from "@/components/icons/BulletIcon";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import ToggleSwitch from "@/components/ui/buttons/ToggleSwitch";
import CustomInput from "@/components/ui/data-inputs/CustomInput";
import { motion } from "framer-motion";
import { useState } from "react";

export const Securuty = () => {
  const [values, setValues] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  })
  const [errors, setErrors] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  })
  return (
    <motion.div
      initial={{ opacity: 0, x: 1100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="mt-8 flex flex-col items-start p-4 md:p-8"
    >
      <div className="flex w-full items-center justify-between">
        <div className="max-sm:w-[60%] py-2 md:w-[60%]">
          <h3 className="text-md font-sans font-semibold text-[#232323]">
            Two-Factor Authentication
          </h3>
          <p className="text-base text-[#606060]">
            Add extra security to your account. Together with your password, you'll have
            to add a unique code
          </p>
        </div>

        <ToggleSwitch />
      </div>
      <br />
      <div className="flex w-full items-center justify-between">
        <div className="py-2 max-sm:w-[60%]">
          <h3 className="text-md font-sans font-semibold text-[#232323]">
            Third-party app Authentication
          </h3>
          <p className="text-base text-[#606060]">
            Allow sign-in authentication from external apps like Google, Facebook,
            Twitter. This can be turned off.
          </p>
        </div>

        <div className="">
          <ToggleSwitch />
        </div>
      </div>

      <div>
        <h3 className="text-md mt-4 border-b-[2px] py-2 font-sans font-medium text-[#232323]">
          Change Password
        </h3>

        <div>
          <form className="mt-4">
            <CustomInput
              value={values.current_password}
              label={"Current Password"}
              placeholder="Enter your Current password"
              type={"password"}
              name={"current_password"}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              error={errors.current_password}
            />
            <br />
            <CustomInput
              value={values.new_password}
              label={"New Password"}
              placeholder="Enter your New password"
              type={"password"}
              name={"new_password"}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              error={errors.new_password}
            />
            <br />
            <CustomInput
              value={values.confirm_password}
              label={"Confirm Password"}
              placeholder="Confirm your password"
              type={"password"}
              name={"confirm_password"}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              error={errors.confirm_password}
            />
            
          </form>
        </div>

        {/* Rules For Password */}
        <div className="my-7 rounded-[15px] bg-[#E9E7FDCC] p-5">
          <h3 className="py-2 font-sans font-semibold text-[#232323]">
            Rules for passwords
          </h3>
          <div className="font-sans text-sm font-normal text-[#606060]">
            <p className="">
              To create a new password, you must meet the following requirements.
            </p>

            <div className="grid max-w-lg gap-x-4  gap-y-3 pt-5 text-sm md:grid-cols-2">
              <div className="flex w-max items-center gap-4">
                <BulletIcon />
                <span>Minimum 8 characters</span>
              </div>
              <div className="flex w-max items-center gap-4">
                <BulletIcon />
                <span>At least one Number</span>
              </div>
              <div className="flex w-max items-center gap-4">
                <BulletIcon />
                <span>At least one special Character</span>
              </div>
              <div className="flex w-max items-center gap-4">
                <BulletIcon />
                <span>Must be different from the previous</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Account */}

        <div className="flex items-center justify-between py-8">
          <div>
            <h3 className="text-md font-sans font-bold text-[#232323]">Delete Account</h3>
            <p className="text-sm text-[#606060]">
              This will delete your account. Your account will be permanently deleted
            </p>
          </div>
          <button className="text-md fomt-semibold px-6 font-sans text-red-500">
            Delete&nbsp;Account
          </button>
        </div>
      </div>
      <BaseButton
        title="Save Changes"
        loading={false}
        containerCLassName="w-fit py-[23px] mt-8 h-[65px] rounded-[8px] ml-auto px-[48px] bg-[#232323] text-white font-sans font-bold text-sm"
      />
    </motion.div>
  );
};
