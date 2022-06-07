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
            { path: './index.html', label: 'Pokémon All' },
            { path: './mypokemons.html', label: 'My Pokémons' },
            { path: './details.html', label: 'Pokémon Details' },
        ];
        new Menu('slot.menu', this.menuOptions);
    }
    createTemplate() {
        return `
            <header">
                <h1 class="main-title">Pokémon</h1>
                <slot class="menu"></slot>
            </header> 
        `;
    }
}
//# sourceMappingURL=header.js.map