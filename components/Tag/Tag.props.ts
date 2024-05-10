import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  size?: "S" | "L";
  color: "primary" | "white" | "blue" | "red" | "gray";
  link?: string;
}
