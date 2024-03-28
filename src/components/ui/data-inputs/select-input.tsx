import { CSSProperties } from "react";
import { cn } from "@/utils/helpers";

export const SelectInput = ({
  name,
  defaultValue,
  options,
  selectClassName,
  selectStyles,
  label,
  value,
  containerClassname,
  labelClassname,
  optionClassname,
}: {
  name?: string;
  defaultValue?: string;
  options?: string[];
  selectClassName?: string;
  selectStyles?: CSSProperties;
  label?: string;
  value?: string
  containerClassname?: string;
  labelClassname?: string;
  optionClassname?: string;
}) => {
  return (
    <div className={cn(containerClassname)}>
      {label && (
        <label htmlFor={name} className={cn(labelClassname)}>
          {label}
        </label>
      )}
      <select
        id={name}
        value={value} 
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
  );
};
