export class HttpMyPoke {
    url;
    constructor() {
        this.url = 'http://localhost:3000/mypokemons/';
    }
    getItems() {
        return fetch(this.url).then((resp) => resp.json());
    }
    setPoke(poke) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(poke),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    updatePoke(poke) {
        return fetch(this.url + poke.id, {
            method: 'PATCH',
            body: JSON.stringify(poke),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    deletePoke(id) {
        return fetch(this.url + id, {
            method: 'DELETE',
        });
    }
}
//# sourceMappingURL=HttpMyPoke.js.map