import "./App.css";
import PokemonCard from "./components.1/PokemonCard";
import { useState } from "react";

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

	function handleClickPreviews() {
		setPokemonIndex(pokemonIndex - 1);
	}

	function handleClickNext() {
		setPokemonIndex(pokemonIndex + 1);
	}

	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			{pokemonIndex > 0 ? (
				<button type="button" onClick={handleClickPreviews}>
					{" "}
					Precedent{" "}
				</button>
			) : (
				""
			)}
			{pokemonIndex < pokemonList.length - 1 ? (
				<button type="button" onClick={handleClickNext}>
					{" "}
					Suivant{" "}
				</button>
			) : (
				""
			)}
		</div>
	);
}
export default App;
