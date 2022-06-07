export class HttpItems {
    url;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon/';
    }
    getSetOfItems() {
        // console.log(fetch(this.url).then((resp) => resp.json()));
        // console.log(fetch(this.url).then((resp) => resp.json()));
        let test;
        fetch(this.url)
            .then((res) => res.json())
            .then((res) => {
            test = res;
            console.log(test);
            console.log(test.results[0].name);
        });
        return fetch(this.url).then((resp) => resp.json());
    }
}
// setItems() {}
// updateItem() {}
// deleteItem() {}
//# sourceMappingURL=http-items.js.map