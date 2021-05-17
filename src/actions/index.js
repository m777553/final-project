import db from "../API/Db";

export const loadPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await db.get("/pokemons");

      //для демонстрации загрузки диспатч обернут setTimeout
      setTimeout(() => {
        dispatch({
          type: "LOAD_POKEMONS",
          payload: response.data,
        });
      }, 2000);
    } catch (error) {
      dispatch({
        type: "LOAD_POKEMONS",
        payload: false,
      });
    }
  };
};

export const catchPokemon = (pokemonId) => {
  return async function (dispatch) {
    const response = await db.patch(`/pokemons/${pokemonId}`, {
      isCaught: true,
      date: new Date().toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "2-digit",
      }),
    });
    dispatch({
      type: "CATCH_POKEMON",
      payload: response.data,
    });
    //работает, но снова обращается к серверу
    //dispatch(loadPokemons());
  };
};

export const choosePokemon = (pokemonId) => {
  //pokemonId = pokemonId - 1;
  return {
    type: "CHOOSE_POKEMON",
    payload: pokemonId - 1,
  };
};
