import { BaseButton } from "@/components/ui/buttons/BaseButton";
import ToggleSwitch from "@/components/ui/buttons/ToggleSwitch";

export const Notifications = () => {
  return (
    <div className="p-4 pt-8 md:px-0">
      <div className="flex flex-col items-start justify-between gap-8 border-b px-0 sm:px-2 md:flex-row md:border-b-0 md:px-4">
        <div className="w-full">
          <h3 className="text-md font-sans font-semibold text-[#232323]">
            Email Notification
          </h3>
          <p className="font-sans text-sm font-normal text-[#606060]">
            Select when you’ll be notified on your mailbox and get mail notifications when
            you’re not active. You can turn this off anytime.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                Buyers Purchase
              </h3>
              <p className="font-sans text-sm text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                When Product is ordered
              </h3>
              <p className="font-sans text-sm font-normal text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                When a product is bookmarked
              </h3>
              <p className="font-sans text-sm font-normal text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                Buyers Visit
              </h3>
              <p className="font-sans text-sm font-normal text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </div>
      <br />
      {/* push notification */}
      <div className="flex flex-col items-start justify-between gap-8 px-0 sm:px-2 md:flex-row md:px-4">
        <div className="w-full">
          <h3 className="text-md font-sans font-semibold text-[#232323]">
            Push Notification
          </h3>
          <p className="font-sans text-sm font-normal text-[#606060]">
            Get notified when buyers visit your product. This helps you know what they
            want and update your products.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                Buyers Purchase
              </h3>
              <p className="font-sans text-sm text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                When Product is ordered
              </h3>
              <p className="font-sans text-sm font-normal text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                When a product is bookmarked
              </h3>
              <p className="font-sans text-sm font-normal text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between gap-8 pb-6 md:justify-end">
            <div>
              <h3 className="text-md font-sans font-semibold text-[#232323]">
                Buyers Visit
              </h3>
              <p className="font-sans text-sm font-normal text-[#606060]">
                Get notified when buyers visit your product. This helps you know what they
                want and update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </div>
      <div className="flex gap-7 flex-col justify-center sm:flex-row sm:justify-between">
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
  );
};
