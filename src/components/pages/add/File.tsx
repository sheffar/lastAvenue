import { cn } from '@/utils/helpers'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { TValues } from './Main';


type TErrors ={
    productName: string;
    category: string;
    brand: string;
    description: string;
    gender: string;
    price: string;
    images: string;
}


type Props = {
    className?: string
    files?: (string | File)[]
    values: TValues
    setFiles: () => void
    setValues: () => void
    setErrors: () => void
    errors: TErrors
}

export default function File({ className, files, setFiles, values, setValues, errors, setErrors }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [fileURL, setFileURL] = useState<string | undefined>();
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileURL(URL.createObjectURL(file))
            setFiles([...files, file])
            setValues({ ...values, images: files })
            setErrors({...errors, images: ''})
        }
    };

    useEffect(() => {

    }, [files])

    return (
        <div className={cn(className)} >
            <div className='h-full w-full relative'>
                <div className="h-full w-full relative text-center text-sm center">
                    <input type="file" onChange={handleFileChange} hidden ref={inputRef} />
                    <p>Drag your Images here <br /> or select <button onClick={() => inputRef?.current?.click()}
                        className='text-blue-500'>Click to browse</button></p>
                </div>
                {fileURL &&
                    <div className="">
                        <img src={fileURL} alt="" className='h-full z-20 w-full object-cover absolute top-0 left-0' />
                        <div className="h-10 w-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40 rounded-full bg-black cursor-pointer duration-300 hover:bg-red-500 active:scale-90 border-2 text-white center hover:scale-110" onClick={() => setFileURL('')}>
                            <IoCloseOutline className='text-2xl stroke-2' />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
