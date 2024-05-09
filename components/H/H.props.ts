import { ReactNode } from "react";

export interface HProps {
  size: "h1" | "h2" | "h3";
  children: ReactNode;
}
