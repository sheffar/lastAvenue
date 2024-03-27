import { useState } from "react";
import Nike1 from '../../../assets/icons/nike1.svg'
import Nike2 from '../../../assets/icons/nike2.svg'

  
  export default function Products() {
    const nikes = [Nike1, Nike2]
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className={`overflow-hidden duration-300 mt-3 bg-white rounded-md shadow-md w-full p-3`}>
        <p className="text-lg font-semibold mb-2 ">Top Products</p>
        <div className={`space-y-3 duration-500 ${!collapsed ? 'h-60 overflow-y-auto': 'h-24 overflow-hidden'}`}>
          {[1, 2, 3, 4, 5].map((nike, key: number) => (
            <div className="flex justify-between " key={key}>
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-lg">
                  <img src={`${key % 2 === 0 ? Nike1 : Nike2}`} className="h-full w-full object-cover" alt="" />
                </div>
                <div className="">
                  <p className="text-sm font-semibold">Nike</p>
                  <p className='text-gray-400 text-xs'>Airforce 1</p>
                </div>
              </div>
              <p className='font-semibold text-13 mr-2'>$2467.53</p>
            </div>
          ))}
        </div>
        <p onClick={() => setCollapsed(!collapsed)} className="text-blue-500 font-semibold text-13 text-end cursor-pointer">{collapsed ? 'See More' : 'See Less'}</p>
      </div>
    );
  }