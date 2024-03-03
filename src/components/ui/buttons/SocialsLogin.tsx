// import { ThemeUtil } from "@/util/ThemeUtil";

import { AssetsUtils } from "@/utils/AssetsUtils";

const SocialsLogin = () => {
  return (
    <>
      <p
        className={
          "text-[#606060] text-center font-medium my-3 text-[20px] "
        }
      >
        Or Sign in with
      </p>
      <div className={"flex items-center justify-center gap-5"}>
        <img src={AssetsUtils.icons.appleIcon} className={"social-icon"} alt={"apple"} />
        <img
          src={AssetsUtils.icons.googleIcon}
          className={"social-icon"}
          alt={"google"}
        />
        <img
          src={AssetsUtils.icons.linkedinIcon}
          className={"social-icon"}
          alt={"facebook"}
        />
      </div>
    </>
  );
};

export default SocialsLogin;
