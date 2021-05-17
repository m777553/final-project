import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { catchPokemon, choosePokemon } from "../actions";
import PropTypes from "prop-types";

const Pokemon = ({ pokemonData }) => {
  const dispatch = useDispatch();

  const onCaughtClick = (evt) => {
    evt.preventDefault();
    const idCaught = evt.target.dataset.id;
    dispatch(catchPokemon(idCaught));
  };

  return (
    <React.Fragment key={pokemonData.id}>
      <li className="pokemons__item pokemon">
        <div className="pokemon__wrap">
          <Link
            to="/pocemonPage"
            onClick={() => {
              return dispatch(choosePokemon(pokemonData.id));
            }}
          >
            <h2 className="pokemon__name">{pokemonData.name}</h2>
          </Link>
          <Link
            to="/pocemonPage"
            onClick={() => {
              return dispatch(choosePokemon(pokemonData.id));
            }}
          >
            <img
              src={`./img/pokemons/${pokemonData.id}.png`}
              alt={`${pokemonData.name}`}
            />
          </Link>
          <div className="pokemon__infoWrap">
            <p className="pokemon__id">
              id <b>{pokemonData.id}</b>
            </p>

            {pokemonData.isCaught && (
              <p className="pokemon__date">
                <b>Was caught </b>
                <br />
                {pokemonData.date}
              </p>
            )}
          </div>

          <button
            disabled={!!pokemonData.isCaught}
            data-id={pokemonData.id}
            onClick={onCaughtClick}
            className={`pokemon__catchBtn ${
              pokemonData.isCaught ? "disable" : ""
            }`}
          >
            Catch
          </button>
        </div>
      </li>
    </React.Fragment>
  );
};

Pokemon.propTypes = {
  pokemonData: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isCaught: PropTypes.bool,
      date: PropTypes.string,
    })
  ),
};

export default Pokemon;
