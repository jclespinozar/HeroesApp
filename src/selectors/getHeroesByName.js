import { heroes } from "../data/heroes";

export const getHeroesByName = function (name) {
  return heroes.filter( hero => hero.name.startsWith(name));
}