import { useState } from "react";
import { BsEye } from "react-icons/bs";

type Props = {
  value: string;
  label: string;
  placeholder: string;
  type: string;
  values: any;
  errors: any;
  setValues: any;
  name: string;
  setErrors: any;
  error?: string;
};

export default function CustomInput({
  error,
  label,
  placeholder,
  setErrors,
  setValues,
  values,
  errors,
  name,
  type,
  value,
}: Props) {
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "", other: ""});
    setValues({ ...values, [name]: value });
  };

  const [isPassword, setIsPassword] = useState(true);

  return (
    <div className="text-black">
      <label htmlFor="" className="mb-1 text-15 font-medium block">
        {label}
      </label>
      <div
        className={`relative h-12 rounded-md border shadow ${error?.trim() === "" ? "border-gray-600 bg-white" : "border-red-600 bg-red-100"} `}
      >
        <input
          type={`${type !== "password" ? "text" : `${isPassword ? "password" : "text"}`}`}
          value={value}
          onChange={handleOnchange}
          autoComplete="off"
          name={`${name}`}
          className="full border-none bg-transparent pl-3 outline-none"
          placeholder={`${placeholder}`}
        />
        {type === "password" && (
          <div className="">
            {isPassword ? (
              <BsEye
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setIsPassword(!isPassword)}
              />
            ) : (
              <BsEye
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setIsPassword(!isPassword)}
              />
            )}
          </div>
        )}
      </div>
      <div
        className={`w-full duration-300 ${error?.trim() === "" ? "h-0 overflow-hidden" : "h-6 overflow-visible "}`}
      >
        <p className={`text-13 text-red-500 mt-1 duration-200 `}>{error}</p>
      </div>
    </div>
  );
}
