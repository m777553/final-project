import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { catchPokemon } from "../actions";


const PokemonPage = ({ idSelect }) => {

  const selectedPokemon = useSelector((state) => state.load.data[idSelect]);
  const dispatch = useDispatch();


  const onCaughtClick = (evt) => {
    evt.preventDefault();
    const idCaught = evt.target.dataset.id;

    dispatch(catchPokemon(idCaught));
  };

  return (
    <section className="pokemonPage">
      <div className="pokemonPage__wrap">
        <h2 className="pokemonPage__name">{selectedPokemon.name}</h2>
        <img
          className="pokemonPage__img"
          src={`./img/pokemons/${selectedPokemon.id}.png`}
          alt={`${selectedPokemon.name}`}
        />

        <div className="pokemonPage__infoWrap">
          <p className="pokemonPage__id">
            id <b>{selectedPokemon.id}</b>
          </p>

          {selectedPokemon.isCaught && (
            <p className="pokemonPage__date">
              <b>Was caught </b>
              <br />
              {selectedPokemon.date}
            </p>
          )}
        </div>

        {/* 
          <p className="pokemonPage__id"><b>id</b> {pokemonData.id}</p> */}

        <button
          disabled={!!selectedPokemon.isCaught}
          data-id={selectedPokemon.id}
          onClick={onCaughtClick}
          className={`pokemonPage__catchBtn ${
            selectedPokemon.isCaught ? "disable" : ""
          }`}
        >
          Catch
        </button>
      </div>
    </section>
  );
};

export default PokemonPage;
