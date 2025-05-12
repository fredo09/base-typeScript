/**
 * Patron adaptador para librerias de terceros
 * Usado para injeccion de dependencias
 * y cuando se necesite modificar algo con respecto a la dependencia
 * solo es cuestion de modificar esta clase ya que es un punte entre
 * el codigo que usa la dependencia y la libreria
 */

import axios from "axios";

export class PokeApiAdapter {
	private readonly axios = axios;

	async get(url: string) {
		const { data } = await this.axios.get(url);
		return data;
	}

	async post(url: string, data:any) {

	}

	async patch(url: string, data: any) {

	}

	async delete(url: string) {

	}
}