// // spread

// const adultMember: string[] = ['Arif', 'Binu'];
// const childMember: string[] = ['Ariba', 'Abdullah'];

// adultMember.push(...childMember);

// console.log(adultMember);

// // rest parameter

// const auth = (...role: string[]): string => {
//   if (role.includes('admin')) {
//     return 'You are a valid user';
//   } else {
//     return 'Status code 401';
//   }
// };

// console.log(auth('admin'));

// const totalCost = (...cost: number[]): number => {
//   let sum = 0;

//   cost.map((amount: number) => {
//     sum = sum + amount;
//   });

//   return sum;
// };

// console.log(totalCost(1, 2, 3));
