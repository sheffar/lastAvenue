import { BaseButton } from '@/components/ui/buttons/BaseButton'
import { BaseInput } from '@/components/ui/data-inputs/text-input'
import React from 'react'
import File from './File'

export default function Right() {
    return (
        <div className="flex flex-col justify-between">

            <div className='grid-cols-1 lg:grid-cols-2 grid lg:auto-rows-[150px] gap-3'>
                <div className="bg-blue-500 center border-2 border-gray-600 rounded-md h-48 lg:h-auto">
                    {/* <File className='h-full w-full ' /> */}
                </div>
                <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                    <File className='h-full w-full ' />
                </div>
                <div className="bg-white center border-2 border-gray-600 rounded-md h-48 lg:h-auto">
                    <File className='h-full w-full ' />
                </div>
                <div className="rounded-md grid grid-cols-1 grid-rows-2 gap-2">
                    <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                        <File className='h-full w-full ' />
                    </div>
                    <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                        <File className='h-full w-full ' />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <p className='font-semibold'>Price</p>
                <div className="flex w-full items-center gap-3">
                    <p className='font-semibold'>USD</p>
                    <div className="flex-1">
                        <BaseInput inputClassName='border-2 border-gray-600' />
                    </div>
                </div>
            </div>
            <div className="">
                <BaseInput label="Product Name" containerClassname="mt-5" labelClassName="text-lg" inputClassName="border-2 border-gray-600" />
                <div className="grid grid-cols-2 gap-5 mt-7 w-[90%] ml-auto">
                    <BaseButton title='Add Product' tapScale={1.025} containerCLassName='bg-black border-2 border-white shadow-md text-white font-semibold rounded-lg py-8' />
                    <BaseButton title='Schedule' tapScale={1.025} containerCLassName='bg-white border-2 border-black shadow-md text-black font-semibold rounded-lg py-8' />
                </div>
            </div>
        </div>
    )
}
