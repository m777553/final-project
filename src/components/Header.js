import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<div className="header__wrap">
			<h1 className="header__title">Pokemons</h1>
			<nav className="header__nav">
				<Link className="header__navLink" to="/">
          Main page
				</Link>
				<Link className="header__navLink" to="/caughtPokemons">
          Caught Pokemons
				</Link>
			</nav>
		</div>
	</header>
);

export default Header;
