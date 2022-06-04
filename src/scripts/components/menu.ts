import { iComponent } from '../interfaces/icomponent.js';
import { iMenuOptions } from '../interfaces/imenu-options.js';
import { Component } from './component.js';

export class Menu extends Component implements iComponent {
    template: string;

    constructor(public selector: string, public menuOptions: iMenuOptions) {
        super();
        this.template = this.createTemplate();
        this.render(this.selector);
    }
    createTemplate() {
        let htmlItems = '';
        this.menuOptions.forEach((item) => {
            htmlItems += `<li><a href="${item.path}">${item.label}</a></li>`;
        });
        return `<nav><ul>${htmlItems}</ul></nav>`;
    }
}
