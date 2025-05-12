/**
 * Class for TypeScript in Nest
 */
import axios from 'axios';
import { APIResponseI, Move } from './../interfaces/pokeApi-response.interface';

export class Pokemon {
	// ! Forma clasica de usar instanciar las propiedades en el constructor
	// public id: number;
	// public name: string;

	// constructor(id: number, name: string) {
	// 	console.log("🚀 ~ Inicializamos el contructor de Pokemon");
	// 	this.id = id;
	// 	this.name = name;
	// }

	// * Forma mas corta
	constructor (
		// public readonly id: number, //! -> No permite modificar esta propiedad solo lectura
		public id: number,
		public name: string,
		// public imageUrl: string,
	) {}

	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	scream():void {
		console.log(`🚀 ~ ${this.name.toUpperCase()}!!`);
	}

	speak():void {
		console.log(`🚀 ~ ${this.name.toUpperCase()} speak: Cha, cha, charmander!!!`);
	}

	async getMovies(): Promise<Move[]> {
		const {data} = await axios.get<APIResponseI>('https://pokeapi.co/api/v2/pokemon/4');
		console.log("🚀 ~ Pokemon ~ getMovies ~ respApi:", data.moves)
		return data.moves;
	}
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
// charmander.speak();

console.log("🚀 ~ charmander:", charmander);
charmander.getMovies();

//! Con readonly no se pude modificar alguna propiedad de la clases a la que se le aplica esta sintaxis

//charmander.id = 200; //!! -> Resalta el error aplicando sintaxis "readonly"
//charmander.name = "Chicorita"
