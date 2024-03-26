import { BsCalendar, BsCheck } from "react-icons/bs"
import { FaChartBar } from "react-icons/fa"
import { FaSortUp } from "react-icons/fa6"

  import {
    LineChart,
    Line,
    XAxis,
    ResponsiveContainer,
  } from 'recharts';
  

export default function Chart() {
  const data = [
    {
      name: 'Mon',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Tue',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Wed',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Thu',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Fri',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Sat',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Sun',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <div className="p-3 bg-white mt-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 text-15">
          <BsCalendar />
          <p className="text-sm font-semibold">This Month</p>
        </div>
        <div className="h-5 w-6 text-sm center bg-gray-100 rounded-md">
          <FaChartBar />
        </div>
      </div>
      <div className="lg:h-full mt-4 block lg:grid grid-cols-[200px_1fr] ">
        <div className="">
          <p className="font-bold text-4xl">$37.5K</p>
          <p className="text-sm">Total spent <FaSortUp className="text-green-500 inline mt-1 ml-2" /> <span className="text-green-500">+2.4%</span></p>
          <div className="flex gap-2 mt-7 items-center text-green-500">
            <div className="h-4 w-4 bg-green-500 rounded-full center">
              <BsCheck className="text-white " />
            </div>
            <p className="text-sm">On Track</p>
          </div>
        </div>
        <div className="h-60 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data}>
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
