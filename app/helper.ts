"use client";
import { usePathname } from "next/navigation";

//Return currently active path
export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    if ((path === "/" && pathname !== path) || path === "") {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
}
