// Напишіть функцію яка приймає одне число. При першому виклику, вона його запам'ятовує, при другому - сумує з попереднім і так далі. Для виконання цього завдання використайте замикання. 

function counter(){
    let q = 0;
    function inner(step){
        q += step;
        return q
    }
    return inner;
}

let fn = counter();
console.log(fn(3));
console.log(fn(5)); 
console.log(fn(228));

// Напишіть модуть який буде обробляти покупку товарів. В модулі має бути тільки логіка, весь зв’язок з html, тобто кліки, зміна даних в html робити там не потрібно. Все має працювати як на відео shopsModule. Можете добавити додатковий функціонал від себе. В середині модуля використовуємо тільки логіку(змінні, функції і т.д.), ніякого зв’язку з DOM не має бути.

import { bank, checkStorage, sellBeer, sellWine, sellPepsi } from './shop.js';
import * as shop from './shop.js';

console.log(shop.bank());
console.log(shop.checkStorage());
console.log(shop.sellBeer(10));
console.log(shop.sellWine(10));
console.log(shop.sellPepsi(10));
console.log(shop.bank());
console.log(shop.sellBeer(20));
console.log(shop.sellWine(20));
console.log(shop.sellPepsi(20));
console.log(shop.bank());
console.log(shop.checkStorage());
console.log(shop.sellBeer(6));



