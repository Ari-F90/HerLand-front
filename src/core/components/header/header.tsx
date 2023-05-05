import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.header__logo}
          src="../../../favicon.svg"
          alt="Favicon logo"
        ></img>
      </div>
      <div>
        <img
          className={styles.header__burger}
          src="../../../img/menu-burger.png"
          alt="Burger menu"
        ></img>
      </div>
    </div>
  );
}
