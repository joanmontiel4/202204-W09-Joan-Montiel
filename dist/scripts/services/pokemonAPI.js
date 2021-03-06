export class pokemonAPI {
    offset;
    offsetStep;
    url;
    constructor(offset, offsetStep) {
        this.offset = offset;
        this.offsetStep = offsetStep;
        this.url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset.toString()}&limit${offsetStep.toString()}`;
    }
    getSetOfItems() {
        return fetch(this.url).then((resp) => resp.json());
    }
}
// setItems() {}
// updateItem() {}
// deleteItem() {}
//# sourceMappingURL=pokemonAPI.js.map