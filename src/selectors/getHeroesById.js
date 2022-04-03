import { heroes } from "../data/heroes";

export const getHeroesById = function (id) {
  return heroes.filter( hero => hero.id == id);
}