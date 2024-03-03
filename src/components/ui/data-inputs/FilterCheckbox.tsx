import { CSSProperties } from "react";
import { cn } from "@/utils/helpers";

type CheckboxProps = {
  label: string;
  labelClassName?: CSSProperties;
};

export const Checkbox = ({ label, labelClassName }: CheckboxProps) => {
  return (
    <div className={"flex h-[45px] items-center gap-2"}>
      <div className="form-control">
        <label className="label flex h-[45px] cursor-pointer items-center gap-2">
          <input type="checkbox" className="checkbox-primary checkbox" />
          <span
            className={cn("font-light text-md leading-[20px]", labelClassName)}
          >
            {label}
          </span>
        </label>
      </div>
    </div>
  );
};
