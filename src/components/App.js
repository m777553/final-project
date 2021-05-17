import React from "react";
import {
  // BrowserRouter,
  Route,
  Switch,
  // Redirect,
  // withRouter,
} from "react-router-dom";

import Header from "./Header";
import Pokemons from "./Pokemons";
import Footer from "./Footer";
import PokemonPage from "./PokemonPage";
import CaughtPokemons from "./CaughtPokemons";
import { useSelector } from "react-redux";



const App = () => {



const choosenPokemon = useSelector(state => state.choose.pokemonSelected);
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/pocemonPage">
            <PokemonPage idSelect={choosenPokemon}/>
          </Route>

          <Route path="/caughtPokemons">
            <CaughtPokemons  />
          </Route>
          <Route path="/">
            <Pokemons />
          </Route>
        </Switch>

       
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;

// TODO

// лого загрузки изображений



