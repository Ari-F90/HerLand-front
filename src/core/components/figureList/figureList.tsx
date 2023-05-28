import { useEffect, useMemo } from "react";

import { useFigures } from "../../../figures/hooks/use.figures";
import { Figure } from "../../../figures/models/figure";
import { FigureApiRepo } from "../../../figures/repository/figure.repo";

import { Card } from "../card/card";
import styles from "./figureList.module.scss";

export function FigureList() {
  const repo = useMemo(() => new FigureApiRepo(), []);
  const { figures, loadFigures } = useFigures(repo);

  useEffect(() => {
    loadFigures();
  }, [loadFigures]);

  const setPage = (pageChange?: number, category?: string) =>
    loadFigures(pageChange, category);
  return (
    <>
      <div>
        <div className={styles.filtercontainer}>
          <div className={styles.containerbuttons}>
            <button
              className={styles.filterbutton}
              onClick={() => setPage(+0, "all")}
            >
              All figures
            </button>
          </div>
          <div className={styles.containerbuttons2}>
            <div className={styles.filter1}>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Science")}
              >
                Science
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "History")}
              >
                History
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Literature")}
              >
                Literature
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Cinema")}
              >
                Cinema
              </button>
            </div>
            <div className={styles.filter1}>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Poetry")}
              >
                Poetry
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Music")}
              >
                Music
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Design")}
              >
                Design
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Politics/Activism")}
              >
                Politics/Activism
              </button>
            </div>
            <div className={styles.filter1}>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Painting")}
              >
                Painting
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Sport")}
              >
                Sport
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Business")}
              >
                Business
              </button>
              <button
                className={styles.filterbuttons}
                onClick={() => setPage(+0, "Sculpture")}
              >
                Sculpture
              </button>
            </div>
          </div>
        </div>
        <ul className={styles.container}>
          {figures.map((item: Figure) => (
            <Card figure={item} key={item.id}></Card>
          ))}
        </ul>
      </div>
      <div className={styles.pagebuttons}>
        <div className={styles.prev}>
          <img
            className={styles.prevbutton}
            onClick={() => setPage(-1)}
            src="../../../img/prev.png"
            alt="prev-page"
          ></img>
        </div>
        <div className={styles.next}>
          <img
            className={styles.nextbutton}
            onClick={() => setPage(+1)}
            src="../../../img/next.png"
            alt="next-page"
          ></img>
        </div>
      </div>
    </>
  );
}
