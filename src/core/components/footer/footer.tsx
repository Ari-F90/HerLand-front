import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <address>
          <div>
            Designed with
            <img
              className={styles.footer__icon}
              src="../../../../img/footer.svg"
              alt="Footer icon"
            ></img>
          </div>
        </address>
      </div>
    </footer>
  );
}
