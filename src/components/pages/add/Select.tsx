
type Props = {
    label: string
    options: string[]
}


export default function Select({ label, options }: Props) {
    return (
        <div className="">
            <p className="font-semibold text-15">{label}</p>
            <div className="h-12 w-fll rounded-lg border-2 ">
                <select name="" className="h-full px-2 w-full outline-none border-none bg-transparent ">
                    {options.map((data, key) => (
                        <option key={key} className="font-semibold text-13" value={`${data.toLowerCase()}`}>{data}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
