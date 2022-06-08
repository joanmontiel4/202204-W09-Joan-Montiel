import { Component } from './component.js';
import { PokelistItem } from './pokelistItem.js';
import { PokeCard } from './poke-card.js';
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
        new PokelistItem('section.pokelist', this.offset, this.offsetStep, this.handlerButton.bind(this), this.handlerPokeDetails.bind(this));
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
        const selectButton = ev.target.dataset.button;
        if (selectButton === 'prev') {
            this.offset -= this.offsetStep;
        }
        else {
            this.offset += this.offsetStep;
        }
        new PokelistItem('section.pokelist', this.offset, this.offsetStep, this.handlerButton.bind(this), this.handlerPokeDetails.bind(this));
    }
    handlerPokeDetails(ev) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectedPoke = ev.target.dataset.pokeid;
        const selectedPokeId = +selectedPoke;
        console.log('handlerPokeDetails');
        console.log(selectedPoke);
        console.log(selectedPokeId);
        new PokeCard('section.pokelist', selectedPokeId);
    }
}
//# sourceMappingURL=pokelist.js.map