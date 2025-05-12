import { Move, APIResponseI } from '../interfaces/pokeApi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdarpter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
		private readonly http: HttpAdapter //! injeccion de dependencias
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
		//! usando injeccion de dependencias
		const data = await this.http.get<APIResponseI>('https://pokeapi.co/api/v2/pokemon/4');
		console.log( data.moves );

		return data.moves;

        // const { data } = await axios.get<APIResponseI>('https://pokeapi.co/api/v2/pokemon/4');
        // console.log( data.moves );
        
        // return data.moves;
    }

}

//* Instanciando la dependencia ahora con principio de sustiticion de Liskov
const pokeApiAxiosAdapter = new PokeApiAdapter();
const pokeApiFetchAdapter = new PokeApiFetchAdarpter();


export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxiosAdapter );

charmander.getMoves();