// Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.

class Worker {
    constructor(firstName, secondName, rate, days){
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
        getSalary(){
            return this.rate * this.days;
        }
    }

    const worker = new Worker('Ivan', 'Ivanov', 10, 31);
    const worker1 = new Worker('Alina', 'Petrova', 13, 28);
    let totalSalary = worker.getSalary() + worker1.getSalary();

    console.log(worker.firstName);
    console.log(worker.secondName);
    console.log(worker.rate);
    console.log(worker.days); 
    console.log(worker.getSalary());
    console.log(totalSalary);
    
// Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.

class MyString {
    constructor(str){
        this.str = str;
    }
    reverse(){
        return this.str.split("").reverse().join("");
    }
    ucFirst(){
        return this.str.charAt(0).toUpperCase() + this.str.slice(1);
    }
    ucWords(){
        return this.str.replace(/\b\w/g, (l) => l.toUpperCase());
    }
}

let str = new MyString("ivan love arsenal");
  console.log(str.reverse());
  console.log(str.ucFirst()); 
  console.log(str.ucWords()); 

//   Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний. Використовує cучасний class.


class CoffeeMake {
    constructor() {
      this.power = false;
    }
  
    on() {
      this.power = true;
      console.log("Coffee machine is on.");
    }
  
    off() {
      this.power = false;
      console.log("Coffee machine is off.");
    }
  }
  
  class DripCoffeeMaker extends CoffeeMake {
    brew() {
      if (this.power) {
        console.log("Brewing drip coffee...");
      } else {
        console.log("The coffee maker is not turned on.");
      }
    }
  }
  
  class EspressoMachine extends CoffeeMake {
    brew() {
      if (this.power) {
        console.log("Brewing espresso...");
      } else {
        console.log("The espresso machine is not turned on.");
      }
    }
  
    frothMilk() {
      console.log("Frothing milk...");
    }
  }
  
  class PodCoffeeMaker extends CoffeeMake {
    brew() {
      if (this.power) {
        console.log("Brewing coffee with pods...");
      } else {
        console.log("The pod coffee maker is not turned on.");
      }
    }
  
    addPod() {
      console.log("Adding coffee pod...");
    }
  }

  
  const dripCoffeeMaker = new DripCoffeeMaker();
  const espressoMachine = new EspressoMachine();
  const podCoffeeMaker = new PodCoffeeMaker();
  
  dripCoffeeMaker.on();
  dripCoffeeMaker.brew(); 
  dripCoffeeMaker.off();
  
  espressoMachine.on();
  espressoMachine.brew(); 
  espressoMachine.frothMilk(); 
  espressoMachine.off();
  
  podCoffeeMaker.on();
  podCoffeeMaker.addPod(); 
  podCoffeeMaker.brew(); 
  podCoffeeMaker.off();
  
