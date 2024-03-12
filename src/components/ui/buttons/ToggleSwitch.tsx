import { useState } from "react";

const ToggleSwitch = ({
  toggleValue,
  // handleToggle,
  // name,
}: {
  toggleValue?: boolean;
  // handleToggle: () => ;
  // name?: string;
}) => {
  console.log("toggleVal", toggleValue);
  
  const [isChecked, setIsChecked] = useState(false);

  function handleT() {
    setIsChecked(!isChecked);
  }

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleT}
          className="sr-only"
        />
        <div
          className={`box block h-7 w-[55px] rounded-full ${
            isChecked ? "bg-[#0F60FF]" : "bg-[#606060]"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
            isChecked ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
