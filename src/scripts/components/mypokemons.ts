import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { MyPokeList } from './mypokelist.js';

export class MyPokemons extends Component implements iComponent {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
        new MyPokeList('.my-pokelist__list');
    }
    createTemplate() {
        return `
        <div class="my-pokelist">
            <slot class="my-pokelist__list"></slot>
        </div>
        `;
    }
}
