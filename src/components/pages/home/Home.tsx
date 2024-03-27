import SupplierLayout from '@/view/layout/SupplierLayout'
import Card from './Card'
import Dollar from '../../../assets/icons/dollar.svg'
import Exchange from '../../../assets/icons/chart.svg'
import Table from './Table'
import Chart from './Chart'
import Withdrawal from './Withdrawal'
import Products from './Product'
import TopSelling from './TopSelling'
export default function Home() {
  return (
    <SupplierLayout title='Home'>
      <div className="flex flex-col lg:grid text-black min-h-screen grid-cols-[1fr_300px] gap-4">
        <div className="">

          <div className=" rounded-md gap-7 lg:gap-3 xl:grid flex flex-col grid-cols-2">
            <Card icon={Dollar} color={'#FFE458'} value={1.5} arrowColor={'red'} title='Available Balance' price={'$40,540.55'} />
            <Card icon={Exchange} color={'#70FFB2'} value={2.5} arrowColor={'green'} title='Total Transaction' price={'$140,540.55'} />
          </div>
          <Table />
          <Chart />
        </div>
        <div className="">
          <Withdrawal />
          <TopSelling />
          <Products />
        </div>
      </div>
    </SupplierLayout>
  )
}
