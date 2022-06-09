export class PokeDetailsAPI {
    pokeId;
    url;
    constructor(pokeId) {
        this.pokeId = pokeId;
        this.url = `https://pokeapi.co/api/v2/pokemon/${pokeId.toString()}`;
    }
    getItems() {
        return fetch(this.url).then((resp) => resp.json());
    }
}
//# sourceMappingURL=poke-detailsAPI.js.map