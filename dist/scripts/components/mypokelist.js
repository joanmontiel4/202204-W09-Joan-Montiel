import { Component } from './component.js';
import { HttpMyPoke } from '../services/HttpMyPoke.js';
export class MyPokeList extends Component {
    selector;
    handlerPokeDetails;
    handlerDeleteButton;
    template = '';
    myPokeList;
    myPokeListState = [];
    constructor(selector, handlerPokeDetails, handlerDeleteButton) {
        super();
        this.selector = selector;
        this.handlerPokeDetails = handlerPokeDetails;
        this.handlerDeleteButton = handlerDeleteButton;
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
                        <a class="mypoke-link" data-pokeid="${id.toString()}" href="">${pokemon.name}</a>
                        <button class="delete-button" data-pokename="${pokemon.name}"}>Delete</button>
                    </div>
                </li>
            `;
        });
        return httpList;
    }
    manageComponent() {
        document
            .querySelectorAll('.delete-button')
            .forEach((item) => item.addEventListener('click', this.handlerDeleteButton.bind(this)));
        document
            .querySelectorAll('.mypoke-link')
            .forEach((item) => item.addEventListener('click', this.handlerPokeDetails.bind(this)));
    }
}
//# sourceMappingURL=mypokelist.js.map