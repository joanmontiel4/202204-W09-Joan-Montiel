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
            htmlItems += `<li class="menu__items"><a class="menu__anchors" href="${item.path}">${item.label}</a></li>`;
        });
        return `<nav><ul class="menu__container">${htmlItems}</ul></nav>`;
    }
}
//# sourceMappingURL=menu.js.map