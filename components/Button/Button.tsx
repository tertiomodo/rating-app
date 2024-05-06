import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export function Button({ appearance, children }: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.button} ${appearance === "primary" ? styles.primary : styles.ghost}`}>
      {children}
    </button>
  );
}
