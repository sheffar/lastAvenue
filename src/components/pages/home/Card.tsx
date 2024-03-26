import { BsArrowUp } from 'react-icons/bs'

type Props = {
    icon: string
    color: string
    price: string
    title: string
}

export default function Card({ icon, color, title, price }: Props) {
    return (
        <div className="rounded-xl bg-white shadow h-32 flex justify-between p-4 gap-2 items-center border-2 border-[#D3D3D3]">
            <div className="h-12 w-12 rounded-full center" style={{ backgroundColor: `${color}` }}>
                <img src={`${icon}`} className="h-8 w-8 object-contain" alt="" />
            </div>
            <div className="flex flex-col">
                <p>{title}</p>
                <div className="flex items-center gap-3">
                    <p className='text-2xl font-semibold'>{price}</p>
                    <div className="flex gap-1 text-green-500 text-sm bg-gray-300 p-[6px] rounded-xl items-center">
                        <BsArrowUp />
                        <p>1.4</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
