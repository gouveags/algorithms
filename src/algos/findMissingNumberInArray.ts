// The problem: You are given an array of n - 1 integers
// which are in the range between 1 and n.
// All numbers appear exactly once,
// except one number, which is missing. Find this missing number.


export function findMissingNumberInArray (arr1: number[], n: number): number {
  let missingNumber: number = 0;

  for (let i = 0; i <= n - 1; i++) {
    missingNumber ^= (i + 1) ^ arr1[i];
  }

  return missingNumber;
}
