import { binarySearch } from "@/algos/binarySearch";
import { quickSort, quickSortV2 } from "@/algos/quickSort";
import { selectionSort, selectionSortV2 } from "@/algos/selectionSort";
import { findMissingNumberInArray } from "@/algos/findMissingNumberInArray";
import { findSmallestIndex, findSmallestIndexV2 } from "@/algos/findSmallestIndex";
import { sumAllItems } from "./algos/sumAllItems";
import { factorial } from "./algos/factorial";

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (a == null || b == null) return a === b;

  if (typeof a !== typeof b) return false;


  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }

    return true;
  }

  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }

  return false;
}

function testResult(name: string, result: any, expected: any): void {
  console.log(`Testing: ${name}`);

  if (deepEqual(result, expected)) {
    console.log("✅ Test passed");
    console.log(`Result: ${JSON.stringify(result)}`);
    console.log(`Expected: ${JSON.stringify(expected)}`);
    console.log("--------------------------------");
  } else {
    console.log("❌ Test failed");
    console.log(`Result: ${JSON.stringify(result)}`);
    console.log(`Expected: ${JSON.stringify(expected)}`);
    console.log("--------------------------------");
  }
}

// use this to skip tests
function xtestResult(name: string, result: any, expected: any): null {
  console.log(`Skipping: ${name}`);
  console.log("--------------------------------");

  return null

}

function main(): void {

  // test quickSort
  testResult("QuickSort - Basic array sorting", quickSort([5, 3, 2, 4, 1]), [1, 2, 3, 4, 5]);
  testResult("QuickSortV2 - Basic array sorting", quickSortV2([5, 3, 2, 4, 1]), [1, 2, 3, 4, 5]);

  // test selectionSort
  testResult("SelectionSort - Basic array sorting", selectionSort([5, 3, 2, 4, 1]), [1, 2, 3, 4, 5]);
  testResult("SelectionSortV2 - Basic array sorting", selectionSortV2([5, 3, 2, 4, 1]), [1, 2, 3, 4, 5]);


  // test findSmallestIndex
  testResult("FindSmallestIndex - Find minimum value", findSmallestIndex([5, 3, 2, 4, 1]), 4);
  testResult("FindSmallestIndexV2 - Find minimum value with range", findSmallestIndexV2([5, 3, 2, 4, 1], 0, 5), 4);

  // test findMissingNumberInArray
  testResult("FindMissingNumber - Find missing number in sequence", findMissingNumberInArray([1, 2, 3, 4, 6], 6), 5);

  // test binarySearch
  testResult("BinarySearch - Find number in sorted array", binarySearch([1, 2, 3, 4, 5], 3), 3);
  testResult("BinarySearch - Find number not in sorted array", binarySearch([1, 2, 3, 4, 5], 7), null);
  testResult("BinarySearch - Find number in empty array", binarySearch([], 7), null);

  // test sumAllItems
  testResult("SumAllItems - Sum all items in array", sumAllItems([1, 2, 3, 4, 5]), 15);
  testResult("SumAllItems - Sum all items in empty array", sumAllItems([]), 0);

  // test factorial
  testResult("Factorial - Factorial of 0", factorial(0), 0);
  testResult("Factorial - Factorial of 1", factorial(1), 1);
  testResult("Factorial - Factorial of 5", factorial(5), 120);

}

main();