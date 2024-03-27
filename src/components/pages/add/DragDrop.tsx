import Image from '../../../assets/icons/image.svg'

export default function DragDrop() {
  return (
    <div className='flex flex-col gap-3 center relative '>
      <input type="file" name="" className="absolute appearance-none opacity-0 cursor-pointer h-20 w-20 mt-12 top-1/2 -translate-y-1/2 translate-x-1/3" />
      <img src={Image} className='h-5 w-5 translate-y-3' alt="" />
      <p className='text-13'>Drag your images here <br /> or select <span className='text-blue-500 cursor-pointer'>Click to browse</span></p>
    </div>
  )
}
