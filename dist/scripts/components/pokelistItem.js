import { PokemonAPI } from '../services/pokeAPI.js';
import { Component } from './component.js';
import { PokeDetailsAPI } from '../services/poke-detailsAPI.js';
export class PokeListItem extends Component {
    selector;
    offset;
    offsetStep;
    handlerButton;
    handlerPokeDetails;
    template = '';
    pokeList;
    pokeListState = [];
    pokeListCount = 0;
    httpList = '';
    constructor(selector, offset, offsetStep, handlerButton, handlerPokeDetails) {
        super();
        this.selector = selector;
        this.offset = offset;
        this.offsetStep = offsetStep;
        this.handlerButton = handlerButton;
        this.handlerPokeDetails = handlerPokeDetails;
        this.pokeList = new PokemonAPI(offset, offsetStep);
        this.pokeList.getSetOfItems().then((res) => {
            this.pokeListState = res.results;
            this.pokeListCount = res.count;
            this.createList();
        });
    }
    createTemplate() {
        let offsetRange = this.offsetStep;
        if (this.pokeListCount - this.offset > this.offsetStep) {
            offsetRange += this.offset;
        }
        else {
            offsetRange = this.pokeListCount;
        }
        return `
                <ul class="pokelist">${this.createList}</ul>
                <nav class="nav">${this.createNav()}</nav>
                <span>${this.offset.toString()}-${offsetRange.toString()}/${this.pokeListCount}</span>    
        `;
    }
    createList() {
        let httpList = '';
        const arrayPromise = [];
        const image = [];
        for (let i = 0; i < this.offsetStep; i++) {
            const splitPath = this.pokeListState[i].url.split('/');
            const id = splitPath[splitPath.length - 2];
            const details = new PokeDetailsAPI(+id);
            arrayPromise[i] = details.getItems().then((resp) => {
                image[i] = resp.sprites.front_default;
            });
        }
        Promise.all(arrayPromise).then((results) => {
            let i = 0;
            console.log(results);
            this.pokeListState.forEach((pokemon) => {
                const splitPath = pokemon.url.split('/');
                const id = splitPath[splitPath.length - 2];
                httpList += `
                        <li class="pokelist__link">
                            <div class="poke-sign">
                                <img src="${image[i]}" width="50rem" height="50rem">
                                <a class="poke-sign__anchor" data-pokeid="${id.toString()}" href="">${pokemon.name}</a>
                            </div>
                        </li>`;
                i++;
            });
            let offsetRange = this.offsetStep;
            if (this.pokeListCount - this.offset > this.offsetStep) {
                offsetRange += this.offset;
            }
            else {
                offsetRange = this.pokeListCount;
            }
            const previousButton = `<button class="button" data-button="prev">Previous</button>`;
            const nextButton = `<button class="button" data-button="next">Next</button>`;
            const httpListNav = `
            ${this.offset !== 0 ? previousButton : ''}
            ${this.offset < this.pokeListCount - this.offsetStep
                ? nextButton
                : ''}
        `;
            const httpListComplete = `
                <div class="pokelist__nav">
                    <nav>${httpListNav}</nav>
                    <span class="pokelist__span">${this.offset.toString()}-${offsetRange.toString()}/${this.pokeListCount}</span>
                </div>
                <ul class="pokelist">${httpList}</ul>
            `;
            this.template = httpListComplete;
            this.render(this.selector);
            this.manageComponent();
        });
        ;
    }
    createNav() {
        const previousButton = `<button class="button" data-button="prev">Previous</button>`;
        const nextButton = `<button class="button" data-button="next">Next</button>`;
        return `
            ${this.offset !== 0 ? previousButton : ''}
            ${this.offset < this.pokeListCount - this.offsetStep
            ? nextButton
            : ''}
        `;
    }
    manageComponent() {
        document
            .querySelectorAll('button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
        document
            .querySelectorAll('.poke-sign__anchor')
            .forEach((item) => item.addEventListener('click', this.handlerPokeDetails.bind(this)));
    }
}
//# sourceMappingURL=pokelistItem.js.map