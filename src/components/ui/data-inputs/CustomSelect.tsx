
type Props = {
  options: any
  error: string
  errors: any
  setErrors: any
  name: string
  setValues: any
  values: any
  value: string
  background: string
};

export default function CustomSelect({ options, setErrors, error, setValues, value, values, name, errors }: Props) {

  return (
    <div className="w-full">

      <div style={{ background: `${error.trim() === "" ? `rgb(219 234 254)` : '#f7b8b8'}` }} className="px-3 h-12 rounded-md shadow-md w-full">
        <select name="" className="relative w-full h-full bg-transparent bg-blue-100 text-15 cursor-pointer outline-none border-none" value={value} onChange={(e: any) => {
          setErrors({ ...errors, [name]: "" })
          setValues({ ...values, [name]: e.target.value })
        }}>
          {['...', ...options].map((data: string, key: number) => (
            <option value={`${key !== 0 ? `${data.toLowerCase()}` : ''}`} className=" capitalize" key={key}>{data}</option>
          ))}
        </select>
      </div>
      <div
        className={`w-full duration-300 ${error.trim() === "" ? "h-0 overflow-hidden" : "h-6 overflow-visible "}`}
      >
        <p className={`text-13 text-red-500 mt-1 duration-200 `}>Please select from the dropdown</p>
      </div>
    </div>
  );
}
