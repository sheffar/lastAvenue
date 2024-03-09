import { FunctionComponent } from "react";

import { APPNAME } from "@/utils/constants";
import { AuthLayout } from "../layout/AuthLayout";
import { shoes } from "./data";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { FooterMenu } from "@/components/home/footer/footer";
import { AvenueCollection, StylesAndDesigns, Wimbledon } from "@/components/home";
import { ShopByCategory } from "@/components/home/ShopByCategory";

export const HomePage: FunctionComponent = () => {
  document.title = `Home Page | ${APPNAME}`;

  return (
    <AuthLayout
      authNavParentClassName="flex-row-reverse"
      authPages={false}
      parentClassname="max-md:items-start relative lg:w-full scrollbar-hide"
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
            className={`relative hidden h-full px-24  py-7 max-[1050px]:px-[12px] lg:block lg:w-full `}
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
