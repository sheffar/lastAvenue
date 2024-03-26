import SupplierLayout from '@/view/layout/SupplierLayout'
import Card from './Card'
import Dollar from '../../../assets/icons/dollar.svg'
import Exchange from '../../../assets/icons/chart.svg'
import Table from './Table'
import Chart from './Chart'
import Withdrawal from './Withdrawal'
export default function Home() {
  return (
    <SupplierLayout title='Home'>
      <div className="grid min-h-screen grid-cols-[1fr_300px] gap-4">
        <div className="">

          <div className=" rounded-md gap-3 grid grid-cols-2">
            <Card icon={Dollar} color={'#FFE458'} title='Available Balance' price={'$40,540.55'} />
            <Card icon={Exchange} color={'#70FFB2'} title='Total Transaction' price={'$140,540.55'} />
          </div>
          <Table />
          <Chart />
        </div>
        <div className="">
          <Withdrawal />
        </div>
      </div>
    </SupplierLayout>
  )
}
