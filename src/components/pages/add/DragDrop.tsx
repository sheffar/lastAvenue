import Image from '../../../assets/icons/image.svg'

export default function DragDrop() {
  return (
    <div className='flex flex-col gap-3 center'>
        <img src={Image} className='h-5 w-5 translate-y-3' alt="" />
        <p className='text-13'>Drag your images here <br /> or select <span className='text-blue-500'>Click to browse</span></p>
    </div>
  )
}
