import { Component } from './component.js';
export class Sample extends Component {
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
     
        `;
    }
}
//# sourceMappingURL=sample.js.map