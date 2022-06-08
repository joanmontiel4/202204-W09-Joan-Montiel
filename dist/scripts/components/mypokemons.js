import { Component } from './component.js';
import { MyPokeList } from './mypokelist.js';
export class MyPokemons extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
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
//# sourceMappingURL=mypokemons.js.map