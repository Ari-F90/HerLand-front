import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

export type MenuOptions = {
  label: string;
  path: string;
};

export const menuOptions: MenuOptions[] = [
  { label: "Home", path: "/home" },
  { label: "About us", path: "/about" },
  { label: "Herstory makers", path: "/figures" },
];

type MenuProps = {
  props: MenuOptions[];
};

export const Menu = ({ props }: MenuProps) => {
  return (
    <>
      <div className={styles.menucontainer}>
        <div>
          <nav className={styles.menuburger}>
            <img
              className={styles.burgerImg}
              src="../../../img/menu-burger.png"
              alt="Burger menu"
            ></img>
            <div className={styles.container__flex}>
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
          </nav>
        </div>
      </div>
    </>
  );
};
