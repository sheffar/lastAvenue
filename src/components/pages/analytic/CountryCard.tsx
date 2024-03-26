import { BsChevronDown } from "react-icons/bs";

type Props = {
  country: {
    country: string 
    imgUrl: string 
    number: number
  }
  key: number
}


export default function CountryCard({country}: Props) {
  return (
    <div className="flex items-center mt-3 gap-3">
      <div className="flex text-xs text-black items-center gap-5">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden shadow">
        <img src={`${country.imgUrl}`} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="">
            <p className="text-black font-semibold">{country.number}</p>
            <p className="text-gray-400">{country.country}</p>
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
