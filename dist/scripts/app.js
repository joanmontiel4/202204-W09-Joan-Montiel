import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Main } from './components/main.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const path = location.pathname.split('/');
        if (
            path[path.length - 1] === '' ||
            path[path.length - 1] === 'index.html'
        ) {
            commonComponents();
        } else if (path[path.length - 1] === 'mypokemons.html') {
            commonComponents();
        } else if (path[path.length - 1] === 'details.html') {
            commonComponents();
        }
    });
})();

function commonComponents() {
    new Header('slot.header');
    new Footer('slot.footer');
}
