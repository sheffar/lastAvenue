import { CSSProperties } from "react";
import { cn } from "@/utils/helpers";

export const SelectInput = ({
  name,
  defaultValue,
  options,
  selectClassName,
  selectStyles,
  label,
  containerClassname,
  labelClassname,
}: {
  name?: string;
  defaultValue?: string;
  options?: string[];
  selectClassName?: string;
  selectStyles?: CSSProperties;
  label?: string;
  containerClassname?: string;
  labelClassname?: string;
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
        name={name}
        className={cn(
          "adjust_select_arrow font-normal text-[#606060] h-14 w-full cursor-pointer rounded-[10px] py-3 pl-[1rem]  pr-[2rem] text-left text-md outline-none focus:outline-none",
          selectClassName,
        )}
        style={{ ...selectStyles }}
      >
        {defaultValue && <option className="bg-theme" disabled selected value="" defaultValue={defaultValue}>
          {defaultValue}
        </option>}
        {options?.map((item: string, idx: number) => (
          <option key={idx} className="" value={item.toLocaleUpperCase()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
