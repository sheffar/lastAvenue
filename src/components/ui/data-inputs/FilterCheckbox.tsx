import { cn } from "@/utils/helpers";

type CheckboxProps = {
  label: string;
  labelClassName?: string;
  checkboxClassname?: string
};

export const Checkbox = ({ label, labelClassName, checkboxClassname }: CheckboxProps) => {
  return (
    <div className={"flex h-[45px] items-center gap-2"}>
      <div className="form-control">
        <label className="label flex h-[45px] cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className={cn("checkbox-primary checkbox", checkboxClassname)}
          />
          <span className={cn("text-md font-medium", labelClassName)}>
            {label}
          </span>
        </label>
      </div>
    </div>
  );
};
