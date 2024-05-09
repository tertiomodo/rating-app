import { PProps } from "./P.props";
import cn from "classnames";
import styles from "./P.module.css";

export function P({ children, size = "M", ...props }: PProps): JSX.Element {
  return (
    <p
      className={cn({ [styles.small]: size === "S", [styles.medium]: size === "M", [styles.large]: size === "L" })}
      {...props}
    >
      {children}
    </p>
  );
}
