import { BsChevronDown, BsFastForwardBtn, BsWallet } from "react-icons/bs";

export default function Withdraw() {
  return (
    <div className="p-3 bg-white rounded-md h-fit">
      <p className="font-bold">Enter Amount</p>
      <div className="h-14 border-2 mt-2 rounded-lg">
        <div className="h-full w-12 border-r-2 justify-center items-center flex">
          <p className="font-bold">USD</p>
        </div>
      </div>
      <div className="bg-gray-100 mt-4 p-3 rounded-md">
        <p>Select a payment method</p>
        <div className="flex mt-2 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <div className="flex gap-3 text-lg">
              <BsWallet />
              <BsFastForwardBtn />
            </div>
            <p className="text-base">8564***********</p>
          </div>
          <BsChevronDown className="stroke-1" />
        </div>
        <button className="font-semibold w-full mt-4 py-3 rounded-md bg-yellow-400">
          Withdraw Money
        </button>
      </div>
    </div>
  );
}
