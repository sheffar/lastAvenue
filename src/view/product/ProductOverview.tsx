import { Tab, Tabs } from "@/components/product/Tabs";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import ProductNav from "@/components/ui/navs/ProductNav";
import { FooterMenu } from "@/router/layout/footer/Footer";
import { AssetsUtils } from "@/utils/AssetsUtils";
import React, { useState } from "react";
import { more_from_brand, popular_products } from "./data";
import CustomInput from "@/components/ui/data-inputs/CustomInput";

const ProductOverview = () => {
  const [values, setValues] = useState({
    email: ""
  })
  const [errors, setErrors] = useState({
    email: ""
  })
  return (
    <div className="bg-white text-[#212121]">
      <ProductNav />

      <div className="mx-auto mt-4 box-border items-center justify-around md:flex lg:w-5/6">
        <img
          src={AssetsUtils.images.product.blackLady}
          alt="lady_in_black"
          className="md:w-[43%]"
        />

        <div className="space-y-6 p-4 md:w-[43%]">
          <div className="flex items-center justify-between">
            <p className="text-lg">Coat for Women</p>
            <img src={AssetsUtils.icons.bookmark} alt="bookmark" />
          </div>

          <h2 className="text-2xl font-bold text-[rgba(33,33,33,1)]">
            Black Semi-Formal Coat
          </h2>

          <h3 className="text-[22px] font-bold text-[rgba(255,161,92,1)]">$159</h3>

          <div className="flex items-center justify-between rounded-md bg-[#EFEFEF] px-3 py-4 text-[#8B909A]">
            <p className="text-lg font-medium">Choose perfect size </p>
            <select
              name="size"
              id=""
              className="bg-transparent font-public-sans text-lg font-semibold"
            >
              <option>18</option>
              <option>24</option>
              <option>15</option>
              <option>28</option>
            </select>
          </div>

          <BaseButton
            loading={false}
            hoverScale={1}
            containerCLassName="rounded-md bg-[#212121] text-white font-public-sans text-lg font-semibold"
          >
            Buy
          </BaseButton>

          <p className=" text-xl font-medium text-[#606060]">Available</p>

          <div className="flex flex-col justify-center gap-5 pt-4">
            <p className="text-center text-xl font-medium">Or order via</p>
            <BaseButton
              hoverScale={1}
              loading={false}
              containerCLassName="bg-transparent font-medium border-[#232323] text-xl border-[2.7px] rounded-md py-7 px-4 flex gap-4 justify-start"
            >
              <img src={AssetsUtils.icons.envelope} alt="envlope_icon" />
              <span>Customerservice@TLA.com</span>
            </BaseButton>
            <BaseButton
              hoverScale={1}
              loading={false}

              containerCLassName="bg-transparent font-medium border-[#232323] text-xl border-[2.7px] rounded-md py-7 px-4 flex gap-4 justify-start"
            >
              <img src={AssetsUtils.icons.telephone} alt="envlope_icon" />
              <span>+44 (0)20 7022 0828</span>
            </BaseButton>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 px-12 pt-16 lg:w-10/12">
        <Tabs>
          <Tab label="ITEM INFO">
            <div className="py-4">
              <div className="justify-between gap-20 space-y-6 md:flex md:space-y-0">
                <div>
                  <p className="py-1 text-xl font-bold">Product Details</p>
                  <hr />

                  <ul className="grid list-disc grid-cols-2 gap-2 pl-6 pt-2 text-lg">
                    <li>Regular Fit</li>
                    <li>Model measurement chest 90cm/35.5 inches, height</li>
                    <li>100% Silk</li>
                    <li>Made in Vietnam</li>
                    <li>100% Black</li>
                  </ul>
                </div>
                <div className="md:w-[50%]">
                  <p className="py-1 text-xl font-bold">Product Description</p>
                  <p className="text-lg leading-8">
                    This elegant long-sleeved shirt is made from a luxurious silk jacquard
                    fabric incorporating a Mini Monogram motif. A concealed button placket
                    and simple cuffs give a streamlined look to this clothing piece, while
                    metallic buttons add a smart finishing touch.
                  </p>
                </div>
              </div>
            </div>
          </Tab>

          <Tab label="SHIPPING INFO">
            <div className="py-6">
              <div className="justify-between gap-16 space-y-6 md:flex md:space-y-0">
                <div className="flex items-center justify-start gap-4">
                  <img src={AssetsUtils.icons.fedex} alt="fex_icon" />
                  <div>
                    <p className="py-2 text-2xl font-semibold">Fedex Shipping Agency</p>
                    <p className="text-lg">
                      Fedex ia our trusted shipping agency. All shipping fees and
                      additional rates will be particular to stock.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-4">
                  <img src={AssetsUtils.icons.dhl} alt="fex_icon" />
                  <div>
                    <p className="py-2 text-2xl font-semibold">DHL</p>
                    <p className="text-lg">
                      Fedex ia our trusted shipping agency. All shipping fees and
                      additional rates will be particular to stock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="TLA PRIVILEGE">
            <div className="py-6">
              <div className="justify-between gap-16 space-y-6 md:flex md:space-y-0">
                <div className="">
                  <p className="py-2 text-2xl font-semibold">Get rewards for shopping.</p>
                  <p className="text-lg">
                    Earn points simplify by joining TLA and picking your favorite stocks
                    off the collections. This points you can use to;
                  </p>
                  <ul className="list-disc pl-5 pt-4 text-lg leading-9">
                    <li>Purchase Items</li>
                    <li>Get 20% off for 3 months</li>
                    <li>Enjoy free shipping</li>
                  </ul>
                </div>
                <div className="">
                  <p className="py-2 text-2xl font-semibold">How to earn TLA points</p>
                  <hr className="border-[#B6B6B6]" />

                  <ul className="list-disc pl-5 pt-3 text-lg leading-10">
                    <li>Join TLA</li>
                    <li>Purchase Upto $150 worth item for 5 points</li>
                    <li>Purchase up to $4000 for 30 points and 1 months free shipping</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="SEND A GIFT">
            <div className="py-6">
              <div className="justify-between gap-28 space-y-6 md:flex md:space-y-0">
                <div className="w-[50%]">
                  <p className="py-2 text-2xl font-semibold">Gift your loved one today</p>
                  <p className="text-lg">
                    You can gift your loved this item. Simply click the button, insert the
                    recipient's information and a personalized message. The receipient
                    will receive the message, can choose to accept or decline the gift,
                    and also the color/size.
                  </p>
                </div>
                <div className="w-[50%]">
                  <p className="py-2 text-2xl font-semibold">Send as a Gift</p>

                  <div className="relative pt-6">
                    <img
                      src={AssetsUtils.icons.gift}
                      alt="gift_icon"
                      className="absolute bottom-[13px] left-4"
                    />
                    <CustomInput
                      value={values.email}
                      label={"Email"}
                      placeholder={"Email"}
                      type={"email"}
                      name={"email"}
                      values={values}
                      setValues={setValues}
                      errors={errors}
                      setErrors={setErrors}
                      error={errors.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>

      <div className="mx-auto mt-20 px-12 pt-2 lg:w-5/6">
        <div className="justify-between gap-10 space-y-6 border-t-2 border-t-[#B6B6B6] pt-4 md:flex md:space-y-0 lg:gap-16">
          <div className="flex items-center justify-start gap-6">
            <img src={AssetsUtils.icons.shipping} alt="shipping_icon" />
            <div>
              <p className="py-2 text-2xl font-semibold">Fedex Shipping Agency</p>
              <p className="text-lg">
                Fedex ia our trusted shipping agency. All shipping fees and additional
                rates will be particular to stock.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-6">
            <img src={AssetsUtils.icons.packaging} alt="shipping_icon" />
            <div>
              <p className="py-2 text-2xl font-semibold">Packaging</p>
              <p className="text-lg">
                All stocks come with contemporary and Eco-friendly packaging to suit the
                style.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 p-8">
        {/* You may also like section */}

        <section>
          <div className="mx-auto w-10/12">
            <p className="pb-2 text-2xl font-semibold leading-10">You may also like</p>
            <p className="pt-2 text-lg">Based on popular searches</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {popular_products.map((product) => (
              <React.Fragment key={product.id}>
                <div className="flex h-full flex-col items-center gap-1 pt-6">
                  <img src={product.img} alt="" className="h-[490px]" />
                  <p className="font-bold">{product.title}</p>
                  <p>{product.price}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* More from this brand */}
        <section>
          <div className="mx-auto w-10/12 py-12">
            <p className="pb-2 text-2xl font-semibold leading-10">More from this brand</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {more_from_brand.map((product) => (
              <React.Fragment key={product.id}>
                <div className="flex h-full flex-col items-center gap-1 pt-6">
                  <img src={product.img} alt="" className="h-[490px]" />
                  <p className="font-bold">{product.title}</p>
                  <p>{product.price}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>

      <FooterMenu />
    </div>
  );
};

export default ProductOverview;
