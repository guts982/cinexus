import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatNumberWithAbbreviations(number: number): string {
  if (number >= 1e9) {
      return (number / 1e9).toFixed(2) + "B";
  } else if (number >= 1e6) {
      return (number / 1e6).toFixed(2) + "M";
  } else if (number >= 1e3) {
      return (number / 1e3).toFixed(2) + "K";
  } else {
      return number.toString();
  }
}

