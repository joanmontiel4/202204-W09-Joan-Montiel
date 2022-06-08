import { iComponent } from '../interfaces/icomponent.js';
import { pokemonAPI } from '../services/pokeAPI.js';
import { Component } from './component.js';
import { iPokemonListElements } from '../interfaces/ipokemons-list.js';

export class PokelistItem extends Component implements iComponent {
    template: string = '';
    pokeList: pokemonAPI;
    pokeListState: iPokemonListElements = [];
    pokeListCount: number = 0;

    constructor(
        public selector: string,
        public offset: number,
        public offsetStep: number,
        public handlerButton: Function
    ) {
        super();
        this.pokeList = new pokemonAPI(offset, offsetStep);
        this.pokeList.getSetOfItems().then((res) => {
            this.pokeListState = res.results;
            this.pokeListCount = res.count;
            console.log(res); //////////////////
            console.log(this.pokeListState); /////////////////
            this.template = this.createTemplate();
            this.render(this.selector);
            this.manageComponent();
        });
    }
    createTemplate() {
        let offsetRange: number = this.offsetStep;
        if (this.pokeListCount - this.offset > this.offsetStep) {
            offsetRange += this.offset;
        } else {
            offsetRange = this.pokeListCount;
        }
        return `
                <ul>${this.createList()}</ul>
                <nav class="nav">${this.createNav()}</nav>
                <span>${this.offset.toString()}-${offsetRange.toString()}/${
            this.pokeListCount
        }</span>    
        `;
    }

    createList() {
        let httpList = '';
        this.pokeListState.forEach((pokemon) => {
            const splitPath = pokemon.url.split('/');
            const id = splitPath[splitPath.length - 2];
            httpList += `<li class="pokelist__link"><a class="poke-${id}" href="">${pokemon.name}</a></li>`;
        });
        return httpList;
    }

    createNav() {
        const previousButton = `<button class="button" data-button="prev">Previous</button>`;
        const nextButton = `<button class="button" data-button="next">Next</button>`;

        return `
            ${this.offset !== 0 ? previousButton : ''}
            ${
                this.offset < this.pokeListCount - this.offsetStep
                    ? nextButton
                    : ''
            }
        `;
    }

    manageComponent() {
        document
            .querySelectorAll('button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
        document
            .querySelectorAll('button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
}
