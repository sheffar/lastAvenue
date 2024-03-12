import { Avatar } from "@/components/ui/avatar";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { motion } from 'framer-motion';

export const AccountInfo = () => {
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
          <div className="flex w-full flex-col gap-3">
            <p className="text-md w-full border-b-[3px] border-b-[#D9D9D9] pb-1 font-sans font-medium text-[#232323]">
              Personal Information
            </p>
            <BaseInput
              containerClassname="mt-3"
              inputClassName="border-none text-[#606060] px-3 font-medium text-md"
              inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
              label="Email Address"
              labelClassName="font-normal font-sans text-[#232323] text-md"
              placeholder="Enter your email"
              type="email"
            />
            <BaseInput
              containerClassname="mt-3"
              inputClassName="border-none text-[#606060] px-3 font-medium text-md"
              inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
              label="Full Name"
              labelClassName="font-normal font-sans text-[#232323] text-md"
              placeholder="Enter your Full name"
            />
            <BaseInput
              containerClassname="mt-3"
              inputClassName="border-none text-[#606060] px-3 font-medium text-md"
              inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
              label="Phone Number"
              labelClassName="font-normal font-sans text-[#232323] text-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-md w-full border-b-[3px] border-b-[#D9D9D9] pb-1 font-sans font-medium text-[#232323]">
              Address
            </p>
            <div className="grid w-full grid-cols-2  gap-x-4 gap-y-3">
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
                label="Country"
                labelClassName="font-normal font-sans text-[#232323] text-md"
                placeholder="Enter your country"
              />
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
                label="State"
                labelClassName="font-normal font-sans text-[#232323] text-md"
                placeholder="Enter your Full state"
              />
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
                label="Postal Code"
                labelClassName="font-normal font-sans text-[#232323] text-md"
                placeholder="Enter your Postal Code"
              />
              <BaseInput
                containerClassname="mt-3"
                inputClassName="border-none text-[#606060] px-3 font-medium text-md"
                inputContainerClassName="h-[60px] bg-[#E9E9E9] border-2 rounded-[10px] border-[#E9E9E9] pl-1 pr-0"
                labelClassName="font-normal font-sans text-[#232323] text-md"
                label="Home Address"
                placeholder="Enter your home address"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-7 sm:flex-row sm:justify-between">
            <BaseButton
              title="Deactivate Account"
              containerCLassName="py-0 mt-6 h-auto rounded-[8px] mr-auto ml-8 p-0 bg-none text-[#D9182B] font-sans font-bold text-sm"
            />
            <BaseButton
              title="Save Changes"
              containerCLassName="py-[23px] mt-6 h-[65px] rounded-[8px] mr-auto m-0 sm:ml-auto px-[48px] bg-[#232323] text-white font-sans font-bold text-sm"
            />
          </div>
        </div>
      </motion.div>
    );
}
 