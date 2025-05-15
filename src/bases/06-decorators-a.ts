//* Decorador creado "Metodo esta obsoleto"
const Deprecated = (deprecationReason: string) => {
    return (_: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    	// console.log({target})
		return {
			get() {
			const wrapperFn = (...args: any[]) => {
				console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
				//! Llamar la función propiamente con sus argumentos
				propertyDescriptor.value.apply(this, args); 
			}
			return wrapperFn;
			}
		}
	}
}



export class Pokemon {
	constructor(
		public readonly id: number,
		public name: string,
	){}

	scream() {
		console.log(`🚀 ~ ${this.name.toLowerCase() }`);
	}

	//Poniendo decorador deprecaded
	@Deprecated('Most use speck 2 method inspead')
	speak() {
		console.log(`🚀 ~ ${this.name}, ${this.name} :`);
	}

	speak2() {
		console.log(`🚀 ~ ${this.name}, ${this.name} :`);
	}
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak2();