import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { iMenuOptions } from '../interfaces/imenu-options.js';
import { Menu } from './menu.js';

export class Header extends Component implements iComponent {
    template: string;
    menuOptions: iMenuOptions;
    constructor(public selector: string) {
        super();
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
