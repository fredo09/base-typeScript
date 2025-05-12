/**
 * Class for TypeScript in Nest
 */

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
		public name: string
	) {}
}

export const charmander = new Pokemon(4, 'Charmander');

//! Con readonly no se pude modificar alguna propiedad de la clases a la que se le aplica esta sintaxis

//charmander.id = 200; //!! -> Resalta el error aplicando sintaxis "readonly"
//charmander.name = "Chicorita"
