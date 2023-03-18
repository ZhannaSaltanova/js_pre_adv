    let beerCount = 90;
    let wineCount = 45;
    let pepsiCount = 70;

    let beerPrice = 50;
    let winePrice = 100;
    let pepsiPrice = 20;

    let bank = 1000;

    const appName = 'shop';

    function checkBank() {
        if(bank > 3000){
            return `У банку ${bank}, зробіть інкасацію!`
        }
        return `Bank: ${bank}`
    }

    function checkStorage() {
        return `На складі залишилось пива = ${beerCount}, вина = ${wineCount}, пепсі = ${pepsiCount}, Ціна пива = ${beerPrice} грн, ціна вина = ${winePrice} грн, ціна пепсі = ${pepsiPrice} грн`
    }

    function sellBeer(count) {
        if (count <= beerCount) {
            beerCount -= count;
            bank += count * beerPrice;
            if(count >= 20){
                return `У вас знижка! Пиво : ${count} шт на суму : ${(count * beerPrice) - (count * beerPrice) * 0.1} грн`
            }
            return `Пиво : ${count} шт на суму : ${count * beerPrice} грн`
         
        }
    
        return `Недостатньо товару на складі`
    }
    function sellWine(count) {
        if (count <= wineCount) {
            wineCount -= count;
            bank += count * winePrice;
            if(count >= 20){
                return `У вас знижка! Вино : ${count} шт на суму : ${(count * winePrice) - (count * winePrice) * 0.1} грн`
            }
            return `Вино : ${count} шт на суму : ${count * winePrice} грн`
        }
        return `Недостатньо товару на складі`
    }
    function sellPepsi(count) {
        if (count <= pepsiCount) {
            pepsiCount -= count;
            bank += count * pepsiPrice;
            if(count >= 20){
                return `У вас знижка! Пепсі : ${count} шт на суму : ${(count * pepsiPrice) - (count * pepsiPrice) * 0.1} грн`
            }
            return `Пепсі : ${count} шт на суму : ${count * pepsiPrice} грн`
        }
        return `Недостатньо товару на складі`
    }

    export { checkBank as bank, checkStorage, sellBeer, sellWine, sellPepsi};