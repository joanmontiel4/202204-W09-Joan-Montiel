import { Component } from './component.js';
import { PokeList } from './pokelist.js';
export class Main extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
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
//# sourceMappingURL=main.js.map