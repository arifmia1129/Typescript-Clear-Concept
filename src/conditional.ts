type A = number;
type B = string;
type C = null;

type D = A extends string
  ? string
  : B extends number
  ? number
  : C extends null
  ? null
  : unknown;
