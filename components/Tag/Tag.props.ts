import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  largeSize?: boolean;
  color: "primary" | "white" | "blue" | "red" | "gray";
  link?: string;
}
