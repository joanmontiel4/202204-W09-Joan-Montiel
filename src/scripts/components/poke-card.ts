import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { PokeDetailsAPI } from '../services/poke-detailsAPI.js';
import { iPokeDetails } from "../interfaces/ipoke-card.js";

export class PokeCard extends Component implements iComponent {
    template: string = '';
    pokeDetails: PokeDetailsAPI;
    pokeDetailsState: any;
    pokeSelectedDetails: iPokeDetails; 
    constructor(public selector: string, public pokeId: number) {
        super();
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
        };);
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
