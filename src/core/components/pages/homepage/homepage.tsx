import styles from "./homepage.module.scss";

export default function HomePage() {
  return (
    <>
      <section className={styles.homepage}>
        <div className={styles.homepage__first}>
          <div>
            <img
              className={styles.homepage__img}
              src="../../../img/figures.svg"
              alt="Women's shadow"
            ></img>
          </div>
        </div>
        <div className={styles.homepage__second}>
          <div className={styles.homepage__title}>Her story is our story</div>
          <p className={styles.homepage__text}>
            Hidden women of the past they forgot to teach you about
          </p>
          <button className={styles.homepage__button}>
            DISCOVER THEM HERE
          </button>
        </div>
      </section>
    </>
  );
}
