import React, {useEffect,useState} from "react"

function Data() {
  const [characters, setCharacters] = useState([{}]);

  const fetchCharacters = async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/characters?apikey=629c5cf17a2a4e3472abfd68d2274d36&ts=10000&hash=7f13f3c347eda2d52cb0d66cce04482e`
    );
    const data = await response.json();
    setCharacters(data.data.results);
    console.log(data.data.results);
  };
  fetchCharacters();

  return (
    <div>
      
    </div>
  );
}

export default Data;