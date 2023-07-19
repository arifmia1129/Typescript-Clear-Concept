const personInfo: {
  name: string;
  readonly age: number;
  isMarried?: boolean;
} = {
  name: 'Arif',
  age: 23,
  isMarried: true,
};

personInfo.name = 'Md Arif';

console.log(personInfo);
