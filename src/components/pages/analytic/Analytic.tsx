import SupplierLayout from "@/view/layout/SupplierLayout";
import CompA from "./CompA";
import Countries from "./Countries";
import { useState } from "react";


export default function Analytic() {
  const [active, setActive] = useState(0)
  
  const items = [
    ['Customer', 2],
    ['Product', 1.5],
    ['Revenue', 50],
  ]
  return (
    <SupplierLayout title={"Settings"}>
      <div className="grid text-black h-screen grid-rows-[1fr_1fr_2fr] gap-3 p-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-md bg-blue-500">
            <CompA percentage={1.4} text={"Total Orders"} value={"1.4K"} />
          </div>
          <div className="rounded-md bg-purple-500">
            <CompA percentage={1.4} text={"Total Orders"} value={"1.4K"} />
          </div>
          <div className="rounded-md bg-yellow-500">
            <CompA percentage={1.4} text={"Total Orders"} value={"1.4K"} />
          </div>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] gap-3 rounded-md">
          <div className="rounded-md bg-red-500">
            <CompA percentage={1.4} text={"Total Orders"} value={"1.4K"} />
          </div>
          <div className="rounded-md bg-gray-500">
            <CompA percentage={1.4} text={"Total Orders"} value={"1.4K"} />
          </div>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] gap-3 rounded-md">
          <div className="rounded-md bg-white p-4">
            <p className="font-semibold">Reports</p>
            <p className="text-xs">Last 7 Days</p>
            <div className="flex gap-4 items-center text-center mt-5">
              {items.map((data, key) => (
                <div onClick={() => setActive(key)} className={`cursor-pointer duration-500 font-semibold border-b-[3px] px-2 pb-2 ${active === key ? "border-blue-500" : "border-transparent"}`} key={key}>
                  <p className="text-xl">{data[1]}K</p>
                  <p className="font-normal text-xs">{data[0]}</p>
                </div>  
              ))}
            </div>
          </div>
          <div className="rounded-md">
            <Countries />
          </div>
        </div>
      </div>
    </SupplierLayout>
    
  );
}
