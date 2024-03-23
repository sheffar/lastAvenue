import { BsArrowUp } from "react-icons/bs";

type Props = {
  text: string
  value: string
  percentage: number
}

export default function CompA({text, value, percentage }: Props) {
  return (
    <div className="grid bg-white rounded-md w-full h-full grid-cols-[1.5fr_1fr] gap-3 ">
      <div className="flex flex-col gap-4 justify-between p-4">
        <div className="">
          <p className='text-sm font-semibold'>{text}</p>
          <p className="text-[13px]">Last 7 days</p>
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">{value}</p>
            <div className="flex w-full items-center gap-4">
              <p className="text-green-500 flex items-center">
                <BsArrowUp className="text-green-500 mr-1 inline" />
                <span>{percentage}%</span>
              </p>
              <p className="text-xs">Volume 7 days</p>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
