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
  value: any,
  labelClassName?: string;
  showValidTick?: boolean;
  setValues: React.Dispatch<
    React.SetStateAction<{
      fullname: string;
      email: string;
      category: string;
      password: string;
      confirm_password: string;
      rememberMe: boolean;
    }>
  >;
  values: any,
  error?: string;
  readonly?: boolean;
  reference?: any;
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
  value,
  values,
  error,
  reference,
  setValues,
  name,
  readOnly,
  ...props
}: BaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [pwdField, setPwdField] = useState("wdwdwd");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
    console.log(values)
    if (type === "password") {
      setPwdField(showPassword ? "" : "*".repeat(inputValue.length));
    }
    console.log(inputValue);
  };

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
          ref={reference}
          name={`${name}`}
          value={value}
          onChange={handleInputChange}
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          // type={"text"}
          className={cn(
            "text-themeText h-14 w-full cursor-pointer rounded-[10px] border bg-transparent py-3 pl-[1rem] pr-[2rem] text-left text-sm  font-light placeholder-gray-400 outline-none placeholder:font-medium placeholder:text-[rgb(96,96,96)] focus:outline-none",
            inputClassName,
          )}
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
