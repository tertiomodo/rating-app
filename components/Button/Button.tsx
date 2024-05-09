import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";
import ArrowImage from "./arrow.svg";

export function Button({ appearance, children, arrowImg = false, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrowImg && <ArrowImage className={styles.arrow} />}
    </button>
  );
}
