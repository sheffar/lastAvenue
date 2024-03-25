import { BsDownload, BsFilter } from "react-icons/bs";

export default function OrderCard() {
  const titles = [
    "Jane Doe",
    "122GD1",
    "23 Jul 2022",
    "AJNJWBHD",
    "$1,250",
    "Done",
  ];
  return (
    <div className="">
      <div className="px-3 text-black text-sm overflow-y-auto">
      {[1, 2, 3, 4, 5].map(() => (
        <div className="grid hover:bg-blue-200 duration-500 rounded-md hover:font-semibold cursor-pointer  grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]  text-[13px] border-transparent border-2 px-3 gap-3 h-14">
          {titles.map((data, key) => (
            <div className={` flex items-center gap-2 ${key === 0 ? 'justify-start px-3' : 'justify-center'}`} key={key}>
              {key === 0 && <div className="h-8 w-8 border-2"></div>}
              <p>{data}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
