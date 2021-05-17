import React from "react";
import { useSelector } from "react-redux";
import Pokemon from "./Pokemon";


const CaughtPokemons = () => {
  const pokemonsData = useSelector((state)=>state.load.data)

  const renderCaughtList = pokemonsData.slice().filter((item) => item.isCaught === true).map((item) => {
        return (
            <Pokemon
              key={item.id}
              pokemonData={item}
            />
        );
      });
  return (
    <section className="pokemons pokemons--caught">
      <div className="pokemons__wrap pokemons__wrap--caught">
        <div className="pokemons__listWrap pokemons__listWrap--caught">
          <ul className="pokemons__list pokemons__list--caught">
            {renderCaughtList}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaughtPokemons;
