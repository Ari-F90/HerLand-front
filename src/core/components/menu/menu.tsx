import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

export type MenuOptions = {
  label: string;
  path: string;
};

export const menuOptions: MenuOptions[] = [
  { label: "Home", path: "/home" },
  { label: "About the project", path: "/about" },
  { label: "Herstory makers", path: "/figures" },
];

type MenuProps = {
  props: MenuOptions[];
};

export const Menu = ({ props }: MenuProps) => {
  return (
    <>
      <div className={styles.menucontainer}>
        <img
          className={styles.logodesktop}
          src="../../../img/logo.svg"
          alt="Logo desktop"
        ></img>

        <div className={styles.menuburger}>
          <img
            className={styles.burgerImg}
            src="../../../img/menu-burger.png"
            alt="Burger menu"
          ></img>

          <ul className={styles.menupaths}>
            {props.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className={styles.menu_item}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
