import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { HttpMyPoke } from '../services/HttpMyPoke.js';
import { iPokemonListElements } from '../interfaces/ipokemons-list.js';

export class MyPokeList extends Component implements iComponent {
    template: string = '';
    myPokeList: HttpMyPoke;
    myPokeListState: iPokemonListElements = [];

    constructor(
        public selector: string,
        public handlerPokeDetails: Function,
        public handlerDeleteButton: Function
    ) {
        super();
        this.myPokeList = new HttpMyPoke();
        this.myPokeList.getAllPokemons().then((res) => {
            this.myPokeListState = res;
            this.template = this.createTemplate();
            this.outRender(this.selector);
            this.manageComponent();
        });
    }
    createTemplate() {
        return `
            <section class="pokelist">
                <ul class="pokelist__container">
                    ${this.createList()}
                </ul>
            </section>
        `;
    }

    createList() {
        let httpList = '';
        this.myPokeListState.forEach((pokemon) => {
            const splitPath = pokemon.url.split('/');
            const id = splitPath[splitPath.length - 2];
            httpList += `
                <li class="mypokelist__link">
                    <div class="mypokemon">
                        <a class="mypoke-link" data-pokeid="${id.toString()}" href="">${
                pokemon.name
            }</a>
                        <button class="delete-button" data-pokename="${
                            pokemon.name
                        }"}>Delete</button>
                    </div>
                </li>
            `;
        });
        return httpList;
    }
    manageComponent() {
        document
            .querySelectorAll('.delete-button')
            .forEach((item) =>
                item.addEventListener(
                    'click',
                    this.handlerDeleteButton.bind(this)
                )
            );
        document
            .querySelectorAll('.mypoke-link')
            .forEach((item) =>
                item.addEventListener(
                    'click',
                    this.handlerPokeDetails.bind(this)
                )
            );
    }
}
