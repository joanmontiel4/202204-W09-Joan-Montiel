import {
    iPokemonListElement,
    iMyPokemonListElement
    iPokemonListElements,
} from '../interfaces/ipokemons-list.js';

export class HttpTasks {
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/mypokemons/';
    }
    getAllPokemons(): Promise<iPokemonListElements> {
        return fetch(this.url).then((resp) => resp.json());
    }
    setPoke(poke: iPokemonListElement): Promise<iPokemonListElement> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(poke),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    updatePoke(poke: iMyPokemonListElement): Promise<iMyPokemonListElement> {
        return fetch(this.url + poke.id, {
            method: 'PATCH',
            body: JSON.stringify(poke),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    deletePoke(id: iMyPokemonListElement['id']) {
        return fetch(this.url + id, {
            method: 'DELETE',
        });
    }
}
