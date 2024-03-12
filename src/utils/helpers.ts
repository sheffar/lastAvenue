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

interface CreateAvatarUrlArgs {
  /** Can be the user's name or the imgSrc. */
  avatarUrl: string;
  /** @see https://ui-avatars.com/ for additional properties. */
  additionalParams?: Record<string, string | number>;
}

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

export const createAvatarUrl = (args: CreateAvatarUrlArgs) => {
  const { avatarUrl: url, additionalParams } = args;

  if (url.includes("http")) return url;

  const params = new URLSearchParams();
  params.append("name", url);
  params.append("size", "256");

  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      params.append(key, String(value));
    });
  }

  return `https://ui-avatars.com/api.jpg?${params.toString()}`;
};


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


export function statusColorCode(statusText: string): BadgeStatus {
  const positives = ["completed", "approved", "on time", "submitted"];
  const negatives = ["reject", "late", "failed"];
  const cautions = ["processing", "pending"];
  const others = ["permanent"];

  const text = statusText.toLowerCase();
  if (positives.includes(text)) return "positive";
  else if (negatives.includes(text)) return "negative";
  else if (cautions.includes(text)) return "caution";
  else if (others.includes(text)) return "perma";
  else return "neutral";
}
