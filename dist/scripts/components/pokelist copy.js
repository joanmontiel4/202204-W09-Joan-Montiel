import { pokemonAPI } from '../services/pokemonAPI.js';
import { Component } from './component.js';
export class PokeList extends Component {
    selector;
    listOffset;
    template = '';
    pokeList;
    pokeListState = [];
    pokeListCount = 0;
    constructor(selector, listOffset) {
        super();
        this.selector = selector;
        this.listOffset = listOffset;
        this.pokeList = new pokemonAPI(listOffset);
        this.pokeList.getSetOfItems().then((res) => {
            this.pokeListState = res.results;
            this.pokeListCount = res.count;
            console.log(res);
            console.log(this.pokeListState);
            this.template = this.createTemplate();
            this.outRender(this.selector);
            this.manageComponent();
        });
    }
    createTemplate() {
        return `
            <section class="pokelist">
                <ul>${this.createList()}</ul>
                <nav class="nav">${this.createNav()}</nav>
            </section>
        `;
    }
    createList() {
        let httpList = '';
        this.pokeListState.forEach((pokemon) => {
            httpList += `<li class="pokelist__link"><a href="">${pokemon.name}</li>`;
        });
        return httpList;
    }
    createNav() {
        const previousButton = `<button class="button">Previous</button>`;
        const nextButton = `<button class="button">Next</button>`;
        return `
            ${this.listOffset !== 0 ? previousButton : ''}
            ${this.listOffset < this.pokeListCount - 20 ? nextButton : ''}
        `;
    }
    manageComponent() {
        document
            .querySelectorAll('button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
    }
    handlerButton(ev) {
        ev.preventDefault();
        console.log('In the handlerButton');
        // const selectId = (<HTMLElement>ev.target).dataset.id as string;
        // this.storeService.deleteTask(+selectId).then((resp) => {
        //     if (resp.ok) {
        //         this.tasksState = this.tasksState.filter(
        //             (item) => item.id !== +selectId
        //         );
        //         this.render();
        //     }
        // });
        // console.log(ev);
    }
}
//# sourceMappingURL=pokelist%20copy.js.map