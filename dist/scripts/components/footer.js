import { Component } from './component.js';
export class Footer extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        return `
            <footer>
                <address>By Joan Montiel</address>      
            </footer>
        `;
    }
}
//# sourceMappingURL=footer.js.map