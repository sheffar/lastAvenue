import { CSSProperties } from "react";
import { cn } from "@/utils/helpers";
import { InformationCircle } from "react-huge-icons/solid";
export const SelectInput = ({
  name,
  defaultValue,
  options,
  selectClassName,
  selectStyles,
  error,
  register,
  label,
  containerClassname,
  labelClassname,
  optionClassname,
}: {
  name?: string;
  defaultValue?: string;
  options?: string[];
  selectClassName?: string;
  error?: string
  selectStyles?: CSSProperties;
  label?: string;
  register?: any
  containerClassname?: string;
  labelClassname?: string;
  onChange?: any;
  optionClassname?: string;
}) => {
  return (
    <div className="">
      <div className={cn(containerClassname)}>
        {label && (
          <label htmlFor={name} className={cn(labelClassname)}>
            {label}
          </label>
        )}
        <select
          id={name}
          {...register(`${name}`)}
          name={name}
          className={cn(
            "adjust_select_arrow text-md h-14 w-full cursor-pointer rounded-[10px] py-3 pl-[1rem] pr-[2rem]  text-left font-normal text-[#606060] outline-none focus:outline-none",
            selectClassName,
          )}
          style={{ ...selectStyles }}
        >
          {defaultValue && (
            <option
              className={cn(optionClassname)}
              disabled
              selected
              value=""
              defaultValue={defaultValue}
            >
              {defaultValue}
            </option>
          )}
          {options?.map((item: string, idx: number) => (
            <option
              key={idx}
              className={cn(optionClassname)}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="mb-4 flex items-center gap-2 text-[18px] mt-1 leading-[15px] text-[red]">
          <InformationCircle /> {error}
        </p>
      )}
    </div>
  );
};
