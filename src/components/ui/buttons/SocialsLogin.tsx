// import { ThemeUtil } from "@/util/ThemeUtil";

import { AssetsUtils } from "@/utils/AssetsUtils";

const SocialsLogin = () => {
  return (
    <div className="flex flex-col gap-1">
      <p
        className={
          "text-[#606060] text-center font-medium text-md "
        }
      >
        Or Sign in with
      </p>
      <div className={"flex items-center justify-center gap-8"}>
        <img src={AssetsUtils.icons.appleIcon} className={"w-[30px] cursor-pointer"} alt={"apple"} />
        <img
          src={AssetsUtils.icons.googleIcon}
          className={"w-[30px] cursor-pointer"}
          alt={"google"}
        />
        <img
          src={AssetsUtils.icons.linkedinIcon}
          className={"w-[30px] cursor-pointer"}
          alt={"facebook"}
        />
      </div>
    </div>
  );
};

export default SocialsLogin;
