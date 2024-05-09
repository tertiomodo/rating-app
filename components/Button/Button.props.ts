import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: "primary" | "ghost";
  arrowImg?: boolean;
}
