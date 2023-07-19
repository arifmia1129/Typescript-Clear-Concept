// class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  showInfo(): void {
    console.log(`Name is ${this.name}, Age is ${this.age}`);
  }
}

// make instance from class
const person1 = new Person('Arif', 23);

// inheritance
class Employee extends Person {
  position: string;
  salary: number;

  constructor(name: string, age: number, position: string, salary: number) {
    super(name, age);
    this.position = position;
    this.salary = salary;
  }
}

const employee = new Employee('Arif', 22, 'Developer', 20000);

console.log(employee.showInfo());
