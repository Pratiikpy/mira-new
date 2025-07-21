import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Bulletproof, Vercel-compatible image path resolver
export { getImagePath } from '@/assets/images';
