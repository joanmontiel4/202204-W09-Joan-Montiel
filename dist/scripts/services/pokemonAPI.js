export class pokemonAPI {
    offset;
    offsetStep;
    url;
    urlPrevious = '';
    urlNext = '';
    constructor(offset, offsetStep) {
        this.offset = offset;
        this.offsetStep = offsetStep;
        this.url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset.toString()}&limit${offsetStep.toString()}`;
    }
    getSetOfItems() {
        fetch(this.url)
            .then((res) => res.json())
            .then((res) => {
            this.urlPrevious = res.previous;
            this.urlNext = res.next;
        });
        return fetch(this.url).then((resp) => resp.json());
    }
}
// setItems() {}
// updateItem() {}
// deleteItem() {}
//# sourceMappingURL=pokemonAPI.js.map