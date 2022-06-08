import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { PokelistItem } from './pokelistItem.js';

export class PokeList extends Component implements iComponent {
    template: string = '';
    offset: number = 0;
    offsetStep: number = 20;

    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
        new PokelistItem(
            'section.pokelist',
            this.offset,
            this.offsetStep,
            this.handlerButton.bind(this)
        );
    }

    createTemplate() {
        return `
            <section class="pokelist">
            </section>
        `;
    }

    handlerButton(ev: Event) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectButton = (<HTMLElement>ev.target).dataset.button as string;
        if (selectButton === 'prev') {
            this.offset -= this.offsetStep;
        } else {
            this.offset += this.offsetStep;
        }
        new PokelistItem(
            'section.pokelist',
            this.offset,
            this.offsetStep,
            this.handlerButton.bind(this)
        );
    }
}
