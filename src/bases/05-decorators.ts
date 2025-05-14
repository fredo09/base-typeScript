/**
 * Dcoradores en nest
 */

//* Creando mi decorador
const MyDecorator = () => {
	return (target: Function) => {
		console.log("🚀 ~ target:", target);
		return NewPokemon;
	}
}

class NewPokemon {
	constructor(
		public readonly id: number,
		public name: string,
	){}

	scream() {
		console.log(`🚀 ~ ${this.name.toLowerCase() } No quiero`);
	}

	speak() {
		console.log(`🚀 ~ ${this.name}, ${this.name} No quiero hablar:`);
	}
}

@MyDecorator() //! -> Usando mi decorador
export class Pokemon {
	constructor(
		public readonly id: number,
		public name: string,
	){}

	scream() {
		console.log(`🚀 ~ ${this.name.toLowerCase() }`);
	}

	speak() {
		console.log(`🚀 ~ ${this.name}, ${this.name} :`);
	}
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();


//* Que es un decorador -> son simples funciones y se usa asi "@myDecorators"