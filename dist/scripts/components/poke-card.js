import { Component } from './component.js';
import { PokeDetailsAPI } from '../services/poke-detailsAPI.js';
export class PokeCard extends Component {
    selector;
    pokeId;
    handlerCardButtons;
    template = '';
    pokeDetails;
    pokeDetailsState;
    pokeSelectedDetails;
    constructor(selector, pokeId, handlerCardButtons) {
        super();
        this.selector = selector;
        this.pokeId = pokeId;
        this.handlerCardButtons = handlerCardButtons;
        this.pokeDetails = new PokeDetailsAPI(pokeId);
        this.pokeDetails.getSetOfItems().then((res) => {
            this.pokeDetailsState = res;
            // this.createDetailsCard();
            console.log(res); //////////////////
            console.log(this.pokeDetailsState); /////////////////
            console.log(this.pokeDetailsState.id); /////////////////
            this.createDetailsCard();
            console.log(this.pokeSelectedDetails);
            this.template = this.createTemplate();
            this.render(this.selector);
            this.manageComponent();
        });
        ;
    }
    createTemplate() {
        return `
        <div class="poke-details">
            <span>${this.pokeSelectedDetails.name}</span>
            <img src="${this.pokeSelectedDetails.image}">
            <span>Order: ${this.pokeSelectedDetails.order}</span>
            <span>Height: ${this.pokeSelectedDetails.height}</span>
            <span>Weight: ${this.pokeSelectedDetails.weight}</span>
        </div>
        <button class="card-button" data-cardbutton="catch" data-pokename="${this.pokeSelectedDetails.name}">Add to my list</button>
        <button class="card-button" data-cardbutton="goto">Go to list</button>
        `;
    }
    createDetailsCard() {
        this.pokeSelectedDetails = {
            id: this.pokeDetailsState.id,
            name: this.pokeDetailsState.name,
            order: this.pokeDetailsState.order,
            height: this.pokeDetailsState.height,
            weight: this.pokeDetailsState.weight,
            image: this.pokeDetailsState.sprites.front_default,
        };
    }
    manageComponent() {
        document
            .querySelectorAll('.card-button')
            .forEach((item) => item.addEventListener('click', this.handlerCardButtons.bind(this)));
    }
}
//# sourceMappingURL=poke-card.js.map