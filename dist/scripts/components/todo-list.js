import { HttpItems } from '../services/http-items.js';
import { Component } from './component.js';
export class TodoList extends Component {
    selector;
    template = '';
    pokemonList;
    constructor(selector) {
        super();
        this.selector = selector;
        this.pokemonList = new HttpItems();
        this.template = this.createTemplate();
        // this.outRender(this.selector);
    }
    createTemplate() {
        return `
     
        `;
    }
}
//# sourceMappingURL=todo-list.js.map