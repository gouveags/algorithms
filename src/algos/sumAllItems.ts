export function sumAllItems(arr: number[]): number {
  if (arr.length === 0)
    return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
