export class PokeDetailsAPI {
    url: string;
    constructor(public pokeId: number) {
        this.url = `https://pokeapi.co/api/v2/pokemon/${pokeId.toString()}`;
    }
    getItems() {
        return fetch(this.url).then((resp) => resp.json());
    }
}
