import { BsChevronDown } from "react-icons/bs";

export default function CountryCard() {
  return (
    <div className="flex items-center mt-3 gap-3">
      <div className="flex text-xs text-black items-center gap-5">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2">

          </div>
          <div className="">
            <p className="text-black font-semibold">750</p>
            <p className="text-gray-400">United States</p>
          </div>
        </div>
      </div>
      <div className="flex-1 h-1 overflow-hidden rounded-full bg-red-400">
        <div className="h-full bg-emerald-500 w-1/2"></div>
      </div>
      <div className={`flex gap-1 text-xs items-center text-green-500`}>
        <BsChevronDown className="" />
        <p className="">25.5%</p>
      </div>
    </div>
  );
}
