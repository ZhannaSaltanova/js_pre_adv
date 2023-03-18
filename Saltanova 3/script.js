
function CoffeeMake() {
    this.isOn = false;
  }
  
  CoffeeMake.prototype.on = function() {
    this.isOn = true;
    console.log('Coffee machine is turned on');
  };
  
  CoffeeMake.prototype.off = function() {
    this.isOn = false;
    console.log('Coffee machine is turned off');
  };
  
  function DripCoffeeMaker() {
    CoffeeMake.call(this);
  }
  
  DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
  DripCoffeeMaker.prototype.constructor = DripCoffeeMaker;
  
  DripCoffeeMaker.prototype.brew = function() {
    console.log('Drip coffee is brewing');
  };
  
  function EspressoMachine() {
    CoffeeMake.call(this);
  }
  
  EspressoMachine.prototype = Object.create(CoffeeMake.prototype);
  EspressoMachine.prototype.constructor = EspressoMachine;
  
  EspressoMachine.prototype.brew = function() {
    console.log('Espresso is brewing');
  };
  
  function PodCoffeeMaker() {
    CoffeeMake.call(this);
  }
  
  PodCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
  PodCoffeeMaker.prototype.constructor = PodCoffeeMaker;
  
  PodCoffeeMaker.prototype.brew = function() {
    console.log('Pod coffee is brewing');
  };

