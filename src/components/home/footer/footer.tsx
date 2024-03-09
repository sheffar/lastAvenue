import { FunctionComponent } from "react";
// import { TextField } from "@mui/material";

export const FooterMenu: FunctionComponent = () => {
  return (
    <div className="text-gray-1000 font-header-7 relative box-border flex w-[1620px] max-w-full flex-row items-start justify-between gap-[20px] px-5 py-0 text-left text-xl lg:flex-wrap">
      <div className="mq825:flex-wrap flex w-[658px] max-w-full flex-row items-start justify-between">
        <div className="flex flex-col items-start justify-start gap-[24px_0px]">
          <b className="mq450:text-base relative">Company Info</b>
          <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
            <div className="relative inline-block h-[23px]">About Us</div>
            <div className="relative inline-block h-[23px]">Affliate</div>
            <div className="relative">Responsible Business</div>
            <div className="relative inline-block h-[23px]">Careers</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px_0px]">
          <b className="mq450:text-base relative">{`Help & Support`}</b>
          <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
            <div className="relative">Shipping Info</div>
            <div className="relative">Delivery</div>
            <div className="relative">FAQ</div>
            <div className="relative">Returns</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px_0px]">
          <b className="mq450:text-base relative">Customer Care</b>
          <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
            <div className="relative">Contact Us</div>
            <div className="relative">Payment Methods</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px_0px]">
          <b className="mq450:text-base relative">Legal</b>
          <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
            <div className="relative">Terms and onditions</div>
            <div className="relative">Privacy policy</div>
            <div className="relative">Cookie Policy</div>
          </div>
        </div>
      </div>
      <div className="mq450:gap-[52px_0px] flex w-[388px] max-w-full flex-col items-start justify-start gap-[52px_0px]">
        <div className="flex flex-col items-start justify-start gap-[24px_0px] self-stretch">
          <b className="mq450:text-base relative">Signup For The Latest News</b>
          {/* <TextField
            className="font-header-7 h-[59px] self-stretch bg-[transparent] text-base text-gray-800 [border:none]"
            placeholder="Enter Email"
            variant="outlined"
            InputProps={{
              endAdornment: <img width="14px" height="14px" src="/arrow-1.svg" />,
            }}
            sx={{
              "& fieldset": { borderColor: "#424242" },
              "& .MuiInputBase-root": {
                height: "59px",
                paddingRight: "16px",
                borderRadius: "0px 0px 0px 0px",
              },
              "& .MuiInputBase-input": { color: "#616161" },
            }}
          /> */}
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px_0px] text-base text-gray-800">
          <div className="flex flex-row items-center justify-start gap-[0px_8px]">
            <img
              className="relative h-5 w-5 shrink-0 overflow-hidden"
              loading="lazy"
              alt=""
              src="/mail.svg"
            />
            <div className="relative whitespace-nowrap">thelastavenue@email.com</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px_8px]">
            <img
              className="relative h-5 w-5 shrink-0 overflow-hidden"
              loading="lazy"
              alt=""
              src="/phone.svg"
            />
            <div className="relative"> +44 (0)20 7022 0828</div>
          </div>
        </div>
      </div>
    </div>
  );
};
