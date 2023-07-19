// normal function

function addWithNormalFunction(num1: number, num2: number): string {
  const sum = num1 + num2;

  return `Total sum of ${num1} and ${num2} is: ${sum}`;
}

console.log(addWithNormalFunction(2, 2));

// arrow function

const addWithArrowFunction = (num1: number, num2: number): number =>
  num1 + num2;

console.log(addWithArrowFunction(3, 3));
