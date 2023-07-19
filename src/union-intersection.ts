// intersection
type ChildInfo = {
  name: string;
  age: number;
};

type PersonInfo = ChildInfo & {
  gender: 'male' | 'female' | 'other';
  address: string;
};

const person1: PersonInfo = {
  name: 'Arif',
  age: 22,
  gender: 'male',
  address: 'Gobindaganj, Gaibandha',
};

// union
const me: ChildInfo | PersonInfo = {
  name: 'Arif',
  age: 22,
};

// intersection -> &
// union -> |
