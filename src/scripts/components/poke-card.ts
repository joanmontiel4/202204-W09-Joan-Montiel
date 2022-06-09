import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { PokeDetailsAPI } from '../services/poke-detailsAPI.js';
import { iPokeDetails } from "../interfaces/ipoke-card.js";
import { HttpMyPoke } from "../services/HttpMyPoke.js";

export class PokeCard extends Component implements iComponent {
    template: string = '';
    pokeDetails: PokeDetailsAPI;
    pokeDetailsState: any;
    pokeSelectedDetails: iPokeDetails = {
        id:0,
        name: '',
        order: 0,
        height: 0,
        weight: 0,
        image: ''
    }; 
    constructor(public selector: string, public pokeId: number, public handlerCardButtons: Function) {
        super();
        this.pokeDetails = new PokeDetailsAPI(pokeId);
        this.pokeDetails.getItems().then((res) => {
            this.pokeDetailsState = res;
            this.createDetailsCard();
            // this.template = this.createTemplate();
            // console.log('After createButtons');
            this.createButtons();
            // this.render(this.selector);
            // this.manageComponent();
        };);
    }
    // createTemplate() {
    //     return `
    //     <div class="poke-details">
    //     <span>${this.pokeSelectedDetails.name}</span>
    //     <img src="${this.pokeSelectedDetails.image}">
    //     <span>Order: ${this.pokeSelectedDetails.order}</span>
    //     <span>Height: ${this.pokeSelectedDetails.height}</span>
    //     <span>Weight: ${this.pokeSelectedDetails.weight}</span>
    //     </div>
    //     ${this.createButtons()}
    //     <button class="card-button" data-cardbutton="goto">Go to list</button>
    //     `;
    //     // <button class="card-button" data-cardbutton="catch" data-pokename="${this.pokeSelectedDetails.name}">Add to my list</button>
    //     // <button class="card-button" data-cardbutton="goto">Go to list</button>
    // }

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
            .forEach((item) =>
                item.addEventListener('click', this.handlerCardButtons.bind(this))
            );
    }

    createButtons() {
        let found = false;
        let addButton = '';
        const checkCatchedPokemons = new HttpMyPoke();
        const newPromise = checkCatchedPokemons.getAllPokemons().then((resp) => {
            if (resp.some(elem => elem.name===this.pokeSelectedDetails.name) === true) {
                found=true;
            }
            if (!found) {
                addButton = `
                <button class="card-button" data-cardbutton="catch" data-pokename="${this.pokeSelectedDetails.name}">Add to my list</button>
                `
            } else {
                addButton = `
                    <span class="cached-message">You've already cached this one!</span>
                `
            }

            this.template = `
            <div class="poke-details__container">
                <div class="poke-details">
                    <span class="poke-details__name">${this.pokeSelectedDetails.name}</span>
                    <img src="${this.pokeSelectedDetails.image}">
                    <span>Order: ${this.pokeSelectedDetails.order}</span>
                    <span>Height: ${this.pokeSelectedDetails.height}</span>
                    <span>Weight: ${this.pokeSelectedDetails.weight}</span>
                </div>
                    ${addButton}
                    <button class="card-button" data-cardbutton="goto">Go to list</button>
            </div>
        `;
            
            this.render(this.selector);
            this.manageComponent();
            
        })
    }
}
