// generic type
type MyArray<T> = Array<T>;

const myStringArray: MyArray<string> = ['Arif', 'Binu', 'Ariba', 'Abdullah'];

const myNumbersArray: MyArray<number> = [1, 2, 3, 4];

const myBooleanArray: MyArray<boolean> = [true, false];

type Person = {
  name: string;
  age: number;
};

const myPersonArray: MyArray<Person> = [
  { name: 'Arif', age: 23 },
  { name: 'Binu', age: 21 },
];

// generic type in tuples
type GenType<X, Y> = [X, Y];

const myTuple: GenType<string, number> = ['Arif', 22];

// generic type in function

const getParams = <X, Y>(param1: X, param2: Y): void => {
  console.log(`Param-1: ${param1} & Param-2: ${param2}`);
};

getParams<string, number>('Hello', 23);

// generic type in interface
interface IMe<T, U> {
  name: string;
  age: T;
  mark: U;
}

const arif: IMe<number, string> = {
  name: 'Arif',
  age: 22,
  mark: '20',
};

const binu: IMe<string, number> = {
  name: 'Binu',
  age: '21 years',
  mark: 21,
};

// keyof

type Me = {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
};

const myInfo: Me = {
  name: 'Arif',
  age: 22,
  gender: 'male',
};

type ObjKey = keyof Me;

const findKey: ObjKey = 'gender';

console.log(myInfo[findKey]);
