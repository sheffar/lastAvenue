import { FaSortUp } from 'react-icons/fa6'
import Calender from '../../../assets/icons/calendar.svg'
import Bar from '../../../assets/icons/bar.svg'
import { BsCheck } from 'react-icons/bs'

export default function Chart() {
    return (
        <div className='bg-white mt-5 rounded-lg p-4'>
            <div className="flex justify-between items-center mb-3">
                <div className="flex gap-2 text-sm p-2 rounded-lg bg-btncolor w-fit">
                    <img src={Calender} alt="" />
                    <p>This Month</p>
                </div>
                <div className="bg-btncolor p-2 center rounded-lg">
                    <img src={Bar} alt="" className='h-3 w-3'/>
                </div>
            </div>
            <div className="grid grid-cols-[175px_1fr] h-60">
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
                <div className=""></div>
            </div>
        </div>
    )
}
