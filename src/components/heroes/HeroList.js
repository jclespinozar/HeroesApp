import { useEffect, useState } from "react";
import { getHeroesById } from "../../selectors/getHeroesById"
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "./HeroCard";

export const HeroList = ({name}) => {
  /*const heroes = getHeroesByName(name);*/

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchCharacters()
  },[])
  
  const fetchCharacters = async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/characters?apikey=31a576420eac3d37aedaa8e207b6ce17&ts=1000&hash=4ba076bb06fbf679a4eac2072a674de1`
    );
    const data = await response.json();
    setHeroes(data.data.results);
    console.log(heroes)
  };

  return (
    <div className = "row row-cols-1 row-cols-md-3 g-4">
      {
        heroes.map( hero => (
          <HeroCard key={ hero.id }
            {...hero}>
          </HeroCard>
        ))
      }
    </div>
  )
}