export function binarySearch(arr: number[], target: number): number | null {
  if (arr.length === 0, arr.length === 1 && arr[0] !== target)
    return null;

  if (arr.length === 1)
    return arr[0];

  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target)
    return arr[mid];

  if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target);
  }

  if (arr[mid] < target) {
    return binarySearch(arr.slice(mid + 1), target);

  }

  return null;
}