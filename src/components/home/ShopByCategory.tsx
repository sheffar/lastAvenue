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
    <section className="flex flex-col items-center py-16 text-center">
      <h3 className="text-[39px] font-bold">{"Shop By Category"}</h3>
      <nav className="py-10">
        <ul className="flex items-start gap-8">
          <li className="cursor-pointer text-xl text-gray-500">{"For Woman"}</li>
          <li className="cursor-pointer border-b-2 border-black pb-2 text-xl">
            {"For Men"}
          </li>
        </ul>
      </nav>
      <Tab.Group>
        <Tab.List className="-mt-2 flex items-start gap-2 text-lg">
          {shopByCategoryNavData.map(({ id, name }) => (
            <Tab
              key={id}
              className={`cursor-pointer border  transition duration-300 hover:bg-gray-100
              `}
            >
              {({ selected }) => (
                <button
                  className={`px-6 py-2 ${selected ? "h-full bg-gray-100" : ""}
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
          <div className="mt-36  flex w-[70rem] items-center  gap-32">
            {shoes.map(({ id, shoe, name, profit, loss }) => {
              return (
                <div key={id}>
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
          <div className="absolute -left-20 top-0 flex h-full items-start">
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
          <div className="absolute -right-20 top-0 flex h-full items-start">
            <button onClick={scrollPrev}>
              <img
                src={AssetsUtils.icons.arrowLeft}
                alt="arrow left"
                className="mt-44 w-20 min-w-5 max-w-5 rotate-180 cursor-pointer"
              />
            </button>
          </div>
        )}
      </section>
    </section>
  );
};
