import { isPositiveNumber } from "../src";

const value = 5;

const result = {
  value,
  isPositiveNumber: isPositiveNumber(value),
};

console.log(result);
