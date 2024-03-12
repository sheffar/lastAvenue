import { ReactNode, useState } from "react";

interface ITabProps {
  label: string;
  children: ReactNode;
}

const Tabs = ({ children }: IChildren) => {
  // const [activeTab, setActiveTab] = useState<string>(children![0].props.label);
  const [activeTab, setActiveTab] = useState<string>(
    (children as React.ReactElement<ITabProps>[])[0].props.label,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="">
      <div className="flex justify-start border-b border-gray-300">
        {(children as React.ReactElement<ITabProps>[]).map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-b-[3px] border-[#232323] text-[#000]"
                : "border-[#B6B6B6] text-gray-700"
            } flex-1 py-2 font-semibold`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {(children as React.ReactElement<ITabProps>[]).map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

// const Tab = ({ label, children }: ITabProps) => {
//   return (
//     <div label={label} className="hidden">
//       {children}
//     </div>
//   );
// };

const Tab = ({ label, children }: ITabProps) => {
  return (
    <div className="hidden" data-label={label}>
      {children}
    </div>
  );
};
export { Tab, Tabs };
