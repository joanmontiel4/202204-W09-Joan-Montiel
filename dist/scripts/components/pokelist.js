import { Component } from './component.js';
import { PokelistItem } from './pokelistItem.js';
export class PokeList extends Component {
    selector;
    template = '';
    offset = 0;
    offsetStep = 20;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        new PokelistItem('section.pokelist', this.offset, this.offsetStep, this.handlerButton.bind(this));
    }
    createTemplate() {
        return `
            <section class="pokelist">
            </section>
        `;
    }
    handlerButton(ev) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        console.log('In the handlerButton');
        const selectButton = ev.target.dataset.button;
        if (selectButton === 'prev') {
            this.offset -= this.offsetStep;
        }
        else {
            this.offset += this.offsetStep;
        }
        new PokelistItem('section.pokelist', this.offset, this.offsetStep, this.handlerButton.bind(this));
    }
}
//# sourceMappingURL=pokelist.js.map