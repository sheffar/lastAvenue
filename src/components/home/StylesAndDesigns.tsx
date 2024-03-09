import { FunctionComponent } from "react";

import { AssetsUtils } from "@/utils/AssetsUtils";

export const StylesAndDesigns: FunctionComponent = () => {
  return (
    <div className="text-center">
      <p className="text-[39px]">{"The Last Avenue"}</p>
      <h1 className="text-[95px] font-bold">{"All styles and Designs"}</h1>
      <img
        src={AssetsUtils.images.shopForMenAndWomen}
        className={"max-h-[800px]"}
        alt={"shop for men and women"}
      />
    </div>
  );
};
