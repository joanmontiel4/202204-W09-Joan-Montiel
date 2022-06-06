import { iComponent } from '../interfaces/icomponent.js';
import { HttpItems } from '../services/http-items.js';
import { Component } from './component.js';

export class TodoList extends Component implements iComponent {
    template: string = '';
    pokemonList: HttpItems;
    constructor(public selector: string) {
        super();
        this.pokemonList = new HttpItems();
        this.template = this.createTemplate();
        // this.outRender(this.selector);
    }
    createTemplate() {
        return `
     
        `;
    }
}
