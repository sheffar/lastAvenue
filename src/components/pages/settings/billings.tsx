import { BsPlus } from "react-icons/bs";
import Input from "./Input";
import { motion } from "framer-motion";

export default function Billing() {
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
                <Input
                  placeholder={"Mike Francis"}
                  normal={true}
                  icon={""}
                  label={"Name on Card"}
                />
              </div>
              <div className="">
                <Input
                  label={"Expiry Date"}
                  normal={true}
                  icon={""}
                  placeholder={"04/12/27"}
                />
              </div>
            </div>
            <div className="mt-3  grid gap-5 p-0 lg:grid-cols-[1fr_2.5fr_1fr] lg:p-4">
              <div className=""></div>
              <div className="">
                <Input
                  label={"Card Number"}
                  icon={""}
                  normal={true}
                  placeholder={"1234567891234567"}
                />
              </div>
              <div className="">
                <Input
                  label={"Expiry Date"}
                  icon={""}
                  normal={true}
                  placeholder={"..."}
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
              <Input
                placeholder={"johndoe@gmail.com"}
                normal={false}
                icon={<BsPlus />}
                label={"Add another"}
              />
            </div>
          </div>
          <div className="mt-5 border-b-2 pb-1">
            <p className="text-base font-semibold">Address</p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8">
            <Input
              placeholder={"United States"}
              normal={true}
              icon={""}
              label={"Country"}
            />
            <Input
              placeholder={"California"}
              normal={true}
              icon={""}
              label={"State/Province"}
            />
            <Input placeholder={"101121"} normal={true} icon={""} label={"Postal Code"} />
            <Input
              placeholder={"1 Hacker way, Menlo Park California"}
              normal={true}
              icon={""}
              label={"Home Address"}
            />
          </div>
          <div className="mt-14 flex items-center justify-between">
            <p className="cursor-pointer text-xs text-red-500 lg:text-base">
              Activate Account
            </p>
            <button className="rounded-md bg-black px-4 py-3 font-semibold text-white shadow-md">
              Save Changes
            </button>
          </div>
        </div>
      </motion.div>
  );
}
