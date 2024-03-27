
type Props = {
    label?: string
    placeholder?: string
}


export default function Input({label, placeholder}: Props) {
    return (
        <div className="">
            <p className="font-semibold text-15">{label}</p>
            <div className="h-12 w-fll rounded-lg border-2 ">
                <input type="text" className="bg-transparent h-full w-full pl-3 outline-none border-none" placeholder={`${placeholder || ""}`}/>
            </div>
        </div>
    )
}
