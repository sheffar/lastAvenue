import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { Tab } from "@headlessui/react";
import { BaseButton } from "../ui/buttons/BaseButton";
import { AssetsUtils } from "@/utils/AssetsUtils";

type IShoes = {
  id: number;
  name: string;
  shoe: string;
  profit: string;
  loss: string;
};

const shopByCategoryNavData = [
  {
    id: 1,
    name: "T-Shirt",
  },
  {
    id: 2,
    name: "Shirt",
  },
  {
    id: 3,
    name: "Shoes",
  },
  {
    id: 4,
    name: "Watch",
  },
  {
    id: 5,
    name: "T-Shirt",
  },
  {
    id: 6,
    name: "Sunglasses",
  },
];

const tabData = [
  {
    name: "For Women",
  },
  {
    name: "For men",
  },
];

export const ShopByCategory: React.FC<{ shoes: IShoes[] }> = ({ shoes }) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType): void => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 text-center">
      <h3 className="text-[39px] font-bold">{"Shop By Category"}</h3>
      <Tab.Group>
        <Tab.List className="flex items-start justify-center gap-8 py-10 text-center">
          {tabData.map(({ name }) => (
            <Tab key={name} className="">
              {({ selected }) => (
                <button
                  className={`transition duration-300 ${selected ? "cursor-pointer border-b-2 border-black pb-2 text-xl" : "cursor-pointer text-xl text-gray-500"}
                  `}
                >
                  {name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      <Tab.Group>
        <Tab.List className="-mt-2 flex items-start justify-center gap-2 text-lg">
          {shopByCategoryNavData.map(({ id, name }) => (
            <Tab
              key={id}
              className={`cursor-pointer border  transition duration-300 hover:bg-gray-100
              `}
            >
              {({ selected }) => (
                <button
                  className={`transition-300 px-6 py-2 duration-300 focus:border-0 ${selected ? " h-full bg-gray-100 " : ""}
                  `}
                >
                  {name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <section className="relative">
        <div
          ref={emblaRef}
          className="relative flex min-w-full flex-col items-center justify-center overflow-hidden"
        >
          <div className="mt-36  flex  w-full items-center  gap-32">
            {shoes.map(({ id, shoe, name, profit, loss }) => {
              return (
                <div key={id} className="cursor-pointer">
                  <div className="flex h-40 items-center justify-center">
                    <img src={shoe} alt={name} />
                  </div>
                  <p className="mt-20 w-max text-lg font-medium">{name}</p>
                  <div className="text-left">
                    <span className="text-gray-500">${profit}</span> &nbsp;{" "}
                    <span className="text-red-500 ">${loss}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <BaseButton containerCLassName="bg-black mt-12 rounded-none w-fit px-20 text-white">
            {"View All"}
          </BaseButton>
        </div>
        {!nextBtnDisabled && (
          <div className="absolute -left-20 top-0 flex h-full items-start 2xl:-left-10">
            <button onClick={scrollNext}>
              <img
                src={AssetsUtils.icons.arrowLeft}
                alt="arrow left"
                className="w-full max-w-5 cursor-pointer pt-44"
              />
            </button>
          </div>
        )}
        {!prevBtnDisabled && (
          <div className="absolute -right-20 top-0  flex h-full items-start 2xl:-right-10">
            <button onClick={scrollPrev}>
              <img
                src={AssetsUtils.icons.arrowLeft}
                alt="arrow right"
                className="mt-44 w-20 min-w-5 max-w-5 rotate-180 cursor-pointer"
              />
            </button>
          </div>
        )}
      </section>
    </section>
  );
};
