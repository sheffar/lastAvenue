import { BaseInput2 } from "@/components/ui/data-inputs/BaseInput2"
import { ChangeEvent, useState } from "react"
import { BsTrash } from "react-icons/bs"

type TList = string[]

export default function Click() {
    const [input, setInput] = useState('')
    const [list, setList] = useState<TList>([])
    const onChange = (e:  ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <form className="" onSubmit={(e) => {
                e.preventDefault()
                setList([...list, input])
                setInput('')
            }}>
                {/* <input type="text" value={input} onChange={(e: any) => setInput(e.target.value)} className="h-14 rounded-md w-full px-4 border-2" /> */}
                <BaseInput2 onChange={onChange} name="input" value={input} containerClassname="border-2 border-gray-600 rounded-md" inputClassName="border-none" />
            </form>
            {list.length > 0 &&
                <div className="max-h-24 p-4 mt-6 flex-wrap overflow-y-auto rounded-lg flex gap-3 border-2">
                    {list.map((data, key) => (
                        <div className="px-5 shadow-md py-3 relative bg-black rounded-lg cursor-pointer">
                            <p className="px-4 py-1 rounded-md text-white text-sm font-semibold h-fit">{data}</p>
                            <BsTrash className="absolute top-2 right-2 text-white cursor-pointer" onClick={() => {
                                const newMap = list.filter((_, index) => key !== index)
                                setList(newMap)
                            }}/>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
