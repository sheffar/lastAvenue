import { FunctionComponent } from "react";

import { Link } from "react-router-dom";
import { AssetsUtils } from "@/utils/AssetsUtils";

export const Wimbledon: FunctionComponent = () => {
  return (
    <section className="relative mt-20">
      <div className="absolute left-10 z-40 flex  h-full cursor-pointer items-center">
        <img
          src={AssetsUtils.icons.arrowWhiteLeft}
          className={"w-20"}
          alt={"arrow left"}
        />
      </div>
      <div className="absolute right-10 z-40 flex  h-full cursor-pointer items-center">
        <img
          src={AssetsUtils.icons.arrowWhiteRight}
          className={"w-20"}
          alt={"arrow right"}
        />
      </div>
      <img
        src={AssetsUtils.images.overlay}
        className={"absolute max-h-[800px] w-full cursor-pointer"}
        alt={"overlay"}
      />
      <img
        src={AssetsUtils.images.wimbledon}
        className={"max-h-[800px] w-full cursor-pointer"}
        alt={"Avenue"}
      />
      <div className="right1/2 absolute top-0 z-20 flex h-full w-full flex-col items-center justify-center text-white">
        <div className="text-4xl">{"Visit our Avenue"}</div>
        <div className="mt-12 text-8xl">{"Wimbledon"}</div>
        <Link to={""} className="z-40 mt-24 flex items-center gap-4 text-xl">
          {"See Addresses"}{" "}
          <img
            src={AssetsUtils.icons.arrowBoldRight}
            className={"w-8"}
            alt={"arrow left"}
          />
        </Link>
      </div>
    </section>
  );
};
