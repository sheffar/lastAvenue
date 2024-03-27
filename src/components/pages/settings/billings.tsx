import { motion } from "framer-motion";
import { useState } from "react";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import Icon from '../../../assets/icons/master.svg'
import { BsPlus } from "react-icons/bs";

type TError = {
  email?: string
  card_name: string
  expiry_date: string
  card_number: string
  country: string
  state: string
  postal_code: string
  address: string
  cvv: string
}
type TValues = {
  email?: string
  card_name: string
  expiry_date: string
  card_number: string
  country: string
  state: string
  postal_code: string
  address: string
  cvv: string
}

export default function Billing() {
  const [values, setValues] = useState<TValues>({
    email: "",
    card_name: "",
    expiry_date: "",
    card_number: "",
    country: "",
    state: "",
    postal_code: "",
    address: "",
    cvv: ""
  })
  const [errors, setErrors] = useState<TError>({
    email: "",
    card_name: "",
    expiry_date: "",
    card_number: "",
    country: "",
    state: "",
    postal_code: "",
    address: "",
    cvv: ""
  })

  const Submit = () => {
    if (!values.card_name || !values.expiry_date || !values.card_number || !values.country || !values.state || !values.postal_code || !values.address || !values.cvv) {
      setErrors({
        card_name: values.card_name.trim() === "" ? "Please fill in this field" : "",
        card_number: values.card_number.trim() === "" ? "Please fill in this field" : "",
        expiry_date: values.expiry_date.trim() === "" ? "Please fill in this field" : "",
        country: values.country.trim() === "" ? "Please fill in this field" : "",
        state: values.state.trim() === "" ? "Please fill in this field" : "",
        postal_code: values.postal_code.trim() === "" ? "Please fill in this field" : "",
        address: values.address.trim() === "" ? "Please fill in this field" : "",
        cvv: values.cvv.trim() === "" ? "Please fill in this field" : "",
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 1100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-black"
    >
      <div className=" rounded-lg bg-white p-4">
        <p className="mt-5 text-lg font-semibold">Payment Method</p>
        <p className="mt-1 border-b-2 pb-2">Update your billing details and address</p>
        <div className="border-b-2 pb-4 ">
          <div className="mt-3 grid gap-5 p-0 lg:grid-cols-[1fr_2.5fr_1fr] lg:p-4">
            <div className=" w-full">
              <p className="font-semibold">Card Details</p>
            </div>
            <div className="">
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
                label="Name on Card"
                labelClassName="font-normal font-sans text-[#232323] text-md"
                placeholder="Hiko Francis"
                type="text"
              />
            </div>
            <div className="">
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
                label="Expiry Date"
                labelClassName="font-normal font-sans text-[#232323] text-md"
                placeholder="04/2026"
                type="string"
              />
            </div>
          </div>
          <div className="mt-3  grid gap-5 p-0 lg:grid-cols-[1fr_2.5fr_1fr] lg:p-4">
            <div className=""></div>
            <div className="">
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-2 pr-0"
                label="Card Number"
                labelClassName="font-normal font-sans text-[#232323] text-md"
                placeholder="5776 3412 7896 4352"
                type="text"
                icon={Icon}
              />
            </div>
            <div className="">
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none font-semibold text-2xl text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
                label="CVV"
                showEye={false}
                labelClassName="font-normal font-sans text-[#232323] text-md"
                placeholder="..."
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-0 lg:grid-cols-[1fr_3fr] lg:gap-0 lg:p-2">
          <div className="">
            <p className="text-base font-semibold">Email Address</p>
            <p>Invoices will be sent to this address</p>
          </div>
          <div className="">
            <BaseInput
              containerClassname="mt-3"
              inputClassName="border-none text-[#606060] px-3 font-medium text-md"
              inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
              label=""
              labelClassName="font-normal font-sans text-[#232323] text-md"
              placeholder="Hikofrancis@gmail.com"
              type="email"
            />
            <div className="flex gap-1 mt-2 items-center">
              <BsPlus className="text-xl" />
              <p className="text-base">Add Email</p>
            </div>
          </div>
        </div>
        <div className="mt-5 border-b-2 pb-1">
          <p className="text-base font-semibold">Address</p>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 lg:gap-y-8">
          <BaseInput
            containerClassname="mt-3"
            inputClassName="border-none text-[#606060] px-3 font-medium text-md"
            inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Country"
            labelClassName="font-normal font-sans text-[#232323] text-md"
            placeholder="Ireland"
            type="text"
          />
          <BaseInput
            containerClassname="mt-3"
            inputClassName="border-none text-[#606060] px-3 font-medium text-md"
            inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="State/Provice"
            labelClassName="font-normal font-sans text-[#232323] text-md"
            placeholder="Garristown"
            type="text"
          />
          <BaseInput
            containerClassname="mt-3"
            inputClassName="border-none text-[#606060] px-3 font-medium text-md"
            inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Postal Code"
            labelClassName="font-normal font-sans text-[#232323] text-md"
            placeholder="A42P4YP"
            type="text"
          />
          <BaseInput
            containerClassname="mt-3"
            inputClassName="border-none text-[#606060] px-3 font-medium text-md"
            inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
            label="Home Address"
            labelClassName="font-normal font-sans text-[#232323] text-md"
            placeholder="42, Townplace, Garristown."
            type="text"
          />


        </div>
        <div className="mt-14 flex items-center justify-between">
          <p className="cursor-pointer text-xs text-red-500 lg:text-base">
            Activate Accounts
          </p>
          <BaseButton
            title="Save Changes"
            containerCLassName="py-[23px] mt-6 h-[65px] rounded-[8px] mr-auto m-0 sm:ml-auto px-[48px] bg-[#232323] text-white font-sans font-bold text-sm"
          />
        </div>
      </div>
    </motion.div>
  );
}









































