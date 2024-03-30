import { SelectInput } from "@/components/ui/data-inputs/select-input";
import { BaseInput } from "@/components/ui/data-inputs/text-input";
import SupplierLayout from "@/view/layout/SupplierLayout";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import File from "./File";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { BsPlus, BsTrash } from "react-icons/bs";
import { InformationCircle } from "react-huge-icons/solid";
import Click from "./Click";

export default function Main() {

  const [activeSize, setActiveSize] = useState(3)
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')


  const schema = z.object({
    productName: z.string().min(1, { message: 'Please add a product name' }),
    category: z.string().min(1, { message: 'Please select a size' }),
    gender: z.string().min(1, { message: 'Please select a size' }),
    brand: z.string().min(1, { message: 'Please select a brand' }),
    size: z.string().min(1, { message: 'Please select a size' }),
    color: z.string().min(1, { message: 'Please select a color' }),
    price: z.string().min(1, { message: 'Please add a price' }),
    desc: z.string().min(1, { message: 'Please add a description' }),
    file: z.string().min(1, { message: 'Please add a description' }),
  })

  type TFORM = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TFORM>(
    { resolver: zodResolver(schema) }
  )
  const SubmitForm = (data: TFORM) => {
    console.log(data);
  }




  return (
    <SupplierLayout title="Add New Product" subtitle="When adding products, make sure to fill in completely all the required details.">
      <div className="min-h-screen text-black p-4 mt-4 rounded-md bg-white grid gap-7 grid-cols-1 lg:grid-cols-2">
        <div className="">
          <BaseInput register={register} name='productName' error={errors.productName?.message} label="Product Name" containerClassname="" labelClassName="text-lg" inputClassName="border-2 border-gray-600" />
          <div className="grid mt-6 gap-4 grid-cols-1 sm:grid-cols-[1.5fr_1fr]">
            <SelectInput register={register} options={['', 'Shoes', 'Clothes', 'Bags']} labelClassname="text-black font-semibold" error={errors.category?.message} name="category" selectClassName="border-2 border-gray-600" label="Category" />
            <SelectInput register={register} name="gender" error={errors.gender?.message} options={['', 'Male', 'Female']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Gender" />
          </div>
          <div className="mt-5">
            <SelectInput register={register} name="brand" error={errors.brand?.message} options={['', 'Nike', 'Hermes', 'Gucci']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Brand" />
          </div>
          <div className="">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between mt-8 text-sm font-semibold">
              <p>Add Size</p>
              <div className="flex gap-4">
                {['XS', 'SM', 'M', 'L', 'XL',].map((size, key: number) => (
                  <div className={`h-9 w-9 text-sm border-2 rounded-md border-gray-600 active:scale-90 cursor-pointer duration-300 hover:border-green-500 center ${activeSize === key ? "bg-black text-white" : "bg-white text-black"}`} onClick={() => {
                    setActiveSize(key)
                    setSize(size)
                  }}>
                    {size}
                  </div>
                ))}
              </div>
              <input type="hidden" {...register('size')} value={size} />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-green-500 border-2 border-gray-600 ">
                  <BsPlus className='text-2xl' />
                </div>
                <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-red-500 border-2 border-gray-600 ">
                  <BsTrash className='text-lg' />
                </div>
              </div>
            </div>
            {errors.size && (
              <p className="mb-4 flex items-center gap-2 text-[18px] mt-1 leading-[15px] text-[red]">
                <InformationCircle /> {errors.size?.message}
              </p>
            )}          </div>
          <div className="">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between mt-8 text-sm font-semibold">
              <p>Add Colors</p>
              <div className="flex gap-4">
                {['red', 'green', 'yellow', 'blue'].map((color: string, key: number) => (
                  <div key={key} style={{ backgroundColor: `${color}` }} onClick={() => {
                    setColor(color)
                  }} className="h-10 w-10 border-2 rounded-full active:scale-90 cursor-pointer duration-300">
                  </div>
                ))}
              </div>
              <input type="hidden" {...register('color')} value={color} />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-green-500 border-2 border-gray-600 ">
                  <BsPlus className='text-2xl' />
                </div>
                <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-red-500 border-2 border-gray-600 ">
                  <BsTrash className='text-lg' />
                </div>
              </div>
            </div>
            {errors.color && (
              <p className="mb-4 flex items-center gap-2 text-[18px] mt-1 leading-[15px] text-[red]">
                <InformationCircle /> {errors.color?.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <p className="text-black font-semibold mb-1">Product Description</p>
            <div className="h-60 border-2 rounded-xl border-gray-600">
              <textarea className="h-full p-5 outline-none border-none w-full rounded-xl" {...register('desc')}>
              </textarea>
            </div>
            {errors.desc && (
              <p className="mb-4 flex items-center gap-2 text-[18px] mt-1 leading-[15px] text-[red]">
                <InformationCircle /> {errors.desc?.message}
              </p>
            )}
          </div>

        </div>







































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
                <BaseInput register={register} name='price' error={errors.price?.message} inputClassName='border-2 border-gray-600' />
              </div>
            </div>
          </div>

          <div className="">
            <Click />
            <div className="grid grid-cols-2 gap-5 mt-7 w-[90%] ml-auto">
              <BaseButton isSubmitting={isSubmitting} onClick={handleSubmit(SubmitForm)} title='Add Product' tapScale={1.025} containerCLassName='bg-black border-2 border-white shadow-md text-white font-semibold rounded-lg py-8' />
              <BaseButton isSubmitting={isSubmitting} title='Schedule' tapScale={1.025} containerCLassName='bg-white border-2 border-black shadow-md text-black font-semibold rounded-lg py-8' />
            </div>
          </div>
        </div>
      </div>
    </SupplierLayout>
  )
}
