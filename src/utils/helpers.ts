import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

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