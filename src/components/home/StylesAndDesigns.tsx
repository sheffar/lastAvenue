import { FunctionComponent } from "react";

import { AssetsUtils } from "@/utils/AssetsUtils";

export const StylesAndDesigns: FunctionComponent = () => {
  return (
    <div className="relative flex h-screen flex-col text-center lg:static">
      <p className="lg:text-[39px]">{"The Last Avenue"}</p>
      <h1 className="my-2 text-xl font-bold lg:my-[57px] lg:text-[95px]">
        {"All styles and Designs"}
      </h1>
      <img
        src={AssetsUtils.images.shopForMenAndWomen}
        className={"hidden max-h-[800px] lg:block"}
        alt={"shop for men and women"}
      />
      <div className="absolute mt-20 block lg:hidden">
        <img src={AssetsUtils.images.forMen} alt={"shop for men"} />
        <img src={AssetsUtils.images.forWomen} className="mt-1" alt={"shop for women"} />
      </div>
    </div>
  );
};
