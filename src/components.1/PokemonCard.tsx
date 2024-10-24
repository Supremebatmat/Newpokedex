

interface PokemonCard {
	name: string;
	imgSrc: string;
}

function PokemonCard({ pokemon }) {



function PokemonCard({pokemon}) {
	

 main
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}

			{<figcaption> {pokemon.name}</figcaption>}
		</figure>
	);
}
export default PokemonCard;
