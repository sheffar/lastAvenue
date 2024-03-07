import { APPNAME } from "@/utils/constants";
import { AuthLayout } from "../layout/AuthLayout";
import { AssetsUtils } from "@/utils/AssetsUtils";

export const HomePage = () => {
  document.title = `Home Page | ${APPNAME}`;

  return (
    <AuthLayout
      authNavParentClassName="flex-row-reverse"
      authPages={false}
      parentClassname="max-md:items-start relative lg:w-full "
    >
      <div
        className="bg absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${AssetsUtils.images.homePageShowCaseImage})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className={`relative hidden h-full px-24  py-7 max-[1050px]:px-[12px] lg:block lg:w-full `}
        >
          <div className="text-center">
            <p className="text-[39px]">The Last Avenue</p>
            <h1 className="text-[95px] font-bold">All styles and Designs</h1>
          </div>
          <div className="relative">
            <img
              src={AssetsUtils.images.manAndWomanImage}
              className={"max-h-[800px] cursor-pointer"}
              alt={"showcase"}
            />
            <div className="absolute top-10 flex h-full w-full items-center justify-evenly text-lg font-semibold text-white">
              <p>Shop Men</p>
              <p>Shop Women</p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
