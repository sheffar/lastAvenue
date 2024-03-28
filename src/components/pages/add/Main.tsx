import SupplierLayout from "@/view/layout/SupplierLayout";
import { useState } from "react";
import Trash from '../../../assets/icons/trash.svg'
import Plus from '../../../assets/icons/plus.svg'
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import { SelectInput } from "@/components/ui/data-inputs/select-input";
import DragDrop from "./DragDrop";
import { BaseButton } from "@/components/ui/buttons/BaseButton";

export default function Main() {
  const [activeSize, setActiveSize] = useState(0)
  const [activeColor, setActiveColor] = useState(0)

  const handleColorClick = (key: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setActiveColor(key);
    console.log(activeColor);
  };


  return (
    <SupplierLayout title="Add New Product" subtitle="When adding products, make sure to fill in completely all the required details.">
        <div className="block lg:grid bg-white text-black p-5 rounded-lg shadow-md mt-4 gap-7 md:grid-cols-[1.5fr_1fr] lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <div className="">
              <BaseInput title="Product Name" inputClassName={'border-2 text-black border-gray-400'} />
              <p className="text-end text-13">Limit: 30 words</p>
            </div>
            <div className="flex flex-col lg:grid grid-cols-[1.5fr_1fr] gap-5">
              <SelectInput label="Category" selectClassName="border-2 border-gray-400" options={['Shoes', 'Clothes', 'Bags']} />
              <div className="">
                <SelectInput label="Gender" selectClassName="border-2 border-gray-400" options={['Male', 'Female']} />
              </div>
            </div>
            <div className="">
              <SelectInput label="Brand" selectClassName="border-2 border-gray-400" options={['Nike', 'Gucci']} />
            </div>
            <div className="flex flex-col flex-wrap gap-5 lg:flex-row justify-between lg:items-center">
              <p className="">Add Size</p>
              <div className="flex gap-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size, key: number) => (
                  <p key={key} className={`p-3 text-13 border-2 border-gray-400 w-9 h-9 center font-semibold rounded-md  ${activeSize === key ? 'bg-btncolor border-gray-600' : 'border-transparent bg-gray-200'} duration-300 hover:bg-gray-300 cursor-pointer`} >{size}</p>
                ))}
              </div>
              <div className="flex gap-5 lg:gap-3">
                <div className="h-8 lg:h-10 w-8 lg:w-10 center duration-300 hover:border-green-500 rounded-full cursor-pointer border-2 border-gray-400">
                  <img src={Plus} alt="" className="w-4 h-4 " />
                </div>
                <div onClick={() => setActiveSize(5)} className="h-8 lg:h-10 w-8 lg:w-10 center duration-300 hover:border-red-500 rounded-full cursor-pointer border-2 border-gray-400">
                  <img src={Trash} alt="" className="w-4 h-4 " />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-center">
              <p className="">Color Variant</p>
              <div className="flex gap-5 lg:gap-3">
                {[1, 2, 3,].map((size, key: number) => (
                  <div onClick={(e) => handleColorClick(key, e)} key={key} className={`w-8 h-8 lg:h-10 lg:w-10 hover:border-gray-300 rounded-full duration-300 cursor-pointer border-2 border-gray-400 ${key === activeColor ? 'shadow-lg border-black' : 'border-transparent'} ${key === 0 && 'bg-red-500'}  ${key === 1 && 'bg-purple-500'}  ${key === 2 && 'bg-emerald-500'} `}>
                    <p className="hidden">{size}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 lg:h-10 lg:w-10 center rounded-full duration-300 hover:border-green-500 cursor-pointer border-2 border-gray-400">
                  <img src={Plus} alt="" className="w-4 h-4 duration-300 " />
                </div>
                <div className="h-8 w-8 lg:h-10 lg:w-10 center rounded-full duration-300 hover:border-red-500 cursor-pointer border-2 border-gray-400">
                  <img src={Trash} alt="" className="w-4 h-4 duration-300" />
                </div>
              </div>
            </div>
            <div className="">
              <p className=" mb-1">Product Description</p>
              <div className="h-56 border-2 border-gray-400 outline-none rounded-lg">
                <textarea name="" id="" className="h-full rounded-lg p-3 w-full border-none outline-none"></textarea>
              </div>
              <p className="text-13 text-end">Limit: 40 Words</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="lg:flex-1 w-full center border-2 border-gray-400 h-40 rounded-lg">
                  <img src="https://c.scdn.gr/images/sku_images/083585/83585445/20231016124832_7dc9f3d7.jpeg" className="h-full w-full object-contain rounded-lg" alt="" />
                </div>
                <div className="lg:flex-1 w-full border-dotted border-2 border-gray-400 h-40 rounded-lg center">
                  <DragDrop />
                </div>
              </div>
              <div className="flex gap-5 flex-col lg:flex-row ">
                <div className="lg:flex-1 center border-dotted border-2 border-gray-400 h-40 rounded-lg">
                  <DragDrop />
                </div>
                <div className="flex-1 gap-3 lg:h-40 rounded-lg flex flex-col">
                  <div className="lg:flex-1 h-40 lg:h-auto center border-dotted border-2 border-gray-400 rounded-lg flex flex-col">
                    <DragDrop />
                  </div>
                  <div className="lg:flex-1 h-40 lg:h-auto center border-dotted border-2 border-gray-400 rounded-lg flex flex-col">
                    <DragDrop />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="">Price</p>
              <div className="flex items-center gap-5">
                <p className="font-semibold">USD</p>
                <div className="w-full border-2 rounded-lg border-gray-400">
                  <BaseInput inputClassName="border-none" />
                </div>
              </div>
            </div>

            <div className="flex justify-end flex-1 pb-5">
              <div className=" w-full flex justify-end flex-col">
                <div className="mb-10">
                  <BaseInput title="Product Name" inputClassName={'border-2 border-gray-400'} />
                </div>
                <div className="flex gap-5 justify-center lg:justify-end items-end">
                  <BaseButton title="Add Product" containerCLassName="px-8 lg:px-12 py-4 h-fit bg-black text-white text-xs lg:text-sm font-semibold rounded-lg shadow-md border-2 border-black" />
                  <button className="px-8 lg:px-12 py-4 h-fit bg-transparent text-black text-xs lg:text-sm font-semibold rounded-lg shadow-md border-2 border-gray-400 ">Schedule</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </SupplierLayout>
  )
}
