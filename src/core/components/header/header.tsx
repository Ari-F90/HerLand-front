import { Link } from "react-router-dom";
import styles from "./header.module.scss";

type HeaderProps = { children: JSX.Element };
export function Header({ children }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.logos}>
        <Link to="/home">
          <img
            className={styles.header__logo}
            src="../../../../img/favicon.svg"
            alt="Favicon logo"
          ></img>
        </Link>

        <img
          className={styles.logodesktop}
          src="../../../img/logo.svg"
          alt="Logo desktop"
        ></img>
      </div>
      <div>{children}</div>
    </div>
  );
}
