import { CSSProperties, InputHTMLAttributes, useState } from "react";
import { InformationCircle, CheckMarkCircle } from "react-huge-icons/outline";
import { cn } from "@/utils/helpers";
import { RxEyeClosed } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";

interface BaseInputProps {
  label?: string;
  placeholder?: string;
  containerClassname?: string;
  inputContainerStyle?: CSSProperties;
  type?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  showValidTick?: boolean;
  error?: string;
  readonly?: boolean;
}
export const BaseInput = ({
  label,
  placeholder,
  containerClassname,
  type,
  inputContainerClassName,
  inputClassName,
  labelClassName,
  showValidTick,
  error,
  readOnly,
  ...props
}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  // const [pwdField, setPwdField] = useState("");

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  //   if (type === "password") {
  //     setPwdField(showPassword ? "" : "*".repeat(inputValue.length));
  //   }
  // };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={cn(containerClassname)}>
      {label && (
        <h1
          dangerouslySetInnerHTML={{ __html: label }}
          className={cn(
            "text-blackColor font-darkerGrotesque-bold mb-2  text-left text-[28px] font-medium leading-[25px]",
            labelClassName,
          )}
        ></h1>
      )}

      <div
        style={{ opacity: readOnly ? ".5" : 1 }}
        className={cn(
          "relative flex w-auto flex-row items-center justify-between gap-1 rounded-xl",
          readOnly ? "opacity-[.5]" : "opacity-[1]",
          inputContainerClassName,
        )}
      >
        <input
          autoComplete="True"
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          // type={"text"}
          className={cn(
            "text-themeText placeholder:text-[#606060] placeholder-gray-400 placeholder:font-medium h-14 w-full cursor-pointer rounded-[10px] border bg-transparent py-3 pl-[1rem]  pr-[2rem] text-left text-sm font-light outline-none focus:outline-none",
            inputClassName,
          )}
          // value={type === "password" && !showPassword ? pwdField : inputValue}
          // onChange={handleInputChange}
          placeholder={placeholder}
          readOnly={readOnly}
          {...props}
        />
        {type == "password" &&
          (showPassword ? (
            <RxEyeClosed
              onClick={handleTogglePassword}
              className="cursor-pointer text-[30px] text-[#111110]"
            />
          ) : (
            <TfiEye
              onClick={handleTogglePassword}
              className="cursor-pointer text-[30px] text-[#111110]"
            />
          ))}
        {showValidTick && <CheckMarkCircle className="ml-3 text-[30px] text-[green]" />}
      </div>
      {error && (
        <p className="mb-4 flex items-center gap-2 text-[20px] leading-[15px] text-[red]">
          <InformationCircle /> {error}
        </p>
      )}
    </div>
  );
};
