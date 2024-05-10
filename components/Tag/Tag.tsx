import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export function Tag({ children, size = "S", color, link = "none" }: TagProps): JSX.Element {
  return link !== "none" ? (
    <a
      href={link}
      target="_blank"
      className={cn(styles.tag, styles.link, {
        [styles.small]: size === "S",
        [styles.large]: size === "L",
        [styles.primary]: color === "primary",
        [styles.white]: color === "white",
        [styles.blue]: color === "blue",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
      })}
    >
      {children}
    </a>
  ) : (
    <div
      className={cn(styles.tag, {
        [styles.small]: size === "S",
        [styles.large]: size === "L",
        [styles.primary]: color === "primary",
        [styles.white]: color === "white",
        [styles.blue]: color === "blue",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
      })}
    >
      {children}
    </div>
  );
}
