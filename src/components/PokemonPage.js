import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { catchPokemon } from "../actions";
import PropTypes from "prop-types";

const PokemonPage = ({ idSelect }) => {
  const selectedPokemon = useSelector((state) => state.load.data[idSelect]) || {
    name: "CHARMANDER",
    id: 4,
  };
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

PokemonPage.propTypes = {
  idSelect: PropTypes.number,
};

export default PokemonPage;
