import SupplierLayout from "@/view/layout/SupplierLayout";
import { useEffect, useRef, useState } from "react";
import File from "./File";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { BsPlus, BsTrash } from "react-icons/bs";
import { InformationCircle } from "react-huge-icons/solid";
import Click from "./Click";
import { BaseInput2 } from "@/components/ui/data-inputs/BaseInput2";
import { SelectInput2 } from "@/components/ui/data-inputs/select-input2";


type TColors =
  {
    name: string,
    hexcode: string
  }

export type TValues = {
  productName: string
  category: string,
  price: number,
  brand: string
  description: string
  gender: string
  images: (string | File)[] | undefined
  colors: TColors[]
  sizes: string[]
}

export default function Main() {

  const [backDropOpened, setBackdropOpened] = useState(false)
  const [colorDialogue, setColorDialogue] = useState(false)
  const [sizes, setSizes] = useState(['XS', 'SM', 'M', 'L', 'XL'])

  const [values, setValues] = useState<TValues>({
    productName: '',
    category: '',
    brand: '',
    description: '',
    price: 0,
    gender: '',
    images: [],
    colors: [
      { name: 'red', hexcode: 'red' },
      { name: 'blue', hexcode: 'blue' },
      { name: 'green', hexcode: 'green' },
      { name: 'yellow', hexcode: 'yellow' },
    ],
    sizes: []
  })

  const [errors, setErrors] = useState({
    productName: '',
    category: '',
    brand: '',
    description: '',
    gender: '',
    price: '',
    images: '',
    colors: "",
    sizes: ''
  })

  const ColorRef = useRef<any>()
  const ColorBtnRef = useRef<any>()




  const [files, setFiles] = useState<(string | File)[]>([])


  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.name === 'price' ? parseInt(e.target.value) : e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }


  const Submit = () => {

  }

  const handleClick = (e: any) => {
    if (ColorBtnRef.current?.contains(e.target)) {
      setBackdropOpened(true)
      setColorDialogue(true)
    }
    else if (ColorRef.current?.contains(e.target)) {
      setBackdropOpened(true)
      setColorDialogue(true)
    }
    else {
      setBackdropOpened(false)
      setColorDialogue(false)
    }
  }


  useEffect(() => {
    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [colorDialogue, backDropOpened])



  return (
    <SupplierLayout title="Add New Product" subtitle="When adding products, make sure to fill in completely all the required description.">
      <div ref={ColorRef} className={`h-screen w-screen z-[100] bg-[rgba(0,0,0,.25)] fixed top-0 left-0 ${backDropOpened ? 'opacity-100 visible' : 'opacity-0 invisible'} duration-500`}></div>
      <div className="min-h-screen text-black p-4 mt-4 rounded-md bg-white grid gap-7 grid-cols-1 lg:grid-cols-2">
        <div className="">
          <BaseInput2 onChange={onChange} name='productName' error={errors.productName} label="Product Name" containerClassname="" labelClassName="text-lg" inputClassName="border-2 border-gray-600" />
          <div className="grid mt-6 gap-4 grid-cols-1 sm:grid-cols-[1.5fr_1fr]">
            <SelectInput2 onChange={onChange} options={['', 'Shoes', 'Clothes', 'Bags']} labelClassname="text-black font-semibold" error={errors.category} name="category" selectClassName="border-2 border-gray-600" label="Category" />
            <SelectInput2 onChange={onChange} name="gender" error={errors.gender} options={['', 'Male', 'Female']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Gender" />
          </div>
          <div className="mt-5">
            <SelectInput2 onChange={onChange} name="brand" error={errors.brand} options={['', 'Nike', 'Hermes', 'Gucci']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Brand" />
          </div>
          <div className="">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between mt-8 text-sm font-semibold">
              <p>Add Size</p>
              <div className="flex gap-4">
                {sizes.map((size, _: number) => (
                  <div className={`h-9 w-9 text-sm border-2 rounded-md  active:scale-90 cursor-pointer duration-300 hover:border-green-500 center ${values.sizes.includes(size) ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => {
                    if (values.sizes.includes(size)) {
                      const newArray = values.sizes.filter(el => el !== size)
                      setValues({ ...values, sizes: newArray })
                    } else {
                      setValues({ ...values, sizes: [...values.sizes, size] })
                    }
                  }}>
                    {size}
                  </div>
                ))}
              </div>
              <input type="hidden" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-green-500 border-2 border-gray-600 ">
                  <BsPlus className='text-2xl' />
                </div>
                <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-red-500 border-2 border-gray-600 ">
                  <BsTrash className='text-lg' />
                </div>
              </div>
            </div>
            {errors.sizes && (
              <p className="mb-4 flex items-center gap-2 text-[18px] mt-1 leading-[15px] text-[red]">
                <InformationCircle /> {errors.sizes}
              </p>
            )}          </div>
          <div className="">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between mt-8 text-sm font-semibold">
              <p>Add Colors</p>
              <div className="flex gap-4">
                {values.colors.map((color: TColors, key: number) => (
                  <div key={key} style={{ backgroundColor: `${color.hexcode}` }} className="h-10 w-10 border-2 rounded-full active:scale-90 cursor-pointer duration-300">
                  </div>
                ))}
              </div>
              <input type="hidden" />
              <div className="flex items-center gap-3">
                <div ref={ColorBtnRef} className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-green-500 border-2 border-gray-600 ">
                  <BsPlus className='text-2xl' />
                </div>
                <div className="h-10 w-10 rounded-full center active:scale-90 cursor-pointer duration-300 hover:border-red-500 border-2 border-gray-600 ">
                  <BsTrash className='text-lg' />
                </div>
              </div>
            </div>
            {errors.colors && (
              <p className="mb-4 flex items-center gap-2 text-[18px] mt-1 leading-[15px] text-[red]">
                <InformationCircle /> {errors.colors}
              </p>
            )}
          </div>
          <div className="mt-5">
            <p className="text-black font-semibold mb-1">Product Description</p>
            <div className="h-60 border-2 rounded-xl border-gray-600">
              <textarea className="h-full p-5 outline-none border-none w-full rounded-xl" name="description" onChange={onChange}>
              </textarea>
            </div>
            {errors.description && (
              <p className="mb-4 flex items-center gap-2 text-[18px] mt-1 leading-[15px] text-[red]">
                <InformationCircle /> {errors.description}
              </p>
            )}
          </div>
        </div>



        <div className={`w-80 rounded-md z-[150] shadow-md fixed border-2 border-black p-4 bg-white shadow-black top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 duration-500 ${colorDialogue ? 'opacity-100 visible ' : 'opacity-0 invisible'}`}>
          <p className="font-semibold text-lg text-center">Add Color</p>
          <div className="space-y-6">
            <div className="">
              <BaseInput2 label="Color Name" labelClassName="text-sm" placeholder="Red" />
            </div>
            <div className="">
              <BaseInput2 label="Hex Code" labelClassName="text-sm" placeholder="Red" />
            </div>
            <BaseButton title="Add Color" tapScale={1} hoverScale={1.025} containerCLassName="bg-green-500 text-white font-semibold w-full" />
          </div>
        </div>




































        <div className="flex flex-col justify-between">
          <div className='grid-cols-1 lg:grid-cols-2 grid lg:auto-rows-[150px] gap-3'>
            <div className="bg-blue-500 center border-2 border-gray-600 rounded-md h-48 lg:h-auto">
            </div>
            <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
              <File className='h-full w-full' setFiles={setFiles} files={files} setValues={setValues} values={values} />
            </div>
            <div className="bg-white center border-2 border-gray-600 rounded-md h-48 lg:h-auto">
              <File className='h-full w-full' setFiles={setFiles} files={files} setValues={setValues} values={values} />
            </div>
            <div className="rounded-md grid grid-cols-1 grid-rows-2 gap-2">
              <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                <File className='h-full w-full' setFiles={setFiles} files={files} setValues={setValues} values={values} />
              </div>
              <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                <File className='h-full w-full' setFiles={setFiles} files={files} setValues={setValues} values={values} />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className='font-semibold'>Price</p>
            <div className="flex w-full items-center gap-3">
              <p className='font-semibold'>USD</p>
              <div className="flex-1">
                <BaseInput2 name='price' onChange={onChange} error={errors.price} inputClassName='border-2 border-gray-600' />
              </div>
            </div>
          </div>

          <div>
            <Click />
            <div className="grid grid-cols-2 gap-5 mt-7 w-[90%] ml-auto">
              <BaseButton onClick={Submit} title='Add Product' tapScale={1.025} containerCLassName='bg-black border-2 border-white shadow-md text-white font-semibold rounded-lg py-8' />
              <BaseButton title='Schedule' tapScale={1.025} containerCLassName='bg-white border-2 border-black shadow-md text-black font-semibold rounded-lg py-8' />
            </div>
          </div>
        </div>
      </div>
    </SupplierLayout >
  )
}
