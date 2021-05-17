import db from '../API/Db';
import { ACTION_TYPES } from '../utilits/consts';

export const loadPokemons = () => async function (dispatch) {
	try {
		const response = await db.get('/pokemons');

		// для демонстрации загрузки диспатч обернут setTimeout
		setTimeout(() => {
			dispatch({
				type: ACTION_TYPES.load_pokemons,
				payload: response.data,
			});
		}, 2000);
	} catch (error) {
		dispatch({
			type: ACTION_TYPES.load_pokemons,
			payload: false,
		});
	}
};

export const catchPokemon = (pokemonId) => async function (dispatch) {
	const response = await db.patch(`/pokemons/${pokemonId}`, {
		isCaught: true,
		date: new Date().toLocaleString('en-US', {
			day: 'numeric',
			month: 'short',
			year: '2-digit',
		}),
	});
	dispatch({
		type: ACTION_TYPES.catch_pokemon,
		payload: response.data,
	});
	// работает, но снова обращается к серверу
	// dispatch(loadPokemons());
};

export const choosePokemon = (pokemonId) =>
// pokemonId = pokemonId - 1;
	({
		type: ACTION_TYPES.choose_pokemon,
		payload: pokemonId - 1,
	});
