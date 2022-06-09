import { iComponent } from '../interfaces/icomponent.js';
import { HttpMyPoke } from '../services/HttpMyPoke.js';
import { Component } from './component.js';
import { MyPokeList } from './mypokelist.js';
import { PokeCard } from './poke-card.js';

export class MyPokemons extends Component implements iComponent {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
        new MyPokeList(
            '.my-pokelist__list',
            this.handlerPokeDetails.bind(this),
            this.handlerDeleteButton.bind(this)
        );
    }
    createTemplate() {
        return `
        <div class="my-pokelist">
            <slot class="my-pokelist__list"></slot>
            <slot class="pokecard"></slot>
        </div>
        `;
    }

    handlerPokeDetails(ev: Event) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectedPoke = (<HTMLElement>ev.target).dataset.pokeid as string;
        const selectedPokeId = +selectedPoke;
        new PokeCard(
            'slot.pokecard',
            selectedPokeId,
            this.handlerCardButtons.bind(this)
        );
    }

    handlerCardButtons() {}

    handlerDeleteButton(ev: Event) {
        ev.preventDefault();
        const selectedPoke = (<HTMLElement>ev.target).dataset
            .pokename as string;
        const myPoke = new HttpMyPoke();
        myPoke.getAllPokemons().then((resp) => {
            const found = resp.find((elem) => elem.name === selectedPoke);
            found && myPoke.deletePoke(found.id);
        });
    }
}
