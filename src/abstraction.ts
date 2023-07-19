abstract class Car {
  abstract start(): void;
  abstract stop(): void;
}

class MyCar extends Car {
  start(): void {
    console.log('Star engine');
  }
  stop(): void {
    console.log('Stop engine');
  }
}

const car = new MyCar();

car.start;
