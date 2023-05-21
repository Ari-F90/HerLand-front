import { FigureList } from "../../figureList/figureList";
import styles from "./figureListpage.module.scss";

export default function FigureListPage() {
  return (
    <>
      <section className={styles.figurelist}>
        <h2 className={styles.figurelist__title}>Herstory makers</h2>
        <FigureList></FigureList>
      </section>
    </>
  );
}
