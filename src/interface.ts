interface IStudent {
  name: string;
  age: number;
  class: 'one' | 'two' | 'three' | 'four' | 'five';
}

const student1: IStudent = {
  name: 'Ariba',
  age: 6,
  class: 'one',
};
