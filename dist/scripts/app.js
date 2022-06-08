import { Header } from './components/header.js';
import { MyPokemons } from './components/mypokemons.js';
import { PokeList } from './components/pokelist.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        // new Header('slot.header');
        // new Main('slot.main-sec');
        const path = location.pathname.split('/');
        if (path[path.length - 1] === '' ||
            path[path.length - 1] === 'index.html') {
            commonComponents();
            new PokeList('.main-sec');
        }
        else if (path[path.length - 1] === 'mypokemons.html') {
            commonComponents();
            new MyPokemons('slot.mypokemons');
        }
    });
})();
function commonComponents() {
    new Header('slot.header');
    // new Footer('slot.footer');
}
//# sourceMappingURL=app.js.map