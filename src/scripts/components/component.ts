export abstract class Component {
    template: string = '';
    render(selector: string) {
        if (selector && document.querySelector(selector)) {
            (<HTMLElement>document.querySelector(selector)).innerHTML =
                this.template;
        }
    }
    outRender(selector: string) {
        if (selector && document.querySelector(selector)) {
            (<HTMLElement>document.querySelector(selector)).outerHTML =
                this.template;
        }
    }
    addRender(selector: string) {
        if (selector && document.querySelector(selector)) {
            (<HTMLElement>document.querySelector(selector)).innerHTML +=
                this.template;
        }
    }
}
