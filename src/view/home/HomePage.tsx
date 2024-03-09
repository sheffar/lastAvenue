import { FunctionComponent } from "react";

import { APPNAME } from "@/utils/constants";
import { AuthLayout } from "../layout/AuthLayout";
import { shoes } from "./data";
import { AssetsUtils } from "@/utils/AssetsUtils";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { FooterMenu } from "@/components/home/footer/footer";
import { StylesAndDesigns } from "@/components/home";
import { ShopByCategory } from "@/components/home/ShopByCategory";

export const HomePage: FunctionComponent = () => {
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
          <StylesAndDesigns />
          <ShopByCategory shoes={shoes} />

          <section>
            <div>
              <div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <img
                        src={AssetsUtils.images.avenueImage}
                        className={"max-h-[800px] cursor-pointer"}
                        alt={"showcase"}
                      />
                      <div className="absolute top-10 flex h-full w-1/2 items-center justify-evenly p-8 text-lg font-semibold text-black">
                        <div>
                          The Avenue Collection
                          <p className="py-4 text-3xl font-bold">Vintage</p>
                          <p className="max-w-sm text-sm">
                            The best everyday option in a Super Saver range within a
                            reasonable price. to keep you 100 percent styled. Join us as
                            we walk you through the lanes.
                            <BaseButton containerCLassName="bg-black mt-14 rounded-none w-fit px-20 text-white">
                              Explore
                            </BaseButton>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={AssetsUtils.images.apparelLane}
                        className={"max-h-[800px] cursor-pointer"}
                        alt={"showcase"}
                      />
                      <div className="absolute top-10 flex h-full w-1/2 items-center justify-evenly text-lg font-semibold text-white">
                        Apparel lane
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <img
                        src={AssetsUtils.images.avenueImage}
                        className={"max-h-[800px] cursor-pointer"}
                        alt={"showcase"}
                      />
                      <div className="absolute top-10 flex h-full w-1/2 items-center justify-evenly text-lg font-semibold text-black">
                        <div>
                          The Avenue Collection
                          <p className="text-3xl font-bold">Vintage</p>
                          <p className="">
                            The best everyday option in a Super Saver range within a
                            reasonable price. to keep you 100 percent styled. Join us as
                            we walk you through the lanes.
                            <BaseButton containerCLassName="bg-black mt-10 rounded-none w-fit px-20 text-white">
                              View all
                            </BaseButton>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={AssetsUtils.images.apparelLane}
                        className={"max-h-[800px] cursor-pointer"}
                        alt={"showcase"}
                      />
                      <div className="absolute top-10 flex h-full w-1/2 items-center justify-evenly text-lg font-semibold text-white">
                        Apparel lane
                      </div>
                    </div>
                    <div>
                      <img
                        src={AssetsUtils.images.apparelLane}
                        className={"max-h-[800px] cursor-pointer"}
                        alt={"showcase"}
                      />
                      <div className="absolute top-10 flex h-full w-1/2 items-center justify-evenly text-lg font-semibold text-white">
                        Apparel lane
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div>
                      <img
                        src={AssetsUtils.images.avenueImage}
                        className={"max-h-[800px] cursor-pointer"}
                        alt={"showcase"}
                      />
                      <div className="absolute top-10 flex h-full w-1/2 items-center justify-evenly text-lg font-semibold text-black">
                        <div>
                          The Avenue Collection
                          <p className="text-3xl font-bold">Vintage</p>
                          <p className="">
                            The best everyday option in a Super Saver range within a
                            reasonable price. to keep you 100 percent styled. Join us as
                            we walk you through the lanes.
                            <BaseButton containerCLassName="bg-black mt-10 rounded-none w-fit px-20 text-white">
                              View all
                            </BaseButton>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={AssetsUtils.images.apparelLane}
                        className={"max-h-[800px] cursor-pointer"}
                        alt={"showcase"}
                      />
                      <div className="absolute top-10 flex h-full w-1/2 items-center justify-evenly text-lg font-semibold text-white">
                        Apparel lane
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mt-20">
            <img
              src={AssetsUtils.images.wimbledon}
              className={"max-h-[800px] cursor-pointer"}
              alt={"showcase"}
            />
            <div className="right1/2 absolute top-0 z-20 flex h-full w-full flex-col items-center justify-center text-white">
              Visit our Avenue
              <div>Wimbledon</div>
              <div>See Addresses</div>
            </div>
          </section>
          <FooterMenu />
        </div>
      </div>
    </AuthLayout>
  );
};
