import { FaSortUp } from 'react-icons/fa6'
import Calender from '../../../assets/icons/calendar.svg'
import Bar from '../../../assets/icons/bar.svg'
import { BsCheck } from 'react-icons/bs'
import {
    LineChart,
    Line,
    XAxis,
    ResponsiveContainer,
  } from 'recharts';
  

export default function Chart() {

    const data1 = [
        {
          name: 'SEPT',
          uv: 200,
          pv: 0,
        },
        {
          name: 'OCT',
          uv: 600,
          pv: 100,
        },
        {
          name: 'NOV',
          uv: 200,
          pv: 0,
        },
        {
          name: 'DEC',
          uv: 600,
          pv: 100,
        },
        {
          name: 'JAN',
          uv: 200,
          pv: 0,
        },
        {
          name: 'FEB',
          uv: 600,
          pv: 150,
        },
        
      ];

    return (
        <div className='bg-white mt-5 rounded-lg p-4'>
            <div className="flex justify-between items-center mb-3">
                <div className="flex gap-2 text-sm p-2 rounded-lg bg-btncolor w-fit">
                    <img src={Calender} alt="" />
                    <p>This Month</p>
                </div>
                <div className="bg-btncolor p-2 center rounded-lg">
                    <img src={Bar} alt="" className='h-3 w-3' />
                </div>
            </div>
            <div className="flex flex-col lg:grid grid-cols-[175px_1fr] gap-7 lg:gap-3 lg:h-52">
                <div className="">
                    <p className='text-3xl font-semibold'>$37.5K</p>
                    <div className="text-sm flex gap-2">
                        <p>Total Spent</p>
                        <p className='text-green-500'><FaSortUp className='inline mr-2 mt-1' />+2.45%</p>
                    </div>
                    <div className="mt-5 font-semibold flex gap-2 items-center">
                        <div className="h-5 w-5 center rounded-full bg-emerald-500 center">
                            <BsCheck className='text-white' />
                        </div>
                        <p>On track</p>
                    </div>
                </div>
                <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={0}
                            height={50}
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
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <Line yAxisId="left" type="monotone" strokeWidth={3} dot={false} dataKey="pv" stroke="black" activeDot={{ r: 8 }} />
                            <Line yAxisId="right" type="monotone" strokeWidth={3} dot={false} dataKey="uv" stroke="#888888" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
