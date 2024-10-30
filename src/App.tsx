import "./App.css";
import { useState } from "react";
import PokemonCard from "./components.1/PokemonCard";


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
	const [pokemonIndex, setPokemonIndex] = useState(0);
=======
function hello() {

	return <PokemonCard pokemon={pokemonList[1]} />;

}


	return (<>
		{pokemonList.map((pokemon, index)=> (
			
			<button  onClick={()=> setPokemonIndex(index)} key={pokemon.name}> {pokemon.name}</button>))}
			<PokemonCard pokemon={pokemonList[pokemonIndex]}/>

		</>
	)}
	
export default App;
