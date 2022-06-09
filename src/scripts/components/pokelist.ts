import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { PokeListItem } from './pokelistItem.js';
import { PokeCard } from './poke-card.js';
import { HttpMyPoke } from '../services/HttpMyPoke.js';
import { iPokemonListElements } from '../interfaces/ipokemons-list.js';

export class PokeList extends Component implements iComponent {
    template: string = '';
    offset: number = 0;
    offsetStep: number = 20;
    currentPokeList: PokeListItem;

    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.currentPokeList = new PokeListItem(
            'section.pokelist',
            this.offset,
            this.offsetStep,
            this.handlerButton.bind(this),
            this.handlerPokeDetails.bind(this)
        );
    }

    createTemplate() {
        return `
            <section class="pokelist">
            </section>
        `;
    }

    handlerButton(ev: Event) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectButton = (<HTMLElement>ev.target).dataset.button as string;
        if (selectButton === 'prev') {
            this.offset -= this.offsetStep;
        } else {
            this.offset += this.offsetStep;
        }
        this.currentPokeList = new PokeListItem(
            'section.pokelist',
            this.offset,
            this.offsetStep,
            this.handlerButton.bind(this),
            this.handlerPokeDetails.bind(this)
        );
    }

    handlerPokeDetails(ev: Event) {
        // Handling Previous and Next buttons by using the listOffset
        ev.preventDefault();
        const selectedPoke = (<HTMLElement>ev.target).dataset.pokeid as string;
        const selectedPokeId = +selectedPoke;
        console.log('handlerPokeDetails');
        console.log(selectedPokeId);
        new PokeCard(
            'section.pokelist',
            selectedPokeId,
            this.handlerCardButtons.bind(this)
        );
    }

    handlerCardButtons(ev: Event) {
        // Handling Add to my list and Go to list buttons
        ev.preventDefault();
        const selectButton = (<HTMLElement>ev.target).dataset
            .cardbutton as string;
        const pokeName = (<HTMLElement>ev.target).dataset.pokename as string;
        if (selectButton === 'catch') {
            console.log('catch');
            console.log(pokeName);
            this.addToMyList(pokeName);
        } else if (selectButton === 'goto') {
            this.currentPokeList = new PokeListItem(
                'section.pokelist',
                this.offset,
                this.offsetStep,
                this.handlerButton.bind(this),
                this.handlerPokeDetails.bind(this)
            );
        }
    }

    addToMyList(pokeName: string) {
        let found = false;
        const myList = new HttpMyPoke();
        myList.getAllPokemons().then((res) => {
            const currentMyPokeList: iPokemonListElements = res;
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

    addItemToMyList(pokeName: string, myList: HttpMyPoke) {
        const currentList: iPokemonListElements =
            this.currentPokeList.pokeListState;
        console.log(pokeName);
        console.log(currentList);
        const selectedPoke = currentList.filter(
            (poke) => poke.name === pokeName
        );
        console.log(selectedPoke);
        myList.setPoke(selectedPoke[0]).then((item) => console.log(item));
    }
}
