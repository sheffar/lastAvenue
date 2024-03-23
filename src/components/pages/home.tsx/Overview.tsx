import { BsArrowDown, BsArrowUp, BsCurrencyDollar } from "react-icons/bs";

type Props = {
  icon: any;
  background: string;
  price: string;
  percent: number;
  color: string;
  text: string;
};

export default function Overview({
  icon,
  background,
  price,
  percent,
  color,
  text,
}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-between rounded-md bg-white p-3 shadow-md">
      <div
        style={{ backgroundColor: `${background}` }}
        className="flex justify-center items-center h-10 w-10 bg-green-500 rounded-full"
      >
        <div className="flex justify-center items-center h-6 w-6 rounded-full bg-white">
          {icon}
        </div>
      </div>
      <div className="">
        <p className="text-[13px]">{text}</p>
        <p className="text-lg font-bold">${price}</p>
      </div>
      <div className="text-[11px] font-semibold flex items-center  gap-1 rounded-full bg-gray-200 p-2 text-green-400 ">
        {color === "red" ? <BsArrowDown className="text-red-500 stroke-1" /> : <BsArrowUp className="stroke-1"/>}
        <p className={`${color === "red" ? "text-red-500" : "text-green-500"}`}>
          {percent}%
        </p>
      </div>
    </div>
  );
}
