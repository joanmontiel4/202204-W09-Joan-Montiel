import { Component } from './component.js';
export class Menu extends Component {
    selector;
    menuOptions;
    template;
    constructor(selector, menuOptions) {
        super();
        this.selector = selector;
        this.menuOptions = menuOptions;
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
//# sourceMappingURL=menu.js.map