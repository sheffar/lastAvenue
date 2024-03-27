import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

type Props = {
    icon: string
    color: string
    price: string
    arrowColor: string
    title: string
    value: number
}

export default function Card({ icon, color, title, price, arrowColor, value }: Props) {
    return (
        <div className="rounded-xl bg-white shadow h-32 flex justify-between p-6 gap-2 items-center border-2 border-[#D3D3D3]">
            <div className="">
                <div className="h-12 w-12 rounded-full center" style={{ backgroundColor: `${color}` }}>
                    <img src={`${icon}`} className="h-8 w-8 object-contain" alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <p>{title}</p>
                <div className="flex items-center gap-3">
                    <p className='text-base xl:text-2xl font-semibold'>{price}</p>
                </div>
            </div>
            <div className="flex self-end mb-3 text-11 gap-1 text-green-500 bg-gray-300 p-[6px] rounded-xl items-center">
                {value > 2 ? <BsArrowUp style={{ color: `${arrowColor}` }} /> : <BsArrowDown style={{ color: `${arrowColor}` }} />}
                <p style={{ color: `${arrowColor}` }}>{value}</p>
            </div>
        </div>
    )
}
