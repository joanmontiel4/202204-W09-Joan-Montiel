import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { HttpMyPoke } from '../services/HttpMyPoke.js';
import { iPokemonListElements } from '../interfaces/ipokemons-list.js';

export class MyPokeList extends Component implements iComponent {
    template: string = '';
    myPokeList: HttpMyPoke;
    myPokeListState: iPokemonListElements = [];

    constructor(public selector: string) {
        super();
        this.myPokeList = new HttpMyPoke();
        this.myPokeList.getAllPokemons().then((res) => {
            this.myPokeListState = res;
            console.log(res); //////////////////
            console.log(this.myPokeListState); /////////////////
            this.template = this.createTemplate();
            console.log(this.template);
            this.outRender(this.selector);
            // this.manageComponent();
        });
    }
    createTemplate() {
        return `
            <section class="pokelist">
                <ul>
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
            httpList += `<li class="pokelist__link"><a class="poke-link" data-pokeid="${id.toString()}" href="">${
                pokemon.name
            }</a></li>`;
        });
        return httpList;
    }
}
