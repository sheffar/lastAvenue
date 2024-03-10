import { FunctionComponent } from "react";

import { APPNAME } from "@/utils/constants";
import { AuthLayout } from "../layout/AuthLayout";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { shoes } from "./data";
import {
  AvenueCollection,
  ShopByCategory,
  StylesAndDesigns,
  Wimbledon,
} from "@/components/home";
import { FooterMenu } from "@/router/layout/footer/Footer";

export const HomePage: FunctionComponent = () => {
  document.title = `Home Page | ${APPNAME}`;

  return (
    <AuthLayout
      authNavParentClassName="flex-row-reverse"
      authPages={false}
      parentClassname="max-md:items-start h-48 md:h-52 lg:h-screen relative lg:w-full scrollbar-hide"
    >
      <div
        className="bg absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${AssetsUtils.images.homePageShowCaseImage})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div>
          <div
            className={`fixed h-full w-full px-24 py-4  max-[1050px]:px-[12px] sm:py-4 lg:relative lg:block lg:py-7`}
          >
            <StylesAndDesigns />
            <ShopByCategory shoes={shoes} />
            <AvenueCollection />
          </div>
          <Wimbledon />
          <FooterMenu />
        </div>
      </div>
    </AuthLayout>
  );
};
