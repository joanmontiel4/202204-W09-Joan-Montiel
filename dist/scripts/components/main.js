import { Component } from './component.js';
export class Main extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.createContent();
    }
    createTemplate() {
        return `
            <main class="main">
                <section class="series">
                </section>    
            </main>
        `;
    }
    createContent() {
        // new SeriesList('.series');
    }
}
//# sourceMappingURL=main.js.map