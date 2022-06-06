import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { TodoList } from './components/todo-list.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Header('slot.header');
        new Main('slot.main-sec');
        new TodoList('');
        ////////////////////// TEST CHARMANDER //////////////////////////////////
        // const test = fetch('https://pokeapi.co/api/v2/pokemon/charmander').then(
        //     (resp) => resp.json()
        // );
        // console.log(test);
    });
})();
//# sourceMappingURL=app.js.map