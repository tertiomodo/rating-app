import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export function Tag({ children }: TagProps): JSX.Element {
  return <div className={styles.tag}>{children}</div>;
}
