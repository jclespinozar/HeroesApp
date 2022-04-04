import { useEffect, useState } from "react";
import { getHeroesById } from "../../selectors/getHeroesById";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "./HeroCard";
import { HeroPaginationList } from "./HeroPaginationList";

const publicKey = "31a576420eac3d37aedaa8e207b6ce17";
const hash = "4ba076bb06fbf679a4eac2072a674de1";

export const HeroList = ({ name }) => {
  const [heroes, setHeroes] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 20,
    offset: 0,
    page: 1,
  });

  useEffect(() => {
    fetchCharacters(pagination.offset);
  }, []);

  const fetchCharacters = async (offset) => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/characters?apikey=31a576420eac3d37aedaa8e207b6ce17&ts=1000&hash=4ba076bb06fbf679a4eac2072a674de1&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setHeroes(data.data.results);
  };

  return (
    <>
      <HeroPaginationList
        pagination={pagination}
        setPagination={setPagination}
      />
      <div className="row row-cols-1 row-cols-md-3 g-4 row-cols-lg-4">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero}></HeroCard>
        ))}
      </div>
    </>
  );
};
