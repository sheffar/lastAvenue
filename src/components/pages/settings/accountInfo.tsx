import { Avatar } from "@/components/ui/avatar";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import CustomInput from "@/components/ui/data-inputs/CustomInput";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { motion } from 'framer-motion';
import { useState } from "react";

export const AccountInfo = () => {

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    country: '',
    postal_code: '',
    state: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    phone: "",
    country: '',
    postal_code: '',
    state: '',
    address: '',
  });







  const handleRegistration = () => {
    if (
      !values.fullname ||
      !values.email ||
      !values.phone ||
      !values.country ||
      !values.address ||
      !values.state ||
      !values.postal_code
    ) {
      setErrors({
        fullname: values.fullname.trim() === "" ? "Please fill in this field" : "",
        email: values.email.trim() === "" ? "Please fill in this field" : "",
        phone: values.phone.trim() === "" ? "Please fill in this field" : "",
        address: values.address.trim() === "" ? "Please fill in this field" : "",
        postal_code: values.postal_code.trim() === "" ? "Please fill in this field" : "",
        country: values.country.trim() === "" ? "Please fill in this field" : "",
        state: values.state.trim() === "" ? "Please fill in this field" : "",
      });
      return;
    }


  };




















  return (
    <motion.div
      initial={{ opacity: 0, x: 1100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="mt-8 flex flex-col items-start pb-48"
    >
      <Avatar
        name="Hiko Francis"
        wrapperClassName="cursor-pointer select-none"
        img={AssetsUtils.images.andrea}
        textClassName="font-medium text-lg text-[#232323]"
        imageClassName="w-[80px] h-[80px] rounded-full border-[3px] border-[#D3D3D3]"
        avatarTextContainerClassName="flex flex-col items-start"
      >
        <p className="text-md] cursor-pointer font-medium text-[#606060]">
          Hikofrancis@gmail.com
        </p>
      </Avatar>
      <div className="mt-6 flex w-full flex-col gap-3">
        <div className="flex w-full flex-col gap-5">
          <p className="text-md font-semibold w-full border-b-[3px] border-b-[#D9D9D9] pb-1 font-sans text-[#232323]">
            Personal Information
          </p>
          <CustomInput
            value={values.email}
            label={"Email Address"}
            placeholder={"Enter your email address"}
            type={"text"}
            name={"email"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.email}
          />
          <CustomInput
            value={values.fullname}
            label={"Fullname"}
            placeholder={"Enter your fullname"}
            type={"text"}
            name={"fullname"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.fullname}
          />
          <CustomInput
            value={values.phone}
            label={"Phone Number"}
            placeholder={"Enter your phone number"}
            type={"text"}
            name={"phone"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.phone}
          />


        </div>
        <div className="mt-4 flex flex-col gap-3">
          <p className="text-md w-full border-b-[3px] border-b-[#D9D9D9] pb-1 font-sans font-semibold text-[#232323]">
            Address
          </p>
          <div className="grid w-full grid-cols-2 gap-5">
            <CustomInput
              value={values.country}
              label={"Country"}
              placeholder={"Enter your country"}
              type={"text"}
              name={"country"}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              error={errors.country}
            />
            <CustomInput
              value={values.state}
              label={"State"}
              placeholder={"Enter your state"}
              type={"text"}
              name={"state"}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              error={errors.state}
            />
            <CustomInput
              value={values.postal_code}
              label={"Postal Code"}
              placeholder={"Enter your postal code"}
              type={"text"}
              name={"postal_code"}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              error={errors.postal_code}
            />


            <CustomInput
              value={values.address}
              label={"Home address"}
              placeholder={"Enter your home address"}
              type={"text"}
              name={"address"}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              error={errors.address}
            />

          </div>
        </div>
        <div className="flex flex-col justify-center gap-7 sm:flex-row sm:justify-between">
          <BaseButton
          loading={false}
            title="Deactivate Account"
            containerCLassName="py-0 mt-6 h-auto rounded-[8px] mr-auto ml-8 p-0 bg-none text-[#D9182B] font-sans font-bold text-sm"
          />
          <BaseButton
          loading={false}
            title="Save Changes"
            onClick={handleRegistration}
            containerCLassName="py-[23px] mt-6 h-[65px] rounded-[8px] mr-auto m-0 sm:ml-auto px-[48px] bg-[#232323] text-white font-sans font-bold text-sm"
          />
        </div>
      </div>
    </motion.div>
  );
}
