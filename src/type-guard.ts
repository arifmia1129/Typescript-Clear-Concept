//  of guard

type Search = string | number;

const searchAnything = (term: Search): void => {
  if (typeof term === 'string') {
    console.log(`Your search term data type is string!`);
  } else if (typeof term === 'number') {
    console.log('Your search term data type is number');
  }
};

searchAnything(100);

// in guard

type A = {
  name: string;
  phone: string;
};

type B = A & {
  address: string;
};

const checkIn = (info: A | B): void => {
  if ('address' in info) {
    console.log(`This info used type of B`);
  } else {
    console.log('This info used type of A');
  }
};

console.log(
  checkIn({
    name: 'Arif',
    phone: '01849676331',
    address: 'Gobindaganj, Gaibandha',
  })
);

// instance of guard

class P {
  position: string;
  salary: number;

  constructor(position: string, salary: number) {
    this.position = position;
    this.salary = salary;
  }
  showSalary(): void {
    console.log(`Salary: ${this.salary}`);
  }
}

class Q extends P {
  constructor(position: string, salary: number) {
    super(position, salary);
  }
  showSalary(): void {
    console.log(`Salary: ${this.salary}`);
  }
}

class R extends P {
  constructor(position: string, salary: number) {
    super(position, salary);
  }
  showSalary(): void {
    console.log(`Salary: ${this.salary}`);
  }

  showSalaryWithPosition(): void {
    console.log(`Position: ${this.position}, Salary: ${this.salary}`);
  }
}

const pInstance = new P('Developer', 20);
const qInstance = new R('Engineer', 30);

const findInstanceClass = (instance: P): void => {
  if (instance instanceof P) {
    instance.showSalary();
  }

  console.log(instance instanceof R);
};

findInstanceClass(pInstance);
findInstanceClass(qInstance);
