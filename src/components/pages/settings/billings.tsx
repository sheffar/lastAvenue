import { motion } from "framer-motion";
import { useState } from "react";
import CustomInput from "@/components/ui/data-inputs/CustomInput";

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
              <CustomInput
                value={values.card_name}
                label={"Card Name"}
                placeholder={"Enter your Card Name"}
                type={"text"}
                name={"card_name"}
                values={values}
                setValues={setValues}
                errors={errors}
                setErrors={setErrors}
                error={errors.card_name}
              />
            </div>
            <div className="">

              <CustomInput
                value={values.expiry_date}
                label={"Expiry Date"}
                placeholder={"04/12/27"}
                type={"text"}
                name={"expiry_date"}
                values={values}
                setValues={setValues}
                errors={errors}
                setErrors={setErrors}
                error={errors.expiry_date}
              />
            </div>
          </div>
          <div className="mt-3  grid gap-5 p-0 lg:grid-cols-[1fr_2.5fr_1fr] lg:p-4">
            <div className=""></div>
            <div className="">
              <CustomInput
                value={values.card_number}
                label={"Card Number"}
                placeholder={"1234567891234567"}
                type={"text"}
                name={"card_number"}
                values={values}
                setValues={setValues}
                errors={errors}
                setErrors={setErrors}
                error={errors.card_number}
              />
            </div>
            <div className="">
              <CustomInput
                value={values.cvv}
                label={"CVV"}
                placeholder={"..."}
                type={"text"}
                name={"cvv"}
                values={values}
                setValues={setValues}
                errors={errors}
                setErrors={setErrors}
                error={errors.cvv}
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
          </div>
        </div>
        <div className="mt-5 border-b-2 pb-1">
          <p className="text-base font-semibold">Address</p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8">
          <CustomInput
            value={values.country}
            label={"Add Another"}
            placeholder={"United States"}
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
            label={"State/Province"}
            placeholder={"California"}
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
            placeholder={"110111"}
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
            label={"Home Address"}
            placeholder={"1 Hacker Way, Menlo Park, CA."}
            type={"text"}
            name={"address"}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            error={errors.address}
          />


        </div>
        <div className="mt-14 flex items-center justify-between">
          <p className="cursor-pointer text-xs text-red-500 lg:text-base">
            Activate Account
          </p>
          <button onClick={Submit} className="rounded-md bg-black px-4 py-3 font-semibold text-white shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  );
}
