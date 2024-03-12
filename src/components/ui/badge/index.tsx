import { XStack } from "../stack";
import { cn } from "@/utils/helpers";

interface BadgeProps {
  children?: React.ReactNode;
  text: string | number;
  className?: string;
  status: BadgeStatus;
}

export const Badge = (props: BadgeProps) => {
  const { children, text, className, status } = props;

  const getClassColor = () => {
    switch (status) {
      case "perma":
        return "text-[#7152F3]";
      case "negative":
        return " text-[#ED4C5C]";
      case "neutral":
        return "bg-themeGrey text-themeGrey bg-opacity-20";
      case "positive":
        return "text-[#1F9724] ";
      case "caution":
        return "text-[#F5D529] ";
    }
  };

  return (
    <XStack
      className={cn(
        "flex w-auto items-start justify-start gap-1 rounded-md bg-opacity-10 p-1 text-xs",
        getClassColor(),
        className,
      )}
    >
      {children}
      {text}
    </XStack>
  );
};
