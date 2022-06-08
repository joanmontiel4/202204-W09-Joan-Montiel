import { Component } from './component.js';
import { PokeDetailsAPI } from '../services/poke-detailsAPI.js';
export class PokeCard extends Component {
    selector;
    pokeId;
    template = '';
    pokeDetails;
    pokeDetailsState;
    pokeSelectedDetails;
    constructor(selector, pokeId) {
        super();
        this.selector = selector;
        this.pokeId = pokeId;
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
            // this.manageComponent();
        });
        ;
    }
    createTemplate() {
        return `
     
        `;
    }
    createDetailsCard() {
        this.pokeSelectedDetails = {
            id: this.pokeDetailsState.id,
            name: this.pokeDetailsState.name,
            order: this.pokeDetailsState.order,
            height: this.pokeDetailsState.height,
            weight: this.pokeDetailsState.weight,
            image: this.pokeDetailsState.sprites.back_default,
        };
    }
}
//# sourceMappingURL=poke-card.js.map