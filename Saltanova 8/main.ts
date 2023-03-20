// 1

// let city:string = 'Kyiv';
// city = 'Lviv';
// let address:string = city;
// console.log(address);


// 2


// const num: number = Number(prompt("Введіть число:"));
// const message: string = num === 0 
//   ? "Число 0." 
//   : num % 2 === 0 
//     ? "Число парне." 
//     : "Число непарне.";

// console.log(message);

// 3

// function max(...arg : number[]): number {
//     return Math.max(...arg);
//   }
  
//   console.log(max(5, -2));
//   console.log(max(5, -2, 30, 6)); 

// 4

// function getSqrt(arg: any) : void {
//     if(arg === undefined){
//         console.log('Будь ласка, введіть число!');
//     } else if(typeof arg !== 'number' || isNaN(arg)){
//         console.log('Повинно бути числове значення.');
//     } else if(arg < 0){
//         console.log('Введіть додатнє число.');
//     } else {
//         const result = Math.sqrt(arg);
//         console.log(`Квадратний корінь з ${arg} дорівнює ${result}.`);
//     }
// }

// getSqrt(5);
// getSqrt('abn');
// getSqrt(-7);

// 5

let form = document.forms[0] as HTMLFormElement;
let add = document.querySelector('.btn_add') as HTMLFormElement;
let remove = document.querySelector('.btn_remove') as HTMLFormElement;
let cenzor = document.querySelector('.btn_cenzor') as HTMLFormElement;
let bad = document.querySelector('.bad') as HTMLFormElement;
let badContent: string[] = [];
const re : any = /\w/g

function addWord(): void {
   if(form[0].value){
    badContent.push(form[0].value);
    bad.textContent = badContent;
    
    
    form[0].value = '';
    form[0].placeholder = `word here...`;
    form[0].style.border = '2px solid grey';
    } else {
        form[0].placeholder = `Please write a word!`;
        form[0].style.border = '3px solid red';
    }
}

function resetWord():void {
    badContent.length = 0;
    bad.textContent = badContent;
}

function editText():void {
    if (form[3].value.length > 0){
        const textCenzor: string[] = form[3].value.split(" ");
        form[3].value = textCenzor.map(elem => badContent.includes(elem) ? elem.replace(re, '*') : elem).join(' ')
        form[3].placeholder = `text here..`
    }
    else {
        form[3].placeholder = `Please write a text!`;
        form[3].style.border = '3px solid red';
    }
}

