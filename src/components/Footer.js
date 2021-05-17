import React from 'react';

const Footer = () => (
	<footer className="footer">
		<div className="footer__wrap">
			<p className="footer__text">Find more interesting information</p>
			<a
				className="footer__link
          footer__link--wiki"
				href="https://en.wikipedia.org/wiki/Pok%C3%A9mon"
			>
				<span className="visually-hidden">wikipedia</span>
			</a>
			<a
				className="footer__link
          footer__link--pokemon"
				href="https://www.pokemon.com/"
			>
				<span className="visually-hidden">pokemon.com</span>
			</a>
		</div>
	</footer>
);

export default Footer;
