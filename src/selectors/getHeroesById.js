import { useEffect, useState } from "react";

export const getHeroesById = async (id) => {
  const response = await fetch(
    `http://gateway.marvel.com/v1/public/characters/${id}?apikey=31a576420eac3d37aedaa8e207b6ce17&ts=1000&hash=4ba076bb06fbf679a4eac2072a674de1`
  );
  const data = await response.json();

  return data.data.results[0];
};
