import "./App.css";
import PokemonCard from "./components.1/PokemonCard";
import { useState } from "react";
import NavBar from "./components.1/Navbar";
import { useEffect } from "react";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<div>
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonList}
			/>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</div>
	);
}
export default App;
