import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useFigures } from "../../../figures/hooks/use.figures";
import { Figure } from "../../../figures/models/figure";
import { FigureApiRepo } from "../../../figures/repository/figure.repo";
import styles from "./details.module.scss";

export type CardProps = {
  figure: Figure;
};

export default function Details() {
  const { id } = useParams();
  const repo = useMemo(() => new FigureApiRepo(), []);
  const { figures } = useFigures(repo);

  const figureDetails: Figure | undefined = figures.find(
    (item) => item.id === id
  );

  return (
    <>
      <div className={styles.details}>
        <h2 className={styles.details__title}>A close look</h2>
        <div className={styles.details__container}>
          <div className={styles.details__quotecontainer}>
            <span className={styles.card__quote}>{figureDetails?.quote}</span>
            <div className={styles.details__imgcontainer}>
              <img
                src={figureDetails?.img}
                alt="Details card"
                className={styles.details__img}
              />
            </div>
          </div>
          <div className={styles.details__historycontainer}>
            <div className={styles.details__contname}>
              <span className={styles.details__name}>
                {figureDetails?.name}
              </span>
            </div>
            <div className={styles.details__contbirth}>
              <span className={styles.details__birth}>
                {figureDetails?.birth}
              </span>
            </div>
            <div className={styles.details__contdesc}>
              <span className={styles.details__desc}>
                {figureDetails?.description1}
              </span>
              <span className={styles.details__desc}>
                {figureDetails?.description2}
              </span>
              <span className={styles.details__desc}>
                {figureDetails?.description3}
              </span>
              <span className={styles.details__desc}>
                {figureDetails?.description4}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.button_containerflex}>
          <div className={styles.button_container}>
            <Link to={"/figures"}>
              <button className={styles.button_top}>GO BACK</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
