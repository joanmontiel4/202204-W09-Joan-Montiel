import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { PokeList } from './components/pokelist.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Header('slot.header');
        new Main('slot.main-sec');
        // new PokeList('');
        ////////////////////// TEST CHARMANDER //////////////////////////////////
        // const test = fetch('https://pokeapi.co/api/v2/pokemon/charmander').then(
        //     (resp) => resp.json()
        // );
        // console.log(test);
    });
})();
