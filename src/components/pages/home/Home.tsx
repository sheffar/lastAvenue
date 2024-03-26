import SupplierLayout from "@/view/layout/SupplierLayout";
import Withdraw from "./Withdraw";
import TopSelling from "./TopSelling";
import Products from "./Products";
import Card from "./Card";
import Chart from "./Chart";
import Table from "./Table";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa6";



export default function Home() {
  return (
    <SupplierLayout title={"Home"}>
      <div className="block lg:grid grid-cols-[1fr_300px] gap-4">
        <div className="">
          <div className="flex flex-col md:grid grid-cols-2 gap-3">
            <Card bgcolor="rgb(250 204 21)" icon={<BsCurrencyDollar />}/>
            <Card bgcolor="rgb(16 185 129)"  icon={<FaChartPie />}/>
          </div>
          <Table />
          <Chart />
        </div>
        <div className="space-y-3">
          <Withdraw />
          <TopSelling />
          <Products />
        </div>
      </div>
    </SupplierLayout>
  );
}
