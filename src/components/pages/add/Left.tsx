import { SelectInput } from '@/components/ui/data-inputs/select-input'
import { BaseInput } from '@/components/ui/data-inputs/text-input'
import React, { useState } from 'react'
import { BsPlus, BsTrash } from 'react-icons/bs'

export default function Left() {
    const [activeSize, setActiveSize] = useState(3)
    
    return (
        <div className="">
            <BaseInput label="Product Name" containerClassname="" labelClassName="text-lg" inputClassName="border-2 border-gray-600" />
            <div className="grid mt-6 gap-4 grid-cols-1 sm:grid-cols-[1.5fr_1fr]">
                <SelectInput options={['', 'Shoes', 'Clothes', 'Bags']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Category" />
                <SelectInput options={['', 'Male', 'Female']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Gender" />
            </div>
            <div className="mt-5">
                <SelectInput options={['', 'Nike', 'Hermes', 'Gucci']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Brand" />
            </div>
            <div className="">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between mt-8 text-sm font-semibold">
                    <p>Add Size</p>
                    <div className="flex gap-4">
                        {['XS', 'SM', 'M', 'L', 'XL',].map((data, key: number) => (
                            <div className={`h-9 w-9 text-sm border-2 rounded-md border-gray-600 active:scale-90 cursor-pointer duration-300 hover:border-green-500 center ${activeSize === key ? "bg-black text-white" : "bg-white text-black"}`} onClick={() => setActiveSize(key)}>
                                {data}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-green-500 border-2 border-gray-600 ">
                            <BsPlus className='text-2xl' />
                        </div>
                        <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-red-500 border-2 border-gray-600 ">
                            <BsTrash className='text-lg' />
                        </div>
                    </div>
                </div>
                <p className='text-red-500'>Error</p>
            </div>
            <div className="">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between mt-8 text-sm font-semibold">
                    <p>Add Colors</p>
                    <div className="flex gap-4">
                        {['red', 'green', 'yellow', 'blue'].map((data, key: number) => (
                            <div key={key} style={{backgroundColor: `${data}`}} className="h-10 w-10 border-2 rounded-full active:scale-90 cursor-pointer duration-300">
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-green-500 border-2 border-gray-600 ">
                            <BsPlus className='text-2xl' />
                        </div>
                        <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-red-500 border-2 border-gray-600 ">
                            <BsTrash className='text-lg' />
                        </div>
                    </div>
                </div>
                <p className='text-red-500'>Error</p>
            </div>
            <div className="mt-5">
                <p className="text-black font-semibold mb-1">Product Description</p>
                <div className="h-60 border-2 rounded-xl border-gray-600">
                    <textarea className="h-full p-5 outline-none border-none w-full rounded-xl">
                    </textarea>
                </div>
            </div>

        </div>
    )
}
