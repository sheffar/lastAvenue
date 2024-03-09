import { FunctionComponent } from "react";

import { AssetsUtils } from "@/utils/AssetsUtils";
import { BaseButton } from "../ui/buttons/BaseButton";

export const AvenueCollection: FunctionComponent = () => {
  return (
    <section>
      <div className="relative my-4">
        <div className="grid grid-cols-2 gap-4">
          <img src={AssetsUtils.images.avenueImage} alt={"showcase"} />
          <div className="absolute left-[4.6rem] top-44 flex h-full w-1/2 items-center p-8 text-lg font-semibold text-black xl:left-[8.5rem] 2xl:top-60">
            <BaseButton containerCLassName="bg-black mt-14 rounded-none w-fit px-20 text-white">
              {"Explore"}
            </BaseButton>
          </div>
          <img src={AssetsUtils.images.apparelLane} alt={"showcase"} />
        </div>
      </div>
      <div className="relative">
        <div className="my-4 grid grid-cols-3 gap-4">
          <img
            src={AssetsUtils.images.fifthAvenue}
            className={"max-h-[800px] cursor-pointer"}
            alt={"showcase"}
          />
          <img
            src={AssetsUtils.images.jordan}
            className={"max-h-[800px] cursor-pointer"}
            alt={"showcase"}
          />
          <img
            src={AssetsUtils.images.daVillage}
            className={"max-h-[800px]"}
            alt={"showcase"}
          />
        </div>
      </div>
      <div className="relative my-4">
        <img src={AssetsUtils.images.seventhAndEightAvenueCollection} alt={"showcase"} />
      </div>
    </section>
  );
};
