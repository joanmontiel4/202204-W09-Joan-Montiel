import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';

export class Footer extends Component implements iComponent {
    template: string;
    constructor(public selector: string) {
        super();
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
