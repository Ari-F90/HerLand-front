import { Link } from "react-router-dom";
import { Figure } from "../../../figures/models/figure";
import styles from "./card.module.scss";

type CardProps = {
  figure: Figure;
};

export function Card({ figure }: CardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.card__container}>
        <div className={styles.card__element}>
          <Link to={`/details/${figure.id}`} relative="path">
            <img
              className={styles.card__img}
              src={figure.img}
              alt="figure's icon"
            ></img>
          </Link>
        </div>

        <div className={styles.card__properties}>{figure.name}</div>
      </div>
    </li>
  );
}
