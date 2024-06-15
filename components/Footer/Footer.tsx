import { Props } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";

export function Footer({ customClass }: Props) {
  const date = new Date().getFullYear();
  const link = process.env.LINK;

  return (
    <footer className={cn(customClass, styles.footer)}>
      <p className={styles.text}>OwlTop © 2020 - {date} Все права защищены</p>
      <a href={link} className={cn(styles.text, styles.link)} target="_blank">
        Пользовательское соглашение
      </a>
      <a href={link} className={cn(styles.text, styles.link)} target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
}
