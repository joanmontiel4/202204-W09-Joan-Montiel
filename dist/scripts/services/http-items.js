export class HttpItems {
    url;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon/';
        this.getAllItems();
        // https://pokeapi.co/api/v2/pokemon/
        // http://localhost:3000/pokemons
    }
    getAllItems() {
        //Canviar any per una inferface
        // return fetch(this.url).then((resp) => resp.json());
        console.log(fetch(this.url).then((resp) => resp.json()));
    }
    setItems() { }
    updateItem() { }
    deleteItem() { }
}
//# sourceMappingURL=http-items.js.map