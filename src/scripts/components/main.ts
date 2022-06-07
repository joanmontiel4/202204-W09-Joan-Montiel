import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { PokeList } from './pokelist.js';

export class Main extends Component implements iComponent {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.createContent();
    }
    createTemplate() {
        return `
            <main class="main">
                <slot class="pokelist"></slot>    
            </main>
        `;
    }
    createContent() {
        new PokeList('slot.pokelist');
    }
}
