import { BsArrowUp } from "react-icons/bs";
import { FaSortUp } from "react-icons/fa6";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
} from 'recharts';

type Props = {
  color: string
  type: string
  header?: string
  figure?: number
}
// { text, value, percentage, chartType, data, height, width, strokeA, strokeB, strokeWidth }: Props


const data1 = [
  {
    name: 'Mon',
    uv: 200,
    pv: 0,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 500,
    pv: 200,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 300,
    pv: 100,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 800,
    pv: 300,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 700,
    pv: 250,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 1000,
    pv: 500,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 900,
    pv: 350,
    amt: 2100,
  },
];


export default function Chart({ type, color, header,figure }: Props) {
  const data = [
    {
      name: 'Page A',
      pv: 0,
      amt: 2400,
    },
    {
      name: 'Page B',
      pv: 300,
      amt: 2210,
    },
    {
      name: 'Page C',
      pv: 0,
      amt: 2290,
    },
    {
      name: 'Page D',
      pv: 300,
      amt: 2000,
    },
    

  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row bg-white rounded-md p-3 shadow-md">
      <div className={` h-40 flex flex-col justify-between lg:flex-1`}>
        <div className="">
          <p className="font-semibold">{header}</p>
          <p className="text-xs">Last 7 days</p>
        </div>
        <div className="">
          <p className="font-bold text-xl">{type === 'B' && '$'}{figure}K</p>
          <div className="flex gap-2 font-public-sans text-13 items-center">
            <div className="flex items-center gap-[2px] text-green-500">
              <BsArrowUp className="mt-1 stroke-1" />
              <p>4%</p>
            </div>
            <p>vs last 7 days</p>
          </div>
        </div>
      </div>
      <div className={` h-36 center ${type === 'B' ? 'lg:flex-[2]' : 'lg:flex-1'}`}>
        {type === 'A' && <ResponsiveContainer width="100%" height="50%">
          <LineChart width={300} height={100} data={data}>
            <Line type="monotone"  strokeWidth={3} dot={false} dataKey="pv" stroke={`${color}`} />
            <feDropShadow dx="0" dy="10" stdDeviation="10"/>
          </LineChart>
        </ResponsiveContainer>}
        {type === 'B' &&
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={500}
              style={{
                fontSize: '12px',
                
              }}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" axisLine={false}  tickLine={false}  />
              <Line yAxisId="left"  type="monotone" strokeWidth={3} dot={false} dataKey="pv" stroke="#0F60FF" activeDot={{ r: 8 }} />
              <Line yAxisId="right"  type="monotone" strokeWidth={3} dot={false} dataKey="uv" stroke="#0FB7FF" />
            </LineChart>
          </ResponsiveContainer>
        }

        {type === 'C' &&
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data1}>
              <XAxis dataKey="name"  tickLine={false}  padding={{ left: 30, right: 30 }} />
              <Line type="monotone"  strokeWidth={3} dot={false} dataKey="pv" stroke="red" activeDot={{ r: 8 }} />
              <Line type="monotone" strokeWidth={3} dot={false} dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
    </div>
  );
}
