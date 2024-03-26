import SupplierLayout from '@/view/layout/SupplierLayout'
import Card from './Card'
import Dollar from '../../../assets/icons/dollar.svg'
import Chart from '../../../assets/icons/chart.svg'
export default function Home() {
  return (
    <SupplierLayout title='Home'>
      <div className="grid h-screen grid-cols-[1fr_300px] gap-4">
        <div className="p-3 bg-white rounded-md gap-3 grid grid-cols-2">
          <Card icon={Dollar} color={'#FFE458'} title='Available Balance'  price={'$40,540.55'} />
          <Card icon={Chart} color={'#70FFB2'} title='Total Transaction' price={'$140,540.55'}/>
        </div>
        <div className="bg-purple-500"></div>
      </div>
    </SupplierLayout>
  )
}
