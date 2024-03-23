import { BsDownload, BsFilter } from "react-icons/bs";

export default function OrderDetails() {
  const titles = [
    "Product Name",
    "Product ID",
    "Transaction Date",
    "Transaction ID",
    "Amount",
    "Status",
  ];
  return (
    <div className="p-3">
      <div className="flex mb-4 justify-between items-center">
        <p className="font-semibold text-sm">Order Details</p>
        <div className="flex gap-3 items-center">
          <div className="flex font-semibold text-sm  gap-1 items-center px-3 bg-gray-100 py-2 rounded-md">
            <BsFilter />
            <p>Filter</p>
          </div>
          <div className="flex font-semibold text-sm gap-1 items-center px-3 bg-gray-100 py-2 rounded-md">
            <BsDownload />
            <p>Download Report</p>
          </div>
        </div>
      </div>

      <div className="grid border-2 text-[13px] p-3 grid-cols-6 gap-3 h-14">
        {titles.map((data, key) => (
          <div className={`justify-center flex items-center gap-2 ${key === 0 ? 'justify-start' : 'justify-center'} `} key={key}>
            {key === 0 && <div className="h-8 w-8 border-2"></div>}
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
