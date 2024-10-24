import "./App.css";
import PokemonCard from "./components.1/PokemonCard";


const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

function hello() {

	return <PokemonCard pokemon={pokemonList[1]} />;

}

export default hello;
