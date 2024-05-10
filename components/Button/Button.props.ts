import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  color: "primary" | "white";
  arrowImg?: boolean;
}
