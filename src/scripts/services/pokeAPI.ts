export class pokemonAPI {
    url: string;
    constructor(public offset: number, public offsetStep: number) {
        this.url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset.toString()}&limit${offsetStep.toString()}`;
    }
    getSetOfItems() {
        return fetch(this.url).then((resp) => resp.json());
    }
}
// setItems() {}
// updateItem() {}
// deleteItem() {}
