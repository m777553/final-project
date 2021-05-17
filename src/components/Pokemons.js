import React, {  useState } from "react";
import {useSelector} from "react-redux";



import Pokemon from "./Pokemon";


import {COUNT_PER_STEP} from "../utilits/consts"
//const COUNT_PER_STEP = 5;
// const COUNT_PER_STEP = 12;

const Pokemons = () => {

  const [visible, setVisible] = useState(COUNT_PER_STEP);
// useEffect(()=>{
//   setVisible(visible+COUNT_PER_STEP);
//     console.log("visible after effect " + visible);
    
// },[visible]);

  const pokemonsData = useSelector((state)=>state.load.data);

  if(pokemonsData===false){
    return (
      <div>
        
        <img src='./img/error.gif' alt="Can't load pokemons. Server error" className="pokemons__errorLoadImg"/>
      </div>
    );
  }

  if(pokemonsData.length===0){
    return (
      <div>
        <img src='./img/loading.gif' alt="In process of loading" className="pokemons__errorLoadImg"/>
      </div>
    );
  }  

  const pokemonRender = (to) =>
    pokemonsData.slice(0, to).map((pokemonData) => {
      return (
        <Pokemon
          key={pokemonData.id}
          pokemonData={pokemonData}
          //choosenPokemon={choosenPokemon}
          // CHOOSE_POKEMON
          //onCaughtPokemon={onCaughtPokemon}
          //CATCH_POKEMON
        />
      );
    });

  const onLoadMoreBtnClick = () => {
    setVisible(visible+COUNT_PER_STEP);
    pokemonRender(visible);

    
  };


  const renderLoadMoreBtn = () => {
    return (
      <button onClick={onLoadMoreBtnClick} className="pokemons__loadMoreBtn">
        Load more
      </button>
    );
  };
  let loadMoreBtn = renderLoadMoreBtn();
  let pokemonsList = pokemonRender(visible);
  return (
    <section className="pokemons">
      <div className="pokemons__wrap">
        <div className="pokemons__listWrap">
          <ul className="pokemons__list">{pokemonsList}</ul>
          {pokemonsData.length - visible > 0 && loadMoreBtn}
        </div>
      </div>
    </section>
  );
};

export default Pokemons;
