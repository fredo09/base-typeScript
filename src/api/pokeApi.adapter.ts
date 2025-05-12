/**
 * Patron adaptador para librerias de terceros
 * Usado para injeccion de dependencias
 * y cuando se necesite modificar algo con respecto a la dependencia
 * solo es cuestion de modificar esta clase ya que es un punte entre
 * el codigo que usa la dependencia y la libreria
 */

import axios from "axios";

//forma de solucionar el tema de sustitucion de Liskov

//! Usaremos interfaces en vez de clases abstractas
export interface HttpAdapter {
	get<T>(url:string): Promise<T>
}

export class PokeApiAdapter implements HttpAdapter{
	private readonly axios = axios;

	// T -> es el generico por defecot
	async get<T>(url: string): Promise<T> {
		const { data } = await this.axios.get<T>(url);
		return data;
	}

	async post(url: string, data:any) {}

	async patch(url: string, data: any) {}

	async delete(url: string) {}
}

//* Implementando principio de sustitucion de liskov
export class PokeApiFetchAdarpter implements HttpAdapter {
	async get<T>(url: string): Promise<T>{
		const response = await fetch(url);
		const data: T = await response.json();

		return data;
	};
}