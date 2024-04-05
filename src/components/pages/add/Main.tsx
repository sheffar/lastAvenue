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
}

export default function Main() {

  const [backDropOpened, setBackdropOpened] = useState(false)
  const [colorDialogue, setColorDialogue] = useState(false)


  const [values, setValues] = useState<TValues>({
    productName: '',
    category: '',
    brand: '',
    description: '',
    price: 0,
    gender: '',
    images: [''],
  })

  const [errors, setErrors] = useState({
    productName: '',
    category: '',
    brand: '',
    description: '',
    gender: '',
    price: '',
    images: '',
  })

  const ColorRef = useRef<any>()
  const ColorBtnRef = useRef<any>()




  const [files, setFiles] = useState<(string | File)[]>([])


  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.name === 'price' ? parseInt(e.target.value) : e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }


  const Submit = () => {
    if (!values.productName || !values.category || values.brand || !values.description || !values.gender || !values.images || !values.price || !values.productName || !values.images?.length > 0 ) {
      setErrors({
        brand: values.brand ? '' : 'Please select a brand',
        category: values.category ? '' : 'Please select a category',
        gender: values.gender ? '' : 'Please select a gender',
        description: values.description ? '' : 'Please add a description',
        images: values.images.length > 1 ? '' : 'Please select a file',
        price: values.price ? '' : 'Please add a price',
        productName: values.price ? '' : 'Please a a Product Name'
      })
    }
    
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
          <BaseInput2 onChange={onChange} name='productName' error={errors.productName} label="Product Name" containerClassname="" labelClassName="text-black text-base font-semibold" inputClassName="border-2 border-gray-600" />
          <div className="grid mt-6 gap-4 grid-cols-1 sm:grid-cols-[1.5fr_1fr]">
            <SelectInput2 onChange={onChange} options={['', 'Shoes', 'Clothes', 'Bags']} labelClassname="text-black font-semibold" error={errors.category} name="category" selectClassName="border-2 border-gray-600" label="Category" />
            <SelectInput2 onChange={onChange} name="gender" error={errors.gender} options={['', 'Male', 'Female']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Gender" />
          </div>
          <div className="mt-5">
            <SelectInput2 onChange={onChange} name="brand" error={errors.brand} options={['', 'Nike', 'Hermes', 'Gucci']} labelClassname="text-black font-semibold" selectClassName="border-2 border-gray-600" label="Brand" />
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
          <div className="">
            <div className='grid-cols-1 lg:grid-cols-2 grid lg:auto-rows-[150px] gap-3'>
              <div className="bg-white center border-2 border-gray-600 rounded-md h-48 lg:h-auto">
                <File className='h-full w-full' setErrors={setErrors} errors={errors} setFiles={setFiles} files={files} setValues={setValues} values={values} />
              </div>
              <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                <File className='h-full w-full' setErrors={setErrors} errors={errors} setFiles={setFiles} files={files} setValues={setValues} values={values} />
              </div>
              <div className="bg-white center border-2 border-gray-600 rounded-md h-48 lg:h-auto">
                <File className='h-full w-full' setErrors={setErrors} errors={errors} setFiles={setFiles} files={files} setValues={setValues} values={values} />
              </div>
              <div className="rounded-md grid grid-cols-1 grid-rows-2 gap-2">
                <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                  <File className='h-full w-full' setErrors={setErrors} errors={errors} setFiles={setFiles} files={files} setValues={setValues} values={values} />
                </div>
                <div className="bg-white center border-2 border-gray-600  rounded-md h-48 lg:h-auto">
                  <File className='h-full w-full' setErrors={setErrors} errors={errors} setFiles={setFiles} files={files} setValues={setValues} values={values} />
                </div>
              </div>
            </div>
            {errors.images && (
              <p className="mb-4 flex items-center gap-2 text-[18px] mt-3 leading-[15px] text-[red]">
                <InformationCircle /> {errors.images}
              </p>
            )}
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
