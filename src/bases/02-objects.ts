console.log("🚀 ~ ********");

//! Interface pokemon
interface PokemonI {
	id: number;
	name: string;
	level?: number | undefined; // -> puede ser que este valor sea nulo o no este definido
}

export const pokemonIds = [1,20,30,45,60,150];

//* Pokemons Object
export const Charizard: PokemonI = {
	id: 1,
	name: 'Charizard'
};

export const Charmander: PokemonI = {
	id: 4,
	name: 'Charmander',
	level: 4
};
// * Otros ejemplos

export const pokmeons: PokemonI[] = [];

// pokmeons.push(1,false, 'name', {});
pokmeons.push(Charizard, Charmander);

console.log("🚀 ~ pokmeons:", pokmeons)
console.log("🚀 ~ Charmander:", Charmander)
console.log("🚀 ~ Charizard:", Charizard);

pokemonIds.push(+'1');
console.log("🚀 ~ pokemonIds:", pokemonIds);
