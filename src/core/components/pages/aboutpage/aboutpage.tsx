import styles from "./aboutpage.module.scss";

export default function AboutPage() {
  return (
    <>
      <section className={styles.aboutpage}>
        <h2 className={styles.aboutpage__title}>About the project</h2>
        <div className={styles.aboutpage__container}>
          <div className={styles.aboutpage__text}>
            <p className={styles.aboutpage__section}>
              Welcome to{" "}
              <span className={styles.aboutpage__stronger}>HerLand!</span>
            </p>
            <p>
              A project that aims to{" "}
              <span className={styles.aboutpage__stronger}>
                fill the gap that exists in textbooks
              </span>
              , often focus on the accomplishments of men, while{" "}
              <span className={styles.aboutpage__stronger}>
                ignoring the contributions of women
              </span>{" "}
              throught history.
            </p>
            <p>
              Learning about historical women is essential for{" "}
              <span className={styles.aboutpage__stronger}>
                inspiring future generations of girls
              </span>{" "}
              to pursue whatever goal they could have in their lives.
            </p>
            <p>
              <span className={styles.aboutpage__stronger}>
                Thank you for visiting this site
              </span>{" "}
              and hope to serve as a resource for anyone curious about stories
              not told.
            </p>
          </div>
          <div className={styles.aboutpage__imgdiv}>
            <img
              className={styles.aboutpage__img}
              src="../../../../../img/girl.jpeg"
              alt="Girl imagines what to study"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
