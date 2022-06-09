import { Component } from './component.js';
import { Menu } from './menu.js';
export class Header extends Component {
    selector;
    template;
    menuOptions;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.menuOptions = [
            { path: './index.html', label: 'Pokémons List ' },
            { path: './mypokemons.html', label: 'My Pokémons' },
            // { path: './details.html', label: 'Pokémon Details' },
        ];
        new Menu('slot.menu', this.menuOptions);
    }
    createTemplate() {
        return `
            <header>
            <div class="main-title">
                <span class="main-title__word">The</span>
                <img class="main-title__img" src="./dist/images/pokemon-logo.svg">
                <span class="main-title__word">list</span>
            </div>
                <slot class="menu"></slot>
            </header> 
        `;
    }
}
//# sourceMappingURL=header.js.map