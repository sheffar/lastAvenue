
type Props = {
    label: string,
    placeholder: string,
    normal: boolean,
    icon: any
}

export default function Input({ label, placeholder, normal, icon } : Props) {
  return (
    <div
      className={`w-full flex gap-2 ${
        normal ? "flex-col" : "flex-col-reverse"
      }`}
    >
      <div className="flex gap-1">
        <span className='text-lg'>{icon}</span>
        <p className="font-semibold text-black">{label}</p>
      </div>
      <div className="h-11 bg-gray-200 rounded-md flex w-full  ">
        <input
          className="text h-full bg-transparent text-sm px-3 w-full outline-none "
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
