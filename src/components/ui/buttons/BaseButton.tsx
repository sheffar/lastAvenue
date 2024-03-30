import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/helpers";

type BaseButtonProps = {
  children?: React.ReactNode;
  containerCLassName?: string;
  onClick?: MouseEventHandler;
  hoverScale?: number;
  hoverOpacity?: number;
  tapScale?: number;
  loading?: boolean
  background?: string
  icon?: any
  title?: string;
};
export const BaseButton = ({
  children,
  containerCLassName,
  onClick,
  background,
  loading,
  hoverScale = 1.1,
  hoverOpacity = 0.9,
  icon,
  tapScale = 0.8,
  title,
}: BaseButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: hoverScale,
        opacity: hoverOpacity,
        transition: { duration: 0.1 },
      }}
      style={{backgroundColor: `${background}`}}
      whileTap={{ scale: tapScale, borderRadius: "15px" }}
      className={cn(
        "flex h-[45px] cursor-pointer select-none items-center justify-center rounded-[12px]  p-[10px] text-center",
        containerCLassName,
      )}
      onClick={onClick}
    >
      {loading ? 'Loading....' :
        <div className="flex items-center gap-2">
          {icon}
          {title || children}
        </div>
      }
    </motion.button>
  );
};
