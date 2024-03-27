import { AssetsUtils } from "@/utils/AssetsUtils";
import { FunctionComponent } from "react";
import { socialIcons } from "./data";

export const FooterMenu: FunctionComponent = () => {
  return (
    <>
      <div className="text-gray-1000 font-header-7 relative mt-20 box-border flex w-full max-w-full flex-row items-start justify-between gap-[20px] bg-gray-100 px-10 py-8 text-left  text-xl lg:flex-wrap 2xl:px-14">
        <div className="flex items-start justify-between gap-20 2xl:gap-40">
          <div className="flex flex-col items-start justify-start gap-[24px_0px]">
            <b className="mq450:text-base relative">{"Company Info"}</b>
            <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
              <div className="relative inline-block h-[23px] cursor-pointer">
                {"About Us"}
              </div>
              <div className="relative inline-block h-[23px] cursor-pointer">
                {"Affliate"}
              </div>
              <div className="relative ">{"Responsible Business"}</div>
              <div className="relative inline-block h-[23px]">{"Careers"}</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px_0px]">
            <b className="mq450:text-base relative">{`Help & Support`}</b>
            <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
              <div className="relative">{"Shipping Info"}</div>
              <div className="relative">{"Delivery"}</div>
              <div className="relative">{"FAQ"}</div>
              <div className="relative">{"Returns"}</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px_0px]">
            <b className="mq450:text-base relative">{"Customer Care"}</b>
            <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
              <div className="relative">{"Contact Us"}</div>
              <div className="relative">{"Payment Methods"}</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px_0px]">
            <b className="mq450:text-base relative">{"Legal"}</b>
            <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
              <div className="relative">{"Terms and Conditions"}</div>
              <div className="relative">{"Privacy policy"}</div>
              <div className="relative">{"Cookie Policy"}</div>
            </div>
          </div>
        </div>
        <div className="mq450:gap-[52px_0px] flex  max-w-full flex-col items-start justify-start gap-[52px_0px]">
          <div className="flex flex-col items-start justify-start gap-[24px_0px] self-stretch">
            <b className="mq450:text-base relative">{"Signup For The Latest News"}</b>
            <input
              className="font-header-7 h-[59px] w-[25rem] self-stretch border-2 border-black bg-[transparent] px-4 text-base text-gray-800"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
            <div className="flex cursor-pointer flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="relative h-5 w-5 shrink-0 overflow-hidden"
                loading="lazy"
                alt="mail"
                src={AssetsUtils.icons.mail}
              />
              <div className="relative whitespace-nowrap">
                {"thelastavenue@email.com"}
              </div>
            </div>
            <div className="flex cursor-pointer flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="relative h-5 w-5 shrink-0 overflow-hidden"
                loading="lazy"
                alt="phone"
                src={AssetsUtils.icons.phone}
              />
              <div className="relative">{"+44 (0)20 7022 0828"}</div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-10 text-center">
          {socialIcons.map(({ id, icon: name, iconName }) => (
            <img
              key={id}
              className="relative h-5 w-5 shrink-0 cursor-pointer"
              loading="lazy"
              alt={iconName}
              src={name}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#232323] text-[#6C7E99] flex w-full items-center justify-center py-6 text-center">
        {"All rights Reserved"}{" "}
        <img
          className="mx-1.5 h-4 w-4"
          loading="lazy"
          alt={"copyright"}
          src={AssetsUtils.icons.copyright}
        />{" "}
        {" The Last Avenue, 2023"}
      </div>
    </>
  );
};
