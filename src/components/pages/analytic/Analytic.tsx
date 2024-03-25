import SupplierLayout from "@/view/layout/SupplierLayout";
// import CompA from "./CompA";
import Countries from "./Countries";
import { useState } from "react";
import { totalSpent } from "../_data/discountedAmount";


import TotalOrders from "./TotalOrders"
import TotalOrders2 from "./TotalOrders2"
import ReportChart from "./ReportChart"

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
          <div className="rounded-md h-fit">
            <TotalOrders2 data={totalSpent} title="Total Orders" summary="1.4K" percent="4%" extraClass="cs-text-green" stroke="#1EB564" />
          </div>
          <div className="rounded-md h-fit">
            <TotalOrders2 data={totalSpent} title="Total Profit" summary="40K" percent="10%" extraClass="cs-text-green" stroke="#1EB564" />
          </div>
          <div className="rounded-md h-fit">
            <TotalOrders2 data={totalSpent} title="Discounted Amount" summary="8K" percent="1.3%" extraClass="cs-text-red" stroke="#D02626" />
          </div>
        </div>
        <div className="block md:grid grid-cols-[1.5fr_1fr] gap-3 rounded-md">
          <div className="rounded-md">
            <TotalOrders />
          </div>
          <div className="mt-2 md:mt-0 rounded-md">
            <TotalOrders2 data={totalSpent} title="Total Orders" summary="1.4K" percent="4%" extraClass="cs-text-green" stroke="#1EB564" />
          </div>
        </div>
        <div className="block md:grid grid-cols-[1.5fr_1fr] gap-3 rounded-md">
          <div className="rounded-md flex flex-col bg-white p-4">
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
            <div className="flex-1 mt-">
              <ReportChart />
            </div>
          </div>
          <div className="mt-2 md:mt-0 rounded-md">
            <Countries />
          </div>
        </div>
      </div>
    </SupplierLayout>

  );
}
