import { Body, Sidebar, Footer } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Body customClass={styles.body} />
      <Sidebar customClass={styles.sidebar} />
      <Footer customClass={styles.footer} />
    </div>
  );
}
