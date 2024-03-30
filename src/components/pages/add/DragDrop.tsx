import { ChangeEvent, useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

export default function DragDrop() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<string | undefined>(undefined);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(URL.createObjectURL(file))
    }
  };

  return (
    <div className='h-full w-full relative'>
      <div className="h-full w-full relative text-center text-sm center">
        <input type="file" onChange={handleFileChange} hidden ref={inputRef} />
        <p>Drag your Images here <br /> or select <button onClick={() => inputRef?.current?.click()}
          className='text-blue-500'>Click to browse</button></p>
      </div>
      {file &&
        <div className="">
          <img src={file} alt="" className='h-full z-20 w-full object-cover absolute top-0 left-0' />
          <div className="h-10 w-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40 rounded-full bg-black cursor-pointer duration-300 hover:bg-red-500 active:scale-90 border-2 text-white center hover:scale-110" onClick={() => setFile('')}>
            <IoCloseOutline className='text-2xl stroke-2' />
          </div>
        </div>
      }
    </div>
  )
}
