import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Header from './Header';
import Pokemons from './Pokemons';
import Footer from './Footer';
import PokemonPage from './PokemonPage';
import CaughtPokemons from './CaughtPokemons';

const App = () => {
	const choosenPokemon = useSelector((state) => state.choose.pokemonSelected);
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route exact path="/pocemonPage/">
						<PokemonPage idSelect={choosenPokemon} />
					</Route>

					<Route exact path="/caughtPokemons">
						<CaughtPokemons />
					</Route>
					<Route exact path="/">
						<Pokemons />
					</Route>
				</Switch>
			</main>
			<Footer />
		</>
	);
};

export default App;
