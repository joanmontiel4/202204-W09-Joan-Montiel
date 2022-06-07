export class pokemonAPI {
    url: string;
    urlPrevious: string | null = '';
    urlNext: string | null = '';
    constructor(public offset: number, public offsetStep: number) {
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
