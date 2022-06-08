export class PokeDetailsAPI {
    url: string;
    constructor(public pokeId: number) {
        this.url = `https://pokeapi.co/api/v2/pokemon/${pokeId.toString()}`;
    }
    getSetOfItems() {
        return fetch(this.url).then((resp) => resp.json());
    }
}
// setItems() {}
// updateItem() {}
// deleteItem() {}
