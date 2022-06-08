import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { PokelistItem } from './pokelistItem.js';
import { PokeCard } from './poke-card.js';

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
            this.handlerButton.bind(this),
            this.handlerPokeDetails.bind(this)
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
            this.handlerButton.bind(this),
            this.handlerPokeDetails.bind(this)
        );
    }

    handlerPokeDetails(ev: Event) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectedPoke = (<HTMLElement>ev.target).dataset.pokeid as string;
        const selectedPokeId = +selectedPoke;
        console.log('handlerPokeDetails');
        console.log(selectedPoke);
        console.log(selectedPokeId);
        new PokeCard(
            'section.pokelist',
            selectedPokeId,
            this.handlerCardButtons.bind(this)
        );
    }

    handlerCardButtons(ev: Event) {
        // Handling Add to my list and Go to list buttons
        ev.preventDefault();
        const selectButton = (<HTMLElement>ev.target).dataset
            .cardbutton as string;
        if (selectButton === 'catch') {
            console.log('catch');
        } else if (selectButton === 'goto') {
            new PokelistItem(
                'section.pokelist',
                this.offset,
                this.offsetStep,
                this.handlerButton.bind(this),
                this.handlerPokeDetails.bind(this)
            );
        }
    }
}
