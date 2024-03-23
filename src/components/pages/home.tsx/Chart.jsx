import { BsCalendar, BsCheck } from "react-icons/bs";

export default function Chart() {
  return (
    <div className="h-full p-4 w-full">
      <div className="grid h-full w-full grid-cols-[1fr_3fr] ">
        <div className="">
          <div className="flex mb-8 items-center gap-2">
            <BsCalendar />
            <p>This month</p>
          </div>
          <p className='text-xl font-bold mb-3'>$37.5K</p>
          <div className="flex mb-2 gap-4">
            <p>Total Spent</p>
            <p className='text-green-500'>+2.45%</p>
          </div>
          <div className="flex mb-2 items-center gap-2">
            <div className="h-4 w-4 rounded-full center bg-green-500 text-white">
              <BsCheck />
            </div>
            <p className='text-green-500'>On track</p>
          </div>
        </div>
        <div className="bg-emerald-500"></div>
      </div>
    </div>
  );
}
