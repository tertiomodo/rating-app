import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: "primary" | "ghost";
  children: ReactNode;
}
