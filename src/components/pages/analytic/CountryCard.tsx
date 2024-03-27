import { BsChevronDown, BsChevronUp } from "react-icons/bs";

type Props = {
  country: {
    country: string
    imgUrl: string
    number: number
    percent: number
    id: number
  }
  key: number
}


export default function CountryCard({ country, key }: Props) {
  console.log(key);
  return (
    <div className="grid grid-cols-[1fr_1.75fr_auto] justify-between items-center mt-3 gap-3">
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
      <div className=" h-[6px] overflow-hidden rounded-full bg-btncolor">
        <div className="h-full bg-[#0F60FF] " style={{width: `${country.percent + 20}%`}}></div>
      </div>
      <div className={`flex justify-end gap-1 text-xs items-center text-green-500`}>
        {country.id % 2 === 0 ?
          <BsChevronUp className={`stroke-1 ${country.id % 2 === 0 ? 'text-[#28C76F]' : 'text-[#EA5455]'}`} />
          :
          <BsChevronDown className={`stroke-1 ${country.id % 2 === 0 ? 'text-[#28C76F]' : 'text-[#EA5455]'}`} />
        }
        <p className={`font-semibold ${country.id % 2 === 0 ? 'text-[#28C76F]' : 'text-[#EA5455]'}`}>{country.percent}%</p>
      </div>
    </div>
  );
}
