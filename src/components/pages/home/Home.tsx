import SupplierLayout from "@/view/layout/SupplierLayout";
import { Bs0Circle } from "react-icons/bs";
import Overview from "./Overview";
import OrderDetails from "./OrderDetails";
import OrderCard from "./OrderCard";
import Chart from "./Chart";
import Withdraw from "./Withdraw";
import TopSelling from "./TopSelling";
import Products from "./Products";


export default function Home() {
  return (
    <SupplierLayout title={"Home"}>
      <div className="block lg:grid h-screen text-black grid-cols-[1fr_300px] gap-3">
        <div className="grid grid-rows-[100px_auto_auto] gap-3">
          <div className=" grid grid-cols-2 gap-3 rounded-md">
            <div className="rounded-md">
              <Overview
                background={"yellow"}
                color={"green"}
                text={"Available balance"}
                percent={1.5}
                icon={<Bs0Circle />}
                price={"40,567.75"}
              />
            </div>
            <div className="rounded-md bg-pink-500">
              <Overview
                background={"green"}
                color={"red"}
                percent={1.4}
                text={"Total Transactions"}
                icon={<Bs0Circle />}
                price={"140,567.75"}
              />
            </div>
          </div>
          <div className="rounded-md bg-white overflow-x-auto h-full shadow-md">
            <div className="w-[800px] lg:w-full">
              <OrderDetails />
              <OrderCard />
            </div>
          </div>
          <div className="">
            <Chart />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-md bg-yellow-500 ">
            <Withdraw />
          </div>
          <div className="rounded-md">
            <TopSelling />
          </div>
          <div className="rounded-md bg-yellow-500">
            <Products />
          </div>
        </div>
      </div>
    </SupplierLayout>
  );
}
