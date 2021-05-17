import { combineReducers } from "redux";

import { INIT_STATE } from "../utilits/consts";

function loadPokemonsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "LOAD_POKEMONS":
      
      return { ...state, data: action.payload };

    case "CATCH_POKEMON":
      console.log(action.payload);
      const index = action.payload.id;
      const newData = state.data.map((elem) =>
        elem.id === index ? action.payload : elem
      );

      return { ...state, data: newData };

    default:
      return state;
  }
}



function choosePokemonReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "CHOOSE_POKEMON":
      return { ...state, pokemonSelected: action.payload };

    default:
      return state;
  }
}

export default combineReducers({
  load: loadPokemonsReducer,
  // catch: catchPokemonReducer,
  choose: choosePokemonReducer,
});
