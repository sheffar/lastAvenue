import Wallet from '../../../assets/icons/wallet.svg'
import Master from '../../../assets/icons/master.svg'
import { BaseInput } from '@/components/ui/data-inputs/text-input'
import { BaseButton } from '@/components/ui/buttons/BaseButton'
import { useState } from 'react'

export default function Withdrawal() {
    const [input, setInput] = useState('')
    const handleInputChamge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const numbersOnly = /^\d+$/;
        if (numbersOnly.test(value)) {
            setInput(value);
          }
          if(value.length === 1){
            
          }
        
    }
    return (
        <div className='p-4 bg-white rounded-lg shadow-md '>
            <p className="font-semibold text-base mb-1">Enter Amount</p>
            <div className="grid grid-cols-[55px_1fr] bg-white border-gray-300 rounded-md overflow-hidden border-2 h-[55px]">
                <div className="border-r-2 border-gray-300 center">
                    <p className='font-semibold text-lg'>USD</p>
                </div>
                <div className="">
                    <BaseInput value={input} onChange={handleInputChamge} inputClassName={'border-none'} />
                </div>
            </div>
            <div className="mt-5 bg-[#F4F3F3] border-2 px-6 rounded-md py-3">
                <p className='mb-2 font-semibold text-15'>Select a Payment Method</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <img src={Wallet} alt="" className='h-5 w-5' />
                        <img src={Master} alt="" className='' />
                        <select name="" className="w-full h-full cursor-pointer font-semibold outline-none border-none bg-transparent">
                            <option value="">1234*********</option>
                            <option value="">Paypal</option>
                            <option value="">Bitcoin</option>
                            <option value="">Etherum</option>
                        </select>
                    </div>
                </div>
            </div>
            <BaseButton tapScale={1.025} hoverScale={1.075} title='Withdraw Money' containerCLassName='bg-[#FFE458] text-black text-sm mt-5 font-semibold' />
        </div>
    )
}
