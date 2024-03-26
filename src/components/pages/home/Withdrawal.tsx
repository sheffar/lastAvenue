import Wallet from '../../../assets/icons/wallet.svg'
import Master from '../../../assets/icons/master.svg'
import { BsChevronDown } from 'react-icons/bs'

export default function Withdrawal() {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md '>
            <p className="font-semibold text-base mb-1">Enter Amount</p>
            <div className="grid grid-cols-[55px_1fr] bg-white border-gray-300 rounded-md overflow-hidden border-2 h-[55px]">
                <div className="border-r-2 border-gray-300 center">
                    <p className='font-semibold text-lg'>USD</p>
                </div>
                <div className=""></div>
            </div>
            <div className="mt-2 bg-[#F4F3F3] px-6 rounded-md py-3">
                <p className='mb-2'>Select a Payment Method</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <img src={Wallet} alt="" className='h-5 w-5' />
                        <img src={Master} alt="" className='' />
                        <p className='font-semibold text-sm'>1322************</p>
                    </div>
                    <BsChevronDown className='stroke-1 text-sm'/>
                </div>
            </div>
            <button className='p-4 rounded-lg font-semibold bg-btnyellow text-sm w-full mt-4 shadow'>
                Withdraw Money
            </button>
        </div>
    )
}
