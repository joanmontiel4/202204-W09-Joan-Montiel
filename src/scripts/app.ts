import { Header } from './components/header.js';
import { Main } from './components/main.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Header('slot.header');
        new Main('slot.main-sec');
    });
})();
