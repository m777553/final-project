import { combineReducers } from 'redux';

import { INIT_STATE, ACTION_TYPES } from '../utilits/consts';

function loadPokemonsReducer(state = INIT_STATE, action) {

	switch (action.type) {

	case ACTION_TYPES.load_pokemons:

		return { ...state, data: action.payload };

	case ACTION_TYPES.catch_pokemon:
	{const index = action.payload.id;
		const newData = state.data.map((elem) =>
			elem.id === index ? action.payload : elem
		);
		return { ...state, data: newData };}

	default:
		return state;
	}
}

function choosePokemonReducer(state = INIT_STATE, action) {
	switch (action.type) {
	case ACTION_TYPES.choose_pokemon:
		return { ...state, pokemonSelected: action.payload };

	default:
		return state;
	}
}

export default combineReducers({
	load: loadPokemonsReducer,
	choose: choosePokemonReducer,
});
