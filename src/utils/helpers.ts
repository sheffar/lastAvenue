import clsx, { ClassArray } from "clsx";
import toast, { ToastPosition } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

interface handleToastNotifsInterface {
  type: "success" | "error" | "loading" | "custom";
  message: string;
  id?: string;
  position?: ToastPosition | undefined;
  duration?: number;
  dark?: boolean;
}

type ToastMethod = {
  success: typeof toast.success;
  error: typeof toast.error;
  loading: typeof toast.loading;
  custom: typeof toast.custom;
};

export function ScrollToTop() {
  const duration = 500;
  const start = window.pageYOffset; // don't remove
  const target = 0;
  const startTime = performance.now();

  function step(currentTime: number) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, easeInOutQuad(start, target, progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  function easeInOutQuad(start: number, end: number, progress: number) {
    return start + (end - start) * progress * (3 - 2 * progress);
  }
  requestAnimationFrame(step);
  return null;
}

export function cn(...inputs: ClassArray) {
  return twMerge(clsx(inputs));
}

export function handleToastNotifs({
  type,
  message,
  id,
  position = "top-center",
  duration,
  dark,
}: handleToastNotifsInterface) {
  (toast as ToastMethod)[type](message, {
    id,
    duration: duration || 4000,
    position,

    // Styling
    style: dark
      ? {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        }
      : {},
    className: "",

    // Custom Icon
    // icon: "👏",

    // Change colors of success/error/loading icon
    // iconTheme: {
    //   primary: "green",
    //   secondary: "#fff",
    // },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
}

export function handleReqResErrors(e: ICustomError, message?: string) {
  handleToastNotifs({
    type: "error",
    position: "top-right",
    id: "error",
    message: message || e?.response?.data?.message || "An error occured",
  });
}
