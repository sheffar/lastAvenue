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
  title?: string;
};
export const BaseButton = ({
  children,
  containerCLassName,
  onClick,
  hoverScale = 1.1,
  hoverOpacity = 0.9,
  tapScale = 0.8,
  title,
}: BaseButtonProps) => {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        opacity: hoverOpacity,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: tapScale, borderRadius: "15px" }}
      className={cn(
        "flex h-[45px] bg-[red] cursor-pointer select-none items-center justify-center rounded-[12px]  p-[10px] text-center",
        containerCLassName,
      )}
      onClick={onClick}
    >
      {title || children}
    </motion.div>
  );
};
