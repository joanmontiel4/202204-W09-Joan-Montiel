import { Component } from './component.js';
import { PokeListItem } from './pokelistItem.js';
import { PokeCard } from './poke-card.js';
import { HttpMyPoke } from '../services/HttpMyPoke.js';
export class PokeList extends Component {
    selector;
    template = '';
    offset = 0;
    offsetStep = 20;
    currentPokeList;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.currentPokeList = new PokeListItem('section.pokelist', this.offset, this.offsetStep, this.handlerButton.bind(this), this.handlerPokeDetails.bind(this));
    }
    createTemplate() {
        return `
            <section class="pokelist">
            </section>
        `;
    }
    handlerButton(ev) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectButton = ev.target.dataset.button;
        if (selectButton === 'prev') {
            this.offset -= this.offsetStep;
        }
        else {
            this.offset += this.offsetStep;
        }
        this.currentPokeList = new PokeListItem('section.pokelist', this.offset, this.offsetStep, this.handlerButton.bind(this), this.handlerPokeDetails.bind(this));
    }
    handlerPokeDetails(ev) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectedPoke = ev.target.dataset.pokeid;
        const selectedPokeId = +selectedPoke;
        console.log('handlerPokeDetails');
        console.log(selectedPokeId);
        new PokeCard('section.pokelist', selectedPokeId, this.handlerCardButtons.bind(this));
    }
    handlerCardButtons(ev) {
        // Handling Add to my list and Go to list buttons
        ev.preventDefault();
        const selectButton = ev.target.dataset
            .cardbutton;
        const pokeName = ev.target.dataset.pokename;
        if (selectButton === 'catch') {
            console.log('catch');
            console.log(pokeName);
            this.addToMyList(pokeName);
        }
        else if (selectButton === 'goto') {
            this.currentPokeList = new PokeListItem('section.pokelist', this.offset, this.offsetStep, this.handlerButton.bind(this), this.handlerPokeDetails.bind(this));
        }
    }
    addToMyList(pokeName) {
        let found = false;
        const myList = new HttpMyPoke();
        myList.getAllPokemons().then((res) => {
            const currentMyPokeList = res;
            currentMyPokeList.forEach((item) => {
                if (item.name === pokeName) {
                    found = true;
                }
            });
            if (!found) {
                this.addItemToMyList(pokeName, myList);
            }
        });
    }
    addItemToMyList(pokeName, myList) {
        const currentList = this.currentPokeList.pokeListState;
        console.log(pokeName);
        console.log(currentList);
        const selectedPoke = currentList.filter((poke) => poke.name === pokeName);
        console.log(selectedPoke);
        myList.setPoke(selectedPoke[0]).then((item) => console.log(item));
    }
}
//# sourceMappingURL=pokelist.js.map