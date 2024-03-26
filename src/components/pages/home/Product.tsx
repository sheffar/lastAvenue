import { useState } from "react";

  
  export default function Products() {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className={`overflow-hidden duration-300 mt-3 bg-white rounded-md shadow-md w-full p-3`}>
        <p className="text-lg font-semibold mb-2 ">Top Products</p>
        <div className={`space-y-3 duration-500 ${!collapsed ? 'h-60 overflow-y-auto': 'h-28 overflow-hidden'}`}>
          {[1, 2, 3, 4, 5].map(() => (
            <div className="flex justify-between ">
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-lg border-2"></div>
                <div className="">
                  <p className="text-sm font-semibold">Nike</p>
                  <p className='text-gray-400 text-xs'>Airforce 1</p>
                </div>
              </div>
              <p className='font-semibold text-13 mr-2'>$2467.53</p>
            </div>
          ))}
        </div>
        <p onClick={() => setCollapsed(!collapsed)} className="text-blue-500 font-semibold text-end cursor-pointer">{collapsed ? 'See More' : 'See Less'}</p>
      </div>
    );
  }