export class PokeDetailsAPI {
    pokeId;
    url;
    constructor(pokeId) {
        this.pokeId = pokeId;
        this.url = `https://pokeapi.co/api/v2/pokemon/${pokeId.toString()}`;
    }
    getSetOfItems() {
        return fetch(this.url).then((resp) => resp.json());
    }
}
// setItems() {}
// updateItem() {}
// deleteItem() {}
//# sourceMappingURL=poke-detailsAPI.js.map