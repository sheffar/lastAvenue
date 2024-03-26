import { ReactElement } from "react";
import { BsArrowDown } from "react-icons/bs";

type Props = {
  bgcolor: string 
  icon:  ReactElement
}

export default function Card({ icon, bgcolor} : Props) {
  return (
    <div className="rounded-lg bg-white h-32 px-5 flex items-center gap-4 justify-between">
      <div style={{backgroundColor: `${bgcolor}`}} className="h-12 w-12  rounded-full center">
        <div className={`h-8 w-8 center rounded-full ${bgcolor === 'rgb(250 204 21)' ? 'bg-black stroke-1 text-xl text-yellow-400' : ''}`}>
          {icon}
        </div>
      </div>
      <div className="">
        <p className="text-sm">Available Balance</p>
        <p className="font-bold text-xl">$40,000.05</p>
      </div>
      <div className="bg-gray-200 p-1 text-xs rounded-md flex h-fit text-red-500">
        <BsArrowDown />
        <p>1.4%</p>
      </div>
    </div>
  )
}
