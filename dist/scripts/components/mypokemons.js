import { HttpMyPoke } from '../services/HttpMyPoke.js';
import { Component } from './component.js';
import { MyPokeList } from './mypokelist.js';
import { PokeCard } from './poke-card.js';
export class MyPokemons extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        new MyPokeList('.my-pokelist__list', this.handlerPokeDetails.bind(this), this.handlerDeleteButton.bind(this));
    }
    createTemplate() {
        return `
        <div class="my-pokelist">
            <slot class="my-pokelist__list"></slot>
            <slot class="pokecard"></slot>
        </div>
        `;
    }
    handlerPokeDetails(ev) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectedPoke = ev.target.dataset.pokeid;
        const selectedPokeId = +selectedPoke;
        new PokeCard('slot.pokecard', selectedPokeId, this.handlerCardButtons.bind(this));
    }
    handlerCardButtons() { }
    handlerDeleteButton(ev) {
        ev.preventDefault();
        const selectedPoke = ev.target.dataset
            .pokename;
        const myPoke = new HttpMyPoke();
        myPoke.getAllPokemons().then((resp) => {
            const found = resp.find((elem) => elem.name === selectedPoke);
            found && myPoke.deletePoke(found.id);
        });
    }
}
//# sourceMappingURL=mypokemons.js.map