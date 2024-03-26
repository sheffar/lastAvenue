import SupplierLayout from "@/view/layout/SupplierLayout";
import Countries from "./Countries";
import { useState } from "react";
import Chart from "./Chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'

export default function Analytic() {
  const [active, setActive] = useState(0)
  
  const data = [
    {
      name: 'Mon',
      uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Tue',
      uv: 200,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Wed',
      uv: 400,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Thu',
      uv: 200,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Fri',
      uv: 600,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Sat',
      uv: 400,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Sun',
      uv: 800,
      pv: 4300,
      amt: 2100,
    },
  ];
  

  const items = [
    ['Customer', 2],
    ['Product', 1.5],
    ['Revenue', 50],
  ]

  return (
    <SupplierLayout title={"Analytics"}>
      <div className="space-y-4 mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
          <div className="rounded-md h-fit">
            <Chart type="A" color="red"/>
          </div>
          <div className="rounded-md h-fit">
            <Chart type="A" color="blue"/>
          </div>
          <div className="rounded-md h-fit">
            <Chart type="A" color="purple"/>
          </div>
        </div>
        <div className="block md:grid grid-cols-[2fr_1fr] gap-3 rounded-md">
          <div className="rounded-md">
            <Chart type="B" color="yellow"/>
          </div>
          <div className="mt-2 md:mt-0 rounded-md">
            <Chart type="A" color="green"/>
          </div>
        </div>
        <div className="block md:grid grid-cols-[2fr_1fr] gap-3 rounded-md">
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
            <div className="flex-1 mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={300} data={data}>
                  <XAxis dataKey="name" padding={{}} />
                  <YAxis />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
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
