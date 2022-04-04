import { useParams, Navigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";
import { useEffect, useState } from "react";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  const [hero, setHero] = useState({});

  useEffect(() => {
    getHeroesById(heroId).then((hero) => {
      console.log(hero);
      setHero(hero);
    });
  }, []);

  const handleReturn = () => {
    console.log(history);
  };

  return (
    <div>
      {hero.length !== 0 ? (
        <div className="row mt-5">
          <div className="col-4">
            <img
              src={hero?.thumbnail?.path + "." + hero?.thumbnail?.extension}
              className="img-thumbnail"
            />
          </div>
          <div className="col-8">
            <h3>{hero.name}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Historia</b> {hero.description}
              </li>
              <li className="list-group-item">
                <b>Comics</b>
                {hero.comics.items.map((comic) => (
                  <p>{comic.name}</p>
                ))}
              </li>
              <li className="list-group-item">
                <b>Series</b>
                {hero.series.items.map((serie) => (
                  <p>{serie.name}</p>
                ))}
              </li>
              <li className="list-group-item">
                <b>Series</b>
                {hero.stories.items.map((story) => (
                  <p>{story.name}</p>
                ))}
              </li>
              <li className="list-group-item">
                <b>Eventos</b>
                {hero.events.items.map((event) => (
                  <p>{event.name}</p>
                ))}
              </li>
            </ul>
            <button className="btn btn-outline-info" onClick={handleReturn}>
              Return
            </button>
          </div>
        </div>
      ) : (
        <p>No existe heroe</p>
      )}
    </div>
  );
};
